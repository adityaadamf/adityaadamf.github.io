import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Aditya Adam Firdaus Portfolio",
  description: "Get in touch with Aditya for collaboration, data analysis projects, or opportunities in data analytics and data science.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}