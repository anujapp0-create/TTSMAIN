import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import { getSortedPosts } from "@/lib/blogPosts";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Blog",
  description: `Practical income tax and GST guidance for individuals and businesses in India, from ${siteConfig.name}.`,
};

export default function BlogPage() {
  const posts = getSortedPosts();

  return (
    <>
      <section className="bg-brand-950 py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-brand-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-400">
              The TaxTrack blog
            </span>
            <h1 className="mt-6 font-serif text-4xl font-medium leading-[1.1] text-white sm:text-5xl">
              Practical tax guidance, without the jargon
            </h1>
            <p className="mt-6 text-lg text-brand-200">
              Deadlines, filing tips, and notice-response guides for
              individuals and businesses navigating Indian income tax and GST.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading title="Latest articles" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
