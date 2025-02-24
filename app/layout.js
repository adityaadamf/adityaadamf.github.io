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
  robots: "index, follow"
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
