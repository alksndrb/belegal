import posts from "@/data/blog/posts-en.json";
import {
  PageLayout,
  PageHeader,
  PageText,
} from "@/components/Global/globalComponents";
import { BlogCard } from "@/components/Blog/blogComponents";

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <PageLayout>
      <PageHeader>Blog</PageHeader>
      <PageText>
        Insights, news, and updates from BeLegal. Explore our articles to stay
        informed about legal developments and our firm’s perspective.
      </PageText>

      <div className="flex flex-col mt-10">
        {sorted.map((post) => (
          <BlogCard key={post.slug} post={post} lang="en" />
        ))}
      </div>
    </PageLayout>
  );
}
