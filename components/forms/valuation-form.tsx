"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { valuationSchema } from "@/lib/validators/forms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ValuationValues = z.infer<typeof valuationSchema>;

export function ValuationForm() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<ValuationValues>({ resolver: zodResolver(valuationSchema) });
  const onSubmit = async (values: ValuationValues) => {
    await fetch("/api/valuation", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(values) });
  };

  return (
    <form className="grid gap-3 rounded-premium border border-border bg-white p-6" onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("name")} placeholder="Full name" />
      <Input {...register("email")} placeholder="Email" />
      <Input {...register("phone")} placeholder="Phone" />
      <Input {...register("propertyType")} placeholder="Property type" />
      <Input {...register("location")} placeholder="Location" />
      <Textarea {...register("message")} placeholder="Share details for valuation" className="min-h-28" />
      <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Submitting" : "Request Valuation"}</Button>
    </form>
  );
}
