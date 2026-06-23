import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { supabase } from "@/lib/supabase.server";

const appointmentSchema = z.object({
  name: z.string().min(1).max(200),
  phone: z.string().min(1).max(50),
  email: z.string().max(200).optional().default(""),
  service: z.string().max(200),
  patient: z.string().max(100),
  date: z.string().max(100),
  time: z.string().max(100),
  address: z.string().max(500),
  notes: z.string().max(5000).optional().default(""),
});

export const Route = createFileRoute("/api/public/appointment")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const json = await request.json();
          const data = appointmentSchema.parse(json);
          const { error: dbError } = await supabase.from("appointments").insert([
            {
              name: data.name,
              phone: data.phone,
              email: data.email,
              service: data.service,
              patient: data.patient,
              date: data.date,
              time: data.time,
              address: data.address,
              notes: data.notes,
            },
          ]);
          if (dbError) throw dbError;

          // Send to Google Sheets via Apps Script
          const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
          if (scriptUrl) {
            fetch(scriptUrl, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ type: "appointment", ...data }),
            }).catch(e => console.error("Google Sheets sync failed:", e));
          }

          return Response.json({ success: true });
        } catch (error) {
          console.error("Appointment submit failed", error);
          return Response.json(
            { success: false, error: "Could not submit appointment form" },
            { status: 500 },
          );
        }
      },
    },
  },
});