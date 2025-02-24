import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-poppins"
});

export const metadata = {
  title: "Aditya Adam F. - Personal",
  description: "This web app was created by Aditya Adam Firdaus as a personal platform to share insights, projects, and experiences.",
  keywords: "adit, aditya, aditya adam, aditya adam firdaus, adityaadamf",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
