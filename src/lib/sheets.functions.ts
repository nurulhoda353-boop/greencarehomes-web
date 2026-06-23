import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { appendAppointmentEntry, appendContactEntry } from "@/lib/sheets.server";

const contactSchema = z.object({
  name: z.string().min(1).max(200),
  phone: z.string().min(1).max(50),
  email: z.string().max(200).optional().default(""),
  service: z.string().max(200).optional().default(""),
  message: z.string().max(5000).optional().default(""),
});

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    await appendContactEntry(data);
    return { success: true };
  });

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

export const submitAppointment = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => appointmentSchema.parse(input))
  .handler(async ({ data }) => {
    await appendAppointmentEntry(data);
    return { success: true };
  });
