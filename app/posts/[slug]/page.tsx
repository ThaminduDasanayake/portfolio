import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SIMPLE_POSTS, SimplePost } from "@/lib/data";
import { BetterAuthGuideArticle } from "@/components/posts/articles/better-auth-guide";
import { PhosphorVsLucideArticle } from "@/components/posts/articles/phosphor-vs-lucide";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SIMPLE_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = SIMPLE_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} — Thamindu Dasanayake`,
    description: post.description || post.title,
    openGraph: {
      title: post.title,
      description: post.description || post.title,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function renderArticleContent(slug: string) {
  switch (slug) {
    case "phosphor-over-lucide":
      return <PhosphorVsLucideArticle />;
    case "better-auth-github-setup":
      return <BetterAuthGuideArticle />;

    default:
      return null;
  }
}

export default async function PostDetailPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post: SimplePost | undefined = SIMPLE_POSTS.find(
    (p) => p.slug === slug
  );

  if (!post) {
    notFound();
  }

  const content = renderArticleContent(post.slug);

  if (!content) {
    notFound();
  }

  return content;
}
