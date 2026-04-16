"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { quoteSchema } from "@/lib/validators/forms";
import { Button } from "@/components/ui/button";
import { Input, TextArea } from "@/components/ui/input";

type QuoteValues = z.infer<typeof quoteSchema>;

export function QuoteForm() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<QuoteValues>({ resolver: zodResolver(quoteSchema) });
  const onSubmit = async (values: QuoteValues) => {
    await fetch("/api/quote", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(values) });
  };

  return (
    <form className="grid gap-3 rounded-premium border border-border bg-white p-6" onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("name")} placeholder="Full name" />
      <Input {...register("email")} placeholder="Email" />
      <Input {...register("phone")} placeholder="Phone" />
      <Input {...register("serviceType")} placeholder="Service type" />
      <TextArea {...register("message")} placeholder="Tell us about your requirements" className="min-h-28" />
      <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Submitting" : "Request Quote"}</Button>
    </form>
  );
}
