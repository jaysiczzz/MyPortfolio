"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-blue-950 dark:bg-slate-900 shadow-sm border-b border-blue-900 dark:border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-white">
              My Portfolio
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === "/" ? "bg-blue-800 dark:bg-slate-700 text-white border-b-2 border-white" : "text-blue-200 dark:text-slate-300 hover:text-white dark:hover:text-white"}`}>
              Home
            </Link>
            <Link href="/about" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === "/about" ? "bg-blue-800 dark:bg-slate-700 text-white border-b-2 border-white" : "text-blue-200 dark:text-slate-300 hover:text-white dark:hover:text-white"}`}>
              About
            </Link>
            <Link href="/contacts" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === "/contacts" ? "bg-blue-800 dark:bg-slate-700 text-white border-b-2 border-white" : "text-blue-200 dark:text-slate-300 hover:text-white dark:hover:text-white"}`}>
              Contacts
            </Link>
            <Link href="/projects" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === "/projects" ? "bg-blue-800 dark:bg-slate-700 text-white border-b-2 border-white" : "text-blue-200 dark:text-slate-300 hover:text-white dark:hover:text-white"}`}>
              Projects
            </Link>
          </nav>

          {/* Theme Toggle & Mobile menu button */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}