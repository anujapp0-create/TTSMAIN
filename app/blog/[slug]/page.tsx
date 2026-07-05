import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, Clock } from "lucide-react";
import Container from "@/components/Container";
import BlogContent from "@/components/BlogContent";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import { blogPosts, getPostBySlug, getSortedPosts } from "@/lib/blogPosts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getSortedPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <article>
        <section className="bg-brand-950 py-20 sm:py-24">
          <Container className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-brand-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold-400">
              {post.category}
            </span>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-5 text-sm text-brand-300">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={15} />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={15} />
                {post.readTime}
              </span>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container className="max-w-3xl">
            <BlogContent blocks={post.content} />
          </Container>
        </section>
      </article>

      {relatedPosts.length > 0 && (
        <section className="bg-slate-50 py-20">
          <Container>
            <h2 className="text-2xl font-bold text-brand-900">
              More from the blog
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        title="Have a question about your own tax situation?"
        description="These posts cover the general rules — your specific situation might need a closer look. We're happy to help."
      />
    </>
  );
}
