import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Funds" };

const funds = [
  {
    name: "Hammer Income",
    tag: "Yield Generation",
    tagColor: "bg-green-100 text-green-700",
    image: "/fund-income.jpg",
    description:
      "This fund focuses on generating consistent cash flow through crypto-related yield ETFs, including NEOS Bitcoin High Income (BTCI), Global X Bitcoin Covered Call (BCCC), Nicholas Crypto Income (BLOX), and others.",
    detail:
      "Income is prioritised for real-world utility or reinvested into the Treasury fund. Full transparency: paid members gain exclusive access to a complete record of all activity.",
    cta: { label: "Join for $60/month", href: "/work-with-us/" },
    allocation: [
      { asset: "Bitcoin (BTC)", pct: 70, color: "bg-orange-400" },
      { asset: "Ethereum (ETH)", pct: 10, color: "bg-blue-400" },
      { asset: "Solana (SOL)", pct: 10, color: "bg-purple-400" },
      { asset: "Sui (SUI)", pct: 10, color: "bg-cyan-400" },
    ],
  },
  {
    name: "Hammer Treasury",
    tag: "Treasury Reserve",
    tagColor: "bg-orange-100 text-orange-700",
    image: "/fund-treasury.jpg",
    description:
      "Position yourself at the forefront of the growing crypto treasury trend. Built for personal or corporate treasury reserves with opportunistic buying for increased growth.",
    detail: null,
    cta: null,
    allocation: [
      { asset: "Bitcoin (BTC)", pct: 70, color: "bg-orange-400" },
      { asset: "Ethereum (ETH)", pct: 10, color: "bg-blue-400" },
      { asset: "Solana (SOL)", pct: 10, color: "bg-purple-400" },
      { asset: "Sui (SUI)", pct: 10, color: "bg-cyan-400" },
    ],
  },
  {
    name: "Hammer Long Term",
    tag: "Set & Forget",
    tagColor: "bg-blue-100 text-blue-700",
    image: "/fund-longterm.jpg",
    description:
      "A simple investment mix of safe ETFs and a dash of Bitcoin, built for steady growth and minimal management. Dollar-cost averaging is central to this strategy.",
    detail: null,
    cta: null,
    allocation: [
      { asset: "Bitcoin (BTC)", pct: 10, color: "bg-orange-400" },
      { asset: "Schwab US Broad Market (SCHB)", pct: 30, color: "bg-blue-400" },
      { asset: "Schwab US Dividend Equity (SCHD)", pct: 30, color: "bg-green-400" },
      { asset: "Fidelity MSCI Info Tech (FTEC)", pct: 30, color: "bg-indigo-400" },
    ],
  },
  {
    name: "Hammer Growth",
    tag: "Aggressive Growth",
    tagColor: "bg-red-100 text-red-700",
    image: "/fund-growth.jpg",
    description:
      "Maximum Bitcoin exposure paired with technology sector equity for investors targeting the sharpest possible upward trajectory and comfortable with higher volatility.",
    detail: null,
    cta: null,
    allocation: [
      { asset: "Bitcoin (BTC)", pct: 85, color: "bg-orange-400" },
      { asset: "Fidelity MSCI Info Tech (FTEC)", pct: 15, color: "bg-indigo-400" },
    ],
  },
];

export default function FundsPage() {
  return (
    <>
      <section className="bg-[#0A2279] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-3">Our Funds</h1>
          <p className="text-blue-200 text-lg">Four strategies. One mission — put your capital to work.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          {funds.map((fund) => (
            <div key={fund.name} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative w-full h-56 sm:h-64">
                <Image src={fund.image} alt={fund.name} fill className="object-cover" />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2 ${fund.tagColor}`}>
                      {fund.tag}
                    </span>
                    <h2 className="text-xl font-bold text-gray-900">{fund.name}</h2>
                  </div>
                  {fund.cta && (
                    <Link href={fund.cta.href}
                      className="bg-[#0057AD] text-white font-semibold px-6 py-2.5 rounded-md hover:bg-[#0A2279] transition-colors text-sm">
                      {fund.cta.label}
                    </Link>
                  )}
                </div>
                <p className="text-gray-600 leading-relaxed mb-3">{fund.description}</p>
                {fund.detail && <p className="text-gray-500 text-sm leading-relaxed mb-4">{fund.detail}</p>}
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Allocation</p>
                  <div className="flex rounded-full overflow-hidden h-3 mb-3">
                    {fund.allocation.map((a) => (
                      <div key={a.asset} style={{ width: `${a.pct}%` }} className={`${a.color}`} title={`${a.asset} ${a.pct}%`} />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {fund.allocation.map((a) => (
                      <div key={a.asset} className="flex items-center gap-1.5 text-xs text-gray-600">
                        <span className={`w-2.5 h-2.5 rounded-full ${a.color}`} />
                        {a.asset} — {a.pct}%
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 bg-gray-50 text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <p className="text-xs text-gray-400 leading-relaxed">
            All fund information is provided for educational purposes only. Nothing here constitutes
            financial advice. Consult a qualified professional before making investment decisions.
          </p>
        </div>
      </section>
    </>
  );
}
