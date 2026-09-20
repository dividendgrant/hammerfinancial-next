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
    slug: "is-crypto-heating-back-up",
    title: "Is crypto heating back up?",
    date: "2026-09-20",
    excerpt: "Last week turned on Tuesday. BTC and ETH clawed back a few percent, ETH finally cleared $2,600 \u2014 and Zcash ran 33.8%.",
    image: "/post-crypto-heating-up.jpg",
    paragraphs: [
      "Last week opened soft and looked like more of the same. By Friday it didn't. The turn came Tuesday, and from there every major we watch closed the week green.",
      "Tuesday, September 15 was the low across the board: BTC at $75,613, ETH at $2,399, ZEC at $1,111. Then it reversed. Thursday into Friday did most of the work \u2014 BTC added 5.9% to close at $80,901, and ETH jumped 6.7% to $2,611.",
      "That ETH close matters more than the size of the move. $2,600 had capped ETH for most of September. Clearing it on a 6.7% day, rather than grinding at it, is the kind of break that tends to hold. The next real test sits around $2,750\u2013$2,800, and above that the $3,000 level comes back into the conversation.",
      "ETH's flow picture turned late in the week too. Spot ETH ETFs still finished the week at roughly $140 million in net outflows, but Thursday's session broke a three-day run of outflows totaling about $405 million and brought in $143.8 million. Open interest reached about $31.5 billion, its highest in roughly four months \u2014 rising price on rising open interest means traders are adding, not covering.",
      "But the week belonged to Zcash. ZEC ran 33.8% Monday to Friday, and 40.2% measured off Tuesday's low, closing Friday at $1,558. Indexed to Monday's close, BTC and ETH finish the week around 103 \u2014 ZEC finishes near 134.",
      "The catalyst is precisely dated. The NU7 coinholder vote closed Monday, September 14, and the results landed that evening. Turnout was a record 66% of the eligible pool, with 2.4 million ZEC cast. Holders voted 98.9% to preserve the halving schedule and backed cutting block times to 25 seconds from 75. Developers are targeting November 5 for mainnet activation, after an October 6 testnet upgrade. ZEC was $1,111 on Tuesday and $1,335 by Wednesday.",
      "The institutional side is doing its part. Grayscale's spot Zcash ETF (ZCSH) listed on NYSE Arca on August 25 as the first regulated U.S. spot vehicle for ZEC, and it has pulled in roughly $233 million and is closing in on $1 billion in assets. Grayscale has filed a 3-for-1 forward share split effective after the close on September 28 \u2014 a move you make when the share price has gotten away from retail buyers.",
      "Two cautions. First, ZEC gave back 7.6% over the weekend, from $1,558 Friday to $1,439 Sunday. Moves this steep rarely go up in a straight line. Second, ZEC is up roughly 2,500% in 2026 and has climbed from the 82nd largest crypto by market cap to the 7th. Anything that has already repriced that far is not a value entry \u2014 it is a momentum trade, and it should be sized like one.",
      "So is crypto heating back up? One week is not a trend, and a 3-4% week in BTC and ETH is a bounce, not a regime change. What we'd want to see is ETH holding above $2,600 rather than retesting it from below, and ETF flows staying positive for more than a single session. Those are the two things we're watching into this week.",
      "Prices are Yahoo Finance daily closes, September 14\u201320, 2026. Nothing here is a recommendation to buy or sell any asset.",
    ],
  },
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
