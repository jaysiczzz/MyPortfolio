"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contacts", label: "Contacts" },
  { href: "/projects", label: "Projects" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-950 dark:bg-slate-900 shadow-sm border-b border-blue-900 dark:border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-white">
              My Portfolio
            </Link>
          </div>

          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === href
                    ? "bg-blue-800 dark:bg-slate-700 text-white border-b-2 border-white"
                    : "text-blue-200 dark:text-slate-300 hover:text-white dark:hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </Button>
            </div>
          </div>

        </div>
      </div>

      
      {menuOpen && (
        <div className="md:hidden bg-blue-950 dark:bg-slate-900 border-t border-blue-900 dark:border-slate-700 px-4 pb-4">
          <nav className="flex flex-col space-y-1 pt-3">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === href
                    ? "bg-blue-800 dark:bg-slate-700 text-white border-l-4 border-white"
                    : "text-blue-200 dark:text-slate-300 hover:text-white dark:hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}