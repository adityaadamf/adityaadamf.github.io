import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Aditya Adam Firdaus Portfolio",
  description: "Sharing knowledge and insights by Aditya, focused on data, technology, and solving real-world challenges.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}