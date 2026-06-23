import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { supabase } from "@/lib/supabase.server";

const contactSchema = z.object({
  name: z.string().min(1).max(200),
  phone: z.string().min(1).max(50),
  email: z.string().max(200).optional().default(""),
  service: z.string().max(200).optional().default(""),
  message: z.string().max(5000).optional().default(""),
});

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const json = await request.json();
          const data = contactSchema.parse(json);
          const { error: dbError } = await supabase.from("contacts").insert([
            {
              name: data.name,
              phone: data.phone,
              email: data.email,
              service: data.service,
              message: data.message,
            },
          ]);
          if (dbError) throw dbError;

          // Send to Google Sheets via Apps Script
          const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
          if (scriptUrl) {
            fetch(scriptUrl, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ type: "contact", ...data }),
            }).catch(e => console.error("Google Sheets sync failed:", e));
          }

          return Response.json({ success: true });
        } catch (error) {
          console.error("Contact submit failed", error);
          return Response.json(
            { success: false, error: "Could not submit contact form" },
            { status: 500 },
          );
        }
      },
    },
  },
});