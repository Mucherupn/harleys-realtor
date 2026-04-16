import type { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return <article className="rounded-premium border border-border p-4"><h3 className="font-semibold">{post.title}</h3><p className="text-sm text-muted">{post.excerpt}</p></article>;
}
