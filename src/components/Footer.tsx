import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

export default function Footer() {
  return(
    <footer className="max-w-4xl lg:max-w-7xl mx-auto px-4 pt-14 pb-5 md:py-10 grid gap-4">
      <div className="flex justify-center gap-4">
        <Link 
          className="social-media"
          href="https://www.linkedin.com/in/adityaadamf"
          target="_blank"
        >
          <FaLinkedin size={24} />
        </Link>
        <Link 
          className="social-media"
          href="https://www.github.com/adityaadamf"
          target="_blank"
        >
          <FaGithub size={24} />
        </Link>
        <Link 
          className="social-media"
          href="https://medium.com/@adityaadamf"
          target="_blank"
        >
          <FaMedium size={24} />
        </Link>
      </div>
      <p className="text-center">
        © 2026 Aditya Adam Firdaus
      </p>
    </footer>
  )
}