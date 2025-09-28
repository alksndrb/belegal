import posts from "@/data/blog/posts-sr.json";
import {
  PageLayout,
  PageHeader,
  PageText,
} from "@/components/Global/globalComponents";
import { BlogCard } from "@/components/Blog/blogComponents";

export default function BlogIndexSR() {
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <PageLayout>
      <PageHeader>Blog</PageHeader>
      <PageText>
        Tekstovi, vesti i ažuriranja od BeLegal tima. Pročitajte naše članke
        kako biste ostali informisani o pravnim dešavanjima i našem pogledu na
        njih.
      </PageText>

      <div className="flex flex-col mt-10">
        {sorted.map((post) => (
          <BlogCard key={post.slug} post={post} lang="sr" />
        ))}
      </div>
    </PageLayout>
  );
}
