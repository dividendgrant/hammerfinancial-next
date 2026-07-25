export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  paragraphs: string[];
};

// Convention: every post gets its OWN unique cover image. Do not reuse a
// shared "/post-default.jpg" for new posts — generate/supply a distinct image.
export const posts: Post[] = [
  {
    slug: "bitcoin-yield-aum-update",
    title: "Bitcoin Yield AUM Update",
    date: "2026-07-24",
    excerpt: "Crypto income ETFs by assets under management — BTCI dwarfs BLOX and CEPI.",
    image: "/post-aum-update.jpg",
    paragraphs: [
      "Crypto Income ETFs: AUM Comparison",
      "BTCI (NEOS Bitcoin High Income ETF) — ~$1.15B",
      "BLOX (Nicholas Crypto Income ETF) — ~$305M",
      "CEPI (REX Crypto Equity Premium Income ETF) — ~$112M",
      "BTCI is the largest by far, roughly 3.8x bigger than BLOX and 10x bigger than CEPI.",
      "Data: BTCI as of July 21, 2026; BLOX as of July 3, 2026; CEPI as of June 30, 2026.",
    ],
  },
  {
    slug: "dripping-blox-redirecting-btci",
    title: "DRIPing BLOX for now",
    date: "2026-06-25",
    excerpt: "BTC's on a rough run. Here's how we're handling our income positions — dripping BLOX, but redirecting BTCI's yield into spot.",
    image: "/post-blox-drip.jpg",
    paragraphs: [
      "BTC is on a rough run, so we're adjusting how we handle our income positions.",
      "We're dripping BLOX right now. Reinvesting the distributions while prices are down makes sense to us — we're buying more shares cheap.",
      "We're not dripping BTCI. The NAV erosion there is too steep, and reinvesting into a declining NAV just compounds the problem.",
      "Instead, we're taking the yield from BTCI and putting it to work elsewhere. On red days, we use that income to buy spot BTC or BTC spot ETFs.",
      "The logic is simple: keep the income flowing, but redirect it out of a position that's bleeding NAV and into Bitcoin exposure we actually want to hold.",
    ],
  },
  {
    slug: "done-buying-bccc",
    title: "We're done buying BCCC",
    date: "2026-05-26",
    excerpt: "After watching the NAV erosion, we've stopped buying BCCC. Here's why — and what we're buying instead.",
    image: "/post-default.jpg",
    paragraphs: [
      "After watching the NAV erosion, we've stopped buying BCCC. It's been rough.",
      "In February alone, the fund returned -16.8% while its category averaged +5.7%. Maximum drawdown hit -41% and it's still down over 25%. Total assets are just $9 million. That's too small and too volatile.",
      "Meanwhile, BTCI and BLOX are simply better options.",
      "BTCI offers a ~27% distribution rate, $1.2B in assets, and uses Bitcoin index options to generate income while keeping some upside. BLOX is up nearly 18% year-to-date with a 33% dividend yield.",
      "We're still holding our existing BCCC because a Bitcoin run (currently ~$77k) could limit further losses. But we're not buying any more.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
