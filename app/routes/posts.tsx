import type { Route } from "./+types/posts";
import { useParams } from "react-router";

export function meta({ params }: Route.MetaArgs) {
  const title = params.slug ? `Post: ${params.slug}` : "Post";
  return [
    { title },
    { name: "description", content: `Viewing post ${params.slug ?? ""}` },
  ];
}

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <main className="p-4">
      <h1 className="text-xl font-semibold">Post: {slug}</h1>
      <p className="text-gray-600 mt-2">Đây là trang chi tiết cho slug: {slug}</p>
    </main>
  );
}

