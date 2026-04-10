import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Aditya Adam Firdaus Portfolio",
  description: "Showcasing data analytics and data science projects by Aditya, focused on solving real-world problems with data.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}