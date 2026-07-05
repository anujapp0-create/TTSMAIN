import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blogPosts";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
    >
      <span className="mb-4 inline-flex w-fit items-center rounded-full bg-gold-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-700">
        {post.category}
      </span>
      <h3 className="text-xl font-semibold text-brand-900 group-hover:text-brand-700">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-slate-600">{post.excerpt}</p>
      <div className="mt-5 flex items-center gap-4 text-xs text-slate-500">
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays size={14} />
          {formatDate(post.date)}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock size={14} />
          {post.readTime}
        </span>
      </div>
    </Link>
  );
}
