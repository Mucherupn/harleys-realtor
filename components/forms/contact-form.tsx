"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/validators/forms";
import { z } from "zod";
import { Button } from "@/components/ui/button";

type FormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (values: FormValues) => {
    await fetch("/api/contact", { method: "POST", body: JSON.stringify(values) });
    setSubmitted(true);
  };

  if (submitted) return <p className="rounded-premium bg-surface p-4 text-sm">Thanks. We will contact you shortly.</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 rounded-premium border border-border p-6">
      <input {...register("name")} placeholder="Full name" className="rounded border border-border px-3 py-2" />
      {errors.name && <p className="text-xs text-brand-700">Name is required.</p>}
      <input {...register("email")} placeholder="Email" className="rounded border border-border px-3 py-2" />
      <input {...register("phone")} placeholder="Phone" className="rounded border border-border px-3 py-2" />
      <textarea {...register("message")} placeholder="Tell us how we can help" className="min-h-28 rounded border border-border px-3 py-2" />
      <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send inquiry"}</Button>
    </form>
  );
}
