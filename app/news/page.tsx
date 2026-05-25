import type { Metadata } from "next";

export const metadata: Metadata = { title: "Insights" };

export default function NewsPage() {
  return (
    <>
      <section className="bg-[#0A2279] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-3">Crypto Insights</h1>
          <p className="text-blue-200 text-lg">Analysis, strategy, and market perspectives from the Hammer Financial team.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 bg-[#0057AD]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#0057AD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Insights coming soon</h2>
          <p className="text-gray-500 leading-relaxed">
            We're preparing in-depth articles on crypto yield strategies, ETF analysis, and
            Bitcoin treasury frameworks. Follow{" "}
            <a href="https://x.com/DividendGrant" target="_blank" rel="noopener noreferrer"
              className="text-[#0057AD] font-medium hover:underline">
              @DividendGrant on X
            </a>{" "}
            for real-time updates in the meantime.
          </p>
        </div>
      </section>
    </>
  );
}
