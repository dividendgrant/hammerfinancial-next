import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hammer Financial – Crypto Income & Investment Strategies",
};

const funds = [
  {
    name: "Hammer Income",
    description:
      "Generate consistent cash flow through crypto yield ETFs including BTCI, BCCC, BLOX, and more. Income is used for real-world utility or reinvested into the Treasury fund.",
  },
  {
    name: "Hammer Treasury",
    description:
      "Capture the momentum of the growing crypto treasury trend — 70% Bitcoin, 10% Ethereum, 10% Solana, 10% Sui. Built for personal or corporate treasury reserves.",
  },
  {
    name: "Hammer Long Term",
    description:
      "A simple set-it-and-forget-it mix of broad market ETFs (SCHB, SCHD, FTEC) with a 10% Bitcoin allocation for steady, minimal-management growth.",
  },
  {
    name: "Hammer Growth",
    description:
      "Aggressive capital appreciation — 85% Bitcoin, 15% Fidelity MSCI Information Technology (FTEC). Built for the sharpest possible upward trajectory.",
  },
];

const testimonials = [
  {
    quote: "Their focus on yield strategies helped me turn my crypto into a steady income stream I can actually track.",
    name: "Phyllis Lacker",
  },
  {
    quote: "I finally understand how to capture yield opportunities in crypto, thanks to their clear approach.",
    name: "Jeffrey Hudson",
  },
  {
    quote: "I never knew building a personal crypto treasury could be this straightforward — highly recommend.",
    name: "Maria Araya",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0A2279] overflow-hidden min-h-[520px] flex items-center">
        <div className="absolute inset-0">
          <Image src="/hero-bg.png" alt="" fill className="object-cover opacity-60" priority />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Your partner in creating long-term crypto income
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              We show you how we use crypto ETFs and yield funds to build income
              today, while laying the foundation for tomorrow's financial freedom.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/funds/" className="bg-white text-[#0057AD] font-semibold px-6 py-3 rounded-md hover:bg-blue-50 transition-colors">
                View Funds
              </Link>
              <Link href="/work-with-us/" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white/10 transition-colors">
                Work with Us
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex justify-end">
            <Image src="/hero-person.png" alt="" width={380} height={460} className="object-contain drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Funds */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Funds</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Simple strategies — steady ETF growth with Bitcoin and aggressive crypto yield opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {funds.map((fund) => (
              <div key={fund.name} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow flex flex-col">
                <div className="w-10 h-10 bg-[#0057AD]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#0057AD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{fund.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{fund.description}</p>
                <Link href="/funds/" className="mt-4 text-sm font-semibold text-[#0057AD] hover:underline">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What our community says</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <svg className="w-8 h-8 text-[#0057AD] mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 leading-relaxed mb-4 italic">"{t.quote}"</p>
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights + Live Updates */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0057AD] rounded-2xl p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-3">Crypto Insights</h2>
              <p className="text-blue-100 leading-relaxed">Stay up to date with our latest analysis, fund updates, and market perspectives.</p>
            </div>
            <Link href="/news/" className="mt-8 inline-block bg-white text-[#0057AD] font-semibold px-6 py-3 rounded-md hover:bg-blue-50 transition-colors text-center">
              Read Insights
            </Link>
          </div>
          <div className="bg-[#0A2279] rounded-2xl p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-3">Live Updates</h2>
              <p className="text-blue-100 leading-relaxed">Follow <strong>@DividendGrant</strong> on X for real-time portfolio moves, yield updates, and crypto market commentary.</p>
            </div>
            <a href="https://x.com/DividendGrant" target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-white text-[#0A2279] font-semibold px-6 py-3 rounded-md hover:bg-blue-50 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Follow on X
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
