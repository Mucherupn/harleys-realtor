import { redirect } from "next/navigation";

export default function ForRentPage() {
  redirect("/properties?purpose=rent");
}
