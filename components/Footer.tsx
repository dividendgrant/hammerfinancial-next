import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0A2279] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <Image src="/logo.png" alt="Hammer Financial" width={160} height={43} className="brightness-0 invert mb-4" />
            <p className="text-sm text-blue-200 leading-relaxed">
              Your partner in creating long-term crypto income through ETFs,
              yield funds, and disciplined strategy.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-300 mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                ["Home", "/"],
                ["About", "/about-us/"],
                ["Funds", "/funds/"],
                ["Insights", "/news/"],
                ["Contact Us", "/contact-us/"],
                ["Work with Us", "/work-with-us/"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-blue-200 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-300 mb-4">Connect</h3>
            <a
              href="https://x.com/DividendGrant"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              @DividendGrant
            </a>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6">
          <p className="text-xs text-blue-300 leading-relaxed">
            <strong className="text-blue-200">Disclaimer:</strong> Hammer Financial provides educational content only and
            is not a licensed financial advisor, investment advisor, or broker-dealer. Nothing on this site
            constitutes financial, investment, legal, or tax advice. All investment involves risk. Please
            consult a qualified professional before making any investment decisions.
          </p>
          <p className="text-xs text-blue-400 mt-3">
            © {new Date().getFullYear()} Hammer Financial. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
