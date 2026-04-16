import { notFound } from "next/navigation";
import { SectionContainer } from "@/components/ui/section-container";
import { getBlogPostBySlug, getPublishedBlogPosts } from "@/lib/queries/public";

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) notFound();
  const related = (await getPublishedBlogPosts()).filter((entry) => entry.slug !== params.slug).slice(0, 2);

  return (
    <SectionContainer>
      <h1 className="text-4xl font-semibold">{post.title}</h1>
      <p className="mt-2 text-sm text-muted">By {post.author_name} • {post.created_at}</p>
      <article className="prose mt-6 max-w-none text-muted">{post.content}</article>
      <h2 className="mt-10 text-2xl font-semibold">Related posts</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">{related.map((entry) => <div key={entry.id} className="rounded-premium border border-border p-4">{entry.title}</div>)}</div>
    </SectionContainer>
  );
}
