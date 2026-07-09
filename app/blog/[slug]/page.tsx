import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, Clock } from "lucide-react";
import Container from "@/components/Container";
import BlogContent from "@/components/BlogContent";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
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
        <PageHero eyebrow={post.category} title={post.title}>
          <div className="mt-6 flex items-center gap-5 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={15} />
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={15} />
              {post.readTime}
            </span>
          </div>
        </PageHero>

        <section className="py-16 sm:py-20">
          <Container className="max-w-3xl">
            <BlogContent blocks={post.content} />
          </Container>
        </section>
      </article>

      {relatedPosts.length > 0 && (
        <section className="bg-gold-50/60 py-20">
          <Container>
            <Reveal>
              <h2 className="font-serif text-2xl font-medium text-brand-900">
                More from the blog
              </h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related, i) => (
                <Reveal key={related.slug} delay={i * 60}>
                  <BlogCard post={related} />
                </Reveal>
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
