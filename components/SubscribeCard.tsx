"use client";

import { useEffect, useState } from "react";

export default function SubscribeCard() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"success" | "cancelled" | null>(null);

  // Read the ?status= param Stripe redirects back with (client-side, keeps the
  // page static for Cloudflare/OpenNext).
  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get("status");
    if (s === "success" || s === "cancelled") setStatus(s);
  }, []);

  async function handleJoin() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !data.url) throw new Error(data.error || "Something went wrong");
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
      setLoading(false);
    }
  }

  if (status === "success") {
    return (
      <div className="border-2 border-green-500 rounded-2xl p-10 bg-green-50">
        <h2 className="text-2xl font-bold text-green-800 mb-2">You&apos;re in! 🎉</h2>
        <p className="text-green-700 leading-relaxed">
          Payment received — thank you for joining. We&apos;ll add you to the private
          Telegram group using the username you provided, usually within a few hours.
          Keep an eye out for the invite.
        </p>
      </div>
    );
  }

  return (
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

      {status === "cancelled" && (
        <p className="text-sm text-amber-600 mb-4">
          Checkout cancelled — no charge was made. You can join whenever you&apos;re ready.
        </p>
      )}

      <button
        onClick={handleJoin}
        disabled={loading}
        className="w-full bg-[#0057AD] hover:bg-[#0A2279] text-white font-semibold py-3.5 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Redirecting to checkout…" : "Join Now"}
      </button>

      {error && <p className="text-sm text-red-600 text-center mt-3">{error}</p>}

      <p className="text-xs text-gray-400 text-center mt-3">Secure payment by Stripe. Cancel any time.</p>
    </div>
  );
}
