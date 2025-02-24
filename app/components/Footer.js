"use client";
import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-6 mt-10">
      <div className="flex items-center justify-center">
        {showButton && (
          <button
            onClick={scrollToTop}
            className="mt-4 px-4 py-2 hover:bg-gray-100 flex items-center justify-center gap-x-2 rounded-md transition"
          >
            Back to Top <ArrowUpIcon className="size-4" />
          </button>
        )}
      </div>
    </footer>
  );
}