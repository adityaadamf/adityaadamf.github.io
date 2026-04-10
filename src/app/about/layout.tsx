import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Aditya Adam Firdaus Portfolio",
  description: "Learn more about Aditya, a data analyst and data scientist with experience in data analysis, machine learning, and insights-driven decision making.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}