import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#0A2279] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-blue-200 text-lg">We'd love to hear from you.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Send us a message</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Whether you have a question, want to learn more about our funds, or
              are ready to work together — drop us a message and we'll get back to
              you promptly.
            </p>
            <ContactForm />
          </div>
          <div className="space-y-6 lg:pt-14">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-1">Follow for live updates</h3>
              <p className="text-sm text-gray-500 mb-3">Get real-time portfolio moves and crypto insights on X.</p>
              <a href="https://x.com/DividendGrant" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0057AD] hover:underline">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                @DividendGrant on X
              </a>
            </div>
            <div className="bg-[#0057AD]/5 rounded-xl p-6 border border-[#0057AD]/10">
              <h3 className="font-semibold text-gray-900 mb-1">Join our community</h3>
              <p className="text-sm text-gray-500 mb-3">
                Get exclusive access to every portfolio move inside our private Telegram group.
              </p>
              <a href="/work-with-us/" className="text-sm font-semibold text-[#0057AD] hover:underline">
                Learn about membership →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
