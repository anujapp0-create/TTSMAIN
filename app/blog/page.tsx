import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import BlogCard from "@/components/BlogCard";
import Reveal from "@/components/Reveal";
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
      <PageHero
        eyebrow="The TaxTrack blog"
        title="Practical tax guidance, without the jargon"
        description="Deadlines, filing tips, and notice-response guides for individuals and businesses navigating Indian income tax and GST."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading title="Latest articles" />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 60}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
