export function PageHero({ title, description }: { title: string; description: string }) {
  return <div><h1 className="text-4xl font-semibold">{title}</h1><p className="mt-3 text-muted">{description}</p></div>;
}
