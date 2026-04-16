export const formatCurrencyKES = (amount: number): string =>
  new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0
  }).format(amount);

export const imageAltFallback = (primary?: string | null, fallback?: string): string =>
  primary?.trim() || fallback?.trim() || "Harleys Realtor listing image";
