import Image from "next/image";
import Link from "next/link";
import { PageText, HorizontalLine } from "@/components/Global/globalComponents";

// Blog preview card for index
export function BlogCard({ post, lang }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 py-6 border-b last:border-b-0 px-4 md:px-12">
      {/* Image */}
      <Link
        href={lang === "sr" ? `/blog/sr/${post.slug}` : `/blog/${post.slug}`}
        className="w-full md:w-[35%] flex-shrink-0"
      >
        <div className="relative w-full pb-[60%] overflow-hidden rounded-lg shadow-md">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="absolute inset-0 object-cover"
          />
        </div>
      </Link>

      {/* Text */}
      <div className="flex flex-col justify-center md:w-[65%]">
        <time className="text-sm text-neutral-500 mb-2 block">{post.date}</time>
        <Link
          href={lang === "sr" ? `/blog/sr/${post.slug}` : `/blog/${post.slug}`}
        >
          <h2 className="text-2xl font-bold text-dark hover:text-primary transition-colors">
            {post.title}
          </h2>
        </Link>
        <p className="mt-3 text-base text-neutral-700 leading-relaxed">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-3 inline-block text-primary font-medium hover:underline"
        >
          {lang === "sr" ? "Pročitaj više →" : "Read more →"}
        </Link>
      </div>
    </div>
  );
}

// Blog article wrapper for detail page
export function BlogArticle({ post, children, lang }) {
  return (
    <article>
      <h1 className="flex justify-center text-3xl pb-4 font-semibold">
        {post.title}
      </h1>
      <div className="text-sm text-neutral-500 mb-6 text-center">
        {post.date} • {post.author}
      </div>
      <div className="prose max-w-none">{children}</div>

      <div className="mt-8 flex justify-center">
        <Link
          href={lang === "sr" ? "/blog/sr" : "/blog"}
          className="mt-3 inline-block text-primary font-medium hover:underline"
        >
          ← {lang === "sr" ? "Nazad na sve blogove" : "Back to all blogs"}
        </Link>
      </div>
    </article>
  );
}
