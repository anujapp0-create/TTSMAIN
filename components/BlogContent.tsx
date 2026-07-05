import type { ContentBlock } from "@/lib/blogPosts";

export default function BlogContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                className="pt-2 text-2xl font-bold text-brand-900"
              >
                {block.text}
              </h2>
            );
          case "p":
            return (
              <p key={index} className="text-lg leading-relaxed text-slate-700">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={index} className="list-disc space-y-2 pl-6 text-lg text-slate-700">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index} className="list-decimal space-y-2 pl-6 text-lg text-slate-700">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
