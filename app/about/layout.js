export const metadata = {
  title: "About - Aditya Adam F.",
  description: "This web app was created by Aditya Adam Firdaus as a personal platform to share insights, projects, and experiences.",
  keywords: "about adit, about aditya, about aditya adam, about aditya adam firdaus, about adityaadamf, tentang adit, tentang aditya, tentang aditya adam, tentang aditya adam firdaus, tentang adityaadamf",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/assets/favicon/favicon.ico" },
      { url: "/assets/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/assets/favicon/apple-touch-icon.png",
  },
};

export default function AboutLayout({ children }) {
  return (
    <>
    {children}
    </>
  );
}