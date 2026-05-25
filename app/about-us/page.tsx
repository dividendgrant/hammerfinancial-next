import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About Us" };

const team = [
  {
    name: "Grant Shellhammer",
    role: "Strategy",
    bio: "Grant leads Hammer Financial's investment strategy, identifying yield opportunities and building portfolio frameworks grounded in Bitcoin conviction and disciplined risk management.",
    social: { x: "https://x.com/DividendGrant" },
  },
  {
    name: "Taylor Shellhammer",
    role: "Operations",
    bio: "Taylor oversees day-to-day operations, ensuring subscribers receive timely updates and that all internal processes run smoothly.",
    social: {},
  },
  {
    name: "Rajiv Sinha",
    role: "Advisor",
    bio: "Rajiv brings deep expertise in financial markets and digital assets, providing strategic guidance to help shape Hammer Financial's long-term direction.",
    social: {},
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#0A2279] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-3">About Us</h1>
          <p className="text-blue-200 text-lg">Built on Bitcoin conviction. Driven by yield.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-gray max-w-none space-y-5 text-gray-600 leading-relaxed">
            <p>
              At Hammer Financial, we are all-in on Bitcoin. We believe Bitcoin
              is foundational to the future of finance — permanent, scarce, and a
              necessary part of any smart, long-term strategy.
            </p>
            <p>
              Our approach combines long-term Bitcoin conviction with active yield
              generation, positioning digital assets as both stable foundations and
              productive investment tools. We don't just hold — we put capital to
              work every day.
            </p>
            <p>
              We built Hammer Financial to cut through the noise. Crypto can be
              overwhelming. Our job is to make it simple: identify the best yield
              opportunities, monitor markets closely, and deliver clear, actionable
              insights to our community.
            </p>
          </div>
        </div>
      </section>

      {/* Relentless Dedication */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Relentless Dedication", body: "We identify yield opportunities, monitor crypto markets closely, and deliver actionable insights — so your capital is always working." },
            { title: "Transparent Strategy", body: "Full transparency is core to what we do. Paid members gain exclusive access to a complete record of every portfolio move we make." },
            { title: "Long-Term Thinking", body: "Bitcoin is permanent. We combine short-term yield with long-term conviction to build portfolios designed for the decade ahead." },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="w-10 h-10 bg-[#0057AD]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#0057AD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#0057AD]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0057AD]">{member.name[0]}</span>
                </div>
                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-[#0057AD] font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                {member.social.x && (
                  <a href={member.social.x} target="_blank" rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs text-gray-400 hover:text-[#0057AD] transition-colors">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    @DividendGrant
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0057AD] text-white text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-3">Ready to build your crypto strategy?</h2>
          <p className="text-blue-100 mb-6">Get in touch and we'll walk you through the options.</p>
          <Link href="/contact-us/" className="bg-white text-[#0057AD] font-semibold px-8 py-3 rounded-md hover:bg-blue-50 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
