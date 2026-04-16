import type { PropertyPurpose } from "@/types";

export interface ParsedPropertyFilters {
  purpose?: PropertyPurpose;
  keyword?: string;
}

export const parsePropertyFilters = (searchParams: Record<string, string | string[] | undefined>): ParsedPropertyFilters => {
  const purposeParam = searchParams.purpose;
  const purpose = typeof purposeParam === "string" && ["sale", "rent"].includes(purposeParam)
    ? (purposeParam as PropertyPurpose)
    : undefined;

  const keywordParam = searchParams.keyword;
  const keyword = typeof keywordParam === "string" ? keywordParam.trim() : undefined;

  return { purpose, keyword };
};
