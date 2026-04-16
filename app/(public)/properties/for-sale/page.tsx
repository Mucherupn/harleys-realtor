import { redirect } from "next/navigation";

export default function ForSalePage() {
  redirect("/properties?purpose=sale");
}
