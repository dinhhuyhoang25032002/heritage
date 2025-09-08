import type { Route } from "./+types/home";
import { Welcome } from "../components/layout/homepage/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Heritage | Kết nối mọi điểm đến du lịch" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home({
  loaderData,
}: Route.ComponentProps) {
  return <Welcome />;
}
