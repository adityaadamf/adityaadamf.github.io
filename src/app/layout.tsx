import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Aditya Adam Firdaus Portfolio",
  description: "Hi, this is Aditya Adam Firdaus portfolio. Thank you for visiting my website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="1; url=https://adityaa.my.id" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== "undefined") {
                window.location.href = "https://adityaa.my.id" + window.location.pathname + window.location.search + window.location.hash;
              }
            `,
          }}
        />
      </head>
      <body
        className={`${jakarta.variable} antialiased bg-white dark:bg-neutral-900`}
      >
        <Navbar />
        <div className="max-w-4xl lg:max-w-7xl mx-auto px-4 py-2 md:py-10">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
