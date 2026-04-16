import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const requireAdmin = async () => {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  if (!data.user) {
    redirect("/admin/login");
  }
  return data.user;
};
