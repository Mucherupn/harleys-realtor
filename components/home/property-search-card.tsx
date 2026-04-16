import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function PropertySearchCard() {
  return (
    <div className="mt-10 rounded-premium border border-white/20 bg-white p-5 text-ink shadow-soft md:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Property Search</p>
      <div className="mt-4 grid gap-3 md:grid-cols-4">
        <Select defaultValue="sale">
          <option value="sale">For Sale</option>
          <option value="rent">For Rent</option>
        </Select>
        <Select defaultValue="all">
          <option value="all">All Locations</option>
          <option value="westlands">Westlands</option>
          <option value="kileleshwa">Kileleshwa</option>
        </Select>
        <Input placeholder="Budget (KES)" inputMode="numeric" />
        <Button className="h-11">Search Properties</Button>
      </div>
    </div>
  );
}
