"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { inquirySchema } from "@/lib/validators/forms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type InquiryValues = z.infer<typeof inquirySchema>;

export function InquiryForm({ propertyId }: { propertyId?: string }) {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { propertyId }
  });

  const onSubmit = async (values: InquiryValues) => {
    await fetch("/api/inquiry", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(values) });
  };

  return (
    <form className="grid gap-3" onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("name")} placeholder="Full name" />
      <Input {...register("email")} placeholder="Email" type="email" />
      <Input {...register("phone")} placeholder="Phone" />
      <Textarea {...register("message")} placeholder="I am interested in this listing..." className="min-h-24" />
      <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending" : "Submit Inquiry"}</Button>
    </form>
  );
}
