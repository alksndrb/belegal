import posts from "@/data/blog/posts-sr.json";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PageLayout } from "@/components/Global/globalComponents";
import { BlogArticle } from "@/components/Blog/blogComponents";

export async function generateMetadata({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};

  const url = `https://www.belegal.rs/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: Array.isArray(post.keywords)
      ? post.keywords.join(", ")
      : post.keywords || "BeLegal, law, Serbia",
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPostSR({ params }) {
  const slug = `/${params.slug}/sr`.replace(/^\/|\/$/g, "");
  const post = posts.find((p) => p.slug === `${params.slug}/sr`);

  if (!post) return notFound();

  return (
    <PageLayout>
      <BlogArticle post={post} lang="sr">
        <div className="blog-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </BlogArticle>
    </PageLayout>
  );
}
