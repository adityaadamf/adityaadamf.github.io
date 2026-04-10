"use client";

import { menuNavbar } from "@/data/navbar";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ContactRound, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;

      const navHeight = navRef.current.offsetHeight;
      setIsSticky(window.scrollY > navHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`sticky top-0 z-50 transition-all duration-300 ease-out ${
        isSticky
          ? "py-3 bg-white/80 dark:bg-neutral-900/80 backdrop-blur"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-4xl lg:max-w-7xl px-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="text-lg font-semibold">
            Aditya
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            <ul className="flex text-sm gap-2 font-medium">
              {menuNavbar.map((menu) => {
                const isActive = pathname === menu.link;

                return (
                  <li key={menu.name}>
                    <Link
                      href={menu.link}
                      className={clsx(
                        "rounded px-2 py-2 transition-colors",
                        isActive
                          ? "text-neutral-900 dark:text-white"
                          : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                      )}
                    >
                      {menu.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/contact"
              className="flex items-center gap-1 text-sm font-semibold bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 px-3 py-2 rounded-lg shadow-md"
            >
              <ContactRound className="size-4" />
              Contact
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 rounded-xl bg-white dark:bg-neutral-900 space-y-4 transition-all duration-300">
            
            <ul className="flex flex-col gap-2 text-sm font-medium">
              {menuNavbar.map((menu) => {
                const isActive = pathname === menu.link;

                return (
                  <li key={menu.name}>
                    <Link
                      href={menu.link}
                      onClick={() => setIsOpen(false)}
                      className={clsx(
                        "block rounded px-3 py-2",
                        isActive
                          ? "bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900"
                          : "text-neutral-600 dark:text-neutral-300"
                      )}
                    >
                      {menu.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 text-sm font-semibold bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 px-3 py-2 rounded-lg"
            >
              <ContactRound className="size-4" />
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}