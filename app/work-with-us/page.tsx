import type { Metadata } from "next";

export const metadata: Metadata = { title: "Work with Us" };

const features = [
  {
    title: "Real-Time Portfolio Moves",
    body: "Buys, sells, portfolio tweaks, performance updates, and smart buying spots — delivered the moment we act.",
  },
  {
    title: "Security & Privacy",
    body: "All updates are shared inside a private Telegram group with end-to-end encryption and zero public exposure.",
  },
  {
    title: "Community Interaction",
    body: "Connect with peers to discover cutting-edge strategies, spot emerging funds faster, and exchange timely news and tips.",
  },
  {
    title: "Yield Updates",
    body: "Know exactly when yield rates change, when we rotate positions, and why — with full commentary.",
  },
];

export default function WorkWithUsPage() {
  return (
    <>
      <section className="bg-[#0A2279] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-3">Work with Us</h1>
          <p className="text-blue-200 text-lg">Get exclusive access to every Hammer Income portfolio move.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Pricing card */}
          <div className="border-2 border-[#0057AD] rounded-2xl p-10">
            <div className="inline-block bg-[#0057AD]/10 text-[#0057AD] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Subscribers
            </div>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-5xl font-bold text-gray-900">$60</span>
              <span className="text-gray-500 mb-1">/month</span>
            </div>
            <p className="text-gray-500 mb-8">
              Join our exclusive Telegram group for real-time portfolio updates, holding changes,
              and yield commentary — direct from our team.
            </p>
            <button
              disabled
              className="w-full bg-[#0057AD] text-white font-semibold py-3.5 rounded-md opacity-50 cursor-not-allowed"
            >
              Join Now — Coming Soon
            </button>
            <p className="text-xs text-gray-400 text-center mt-3">Secure payment. Cancel any time.</p>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#0057AD]/10 rounded-lg flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-[#0057AD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <p className="text-xs text-gray-400 leading-relaxed">
            Hammer Financial provides educational content only. Membership grants access to our
            personal portfolio activity for educational observation — not financial advice.
          </p>
        </div>
      </section>
    </>
  );
}
