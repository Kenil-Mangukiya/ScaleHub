import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Full name must be at least 2 characters" })
    .max(100, { message: "Full name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .regex(/^[+\-\s0-9]{7,}$/, { 
      message: "Please enter a valid phone number (min 7 digits, can include +, -, spaces)" 
    })
    .max(20, { message: "Phone number is too long" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" })
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
