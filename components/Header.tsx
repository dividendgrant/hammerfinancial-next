"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us/" },
  { label: "Funds", href: "/funds/" },
  { label: "Insights", href: "/insights/" },
  { label: "Contact Us", href: "/contact-us/" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-18 py-3">
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.png" alt="Hammer Financial" width={180} height={48} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "text-[#0057AD]"
                  : "text-gray-700 hover:text-[#0057AD]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/work-with-us/"
            className="ml-2 bg-[#0057AD] hover:bg-[#0A2279] text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors"
          >
            Work with Us
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-gray-50 ${
                pathname === item.href ? "text-[#0057AD]" : "text-gray-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/work-with-us/"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center bg-[#0057AD] text-white text-sm font-semibold px-5 py-2.5 rounded-md"
          >
            Work with Us
          </Link>
        </div>
      )}
    </header>
  );
}
