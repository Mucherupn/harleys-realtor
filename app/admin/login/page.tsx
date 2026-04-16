import { SectionContainer } from "@/components/ui/section-container";

export default function AdminLoginPage() {
  return (
    <SectionContainer className="max-w-md">
      <div className="rounded-premium border border-border bg-white p-8 shadow-premium">
        <h1 className="text-2xl font-semibold">Admin Login</h1>
        <p className="mt-2 text-sm text-muted">Supabase Auth login surface scaffold. Implement OTP/password flow with your project credentials.</p>
      </div>
    </SectionContainer>
  );
}
