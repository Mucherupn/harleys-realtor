import { notFound } from "next/navigation";
import { SectionContainer } from "@/components/ui/section-container";
import { getBlogPostBySlug } from "@/lib/queries/public";

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <SectionContainer>
      <h1 className="text-4xl font-semibold">{post.title}</h1>
      <p className="mt-4 max-w-3xl text-muted">{post.excerpt}</p>
    </SectionContainer>
  );
}
