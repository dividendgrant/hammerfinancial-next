export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  paragraphs: string[];
};

export const posts: Post[] = [
  {
    slug: "done-buying-bccc",
    title: "We're done buying BCCC",
    date: "2026-05-26",
    excerpt: "After watching the NAV erosion, we've stopped buying BCCC. Here's why — and what we're buying instead.",
    image: "/fund-income.jpg",
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
