import Link from "next/link";
import { SectionContainer } from "@/components/ui/section-container";
import { getPublishedBlogPosts } from "@/lib/queries/public";

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts();
  return (
    <SectionContainer>
      <h1 className="text-4xl font-semibold">Insights</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.id} className="rounded-premium border border-border p-5">
            <p className="text-xs uppercase tracking-wide text-muted">{post.author_name}</p>
            <h2 className="mt-2 text-xl font-semibold"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
            <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
