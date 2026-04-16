"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contactSchema } from "@/lib/validators/forms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [message, setMessage] = useState<string>("");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: FormValues) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values)
    });
    setMessage(response.ok ? "Thank you. Our team will contact you shortly." : "Something went wrong. Please try again.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 rounded-premium border border-border bg-white p-6">
      <Input {...register("name")} placeholder="Full name" />
      {errors.name ? <p className="text-xs text-brand-700">Please enter your full name.</p> : null}
      <Input {...register("email")} type="email" placeholder="Email" />
      <Input {...register("phone")} placeholder="Phone" />
      <Textarea {...register("message")} placeholder="Tell us what you need" className="min-h-28" />
      <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send message"}</Button>
      {message ? <p className="text-sm text-muted">{message}</p> : null}
    </form>
  );
}
