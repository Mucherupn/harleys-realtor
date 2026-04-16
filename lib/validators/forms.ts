import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  message: z.string().min(10)
});

export const inquirySchema = contactSchema.extend({
  propertyId: z.string().uuid().optional()
});

export const quoteSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  serviceType: z.string().min(3),
  message: z.string().min(10)
});

export const valuationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  propertyType: z.string().min(2),
  location: z.string().min(2),
  message: z.string().min(10)
});
