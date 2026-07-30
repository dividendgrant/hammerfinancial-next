// One-time setup: creates the "Hammer Financial Membership" product and a
// $60/month recurring price in your Stripe account, then prints the price ID.
//
// Run with your Stripe TEST secret key first:
//   STRIPE_SECRET_KEY=sk_test_xxx node scripts/setup-stripe-product.mjs
//
// Copy the printed price ID (price_...) into your env as STRIPE_PRICE_ID.
// Re-run with your LIVE key later to create the live-mode product/price.

const key = process.env.STRIPE_SECRET_KEY;
if (!key) {
  console.error("Missing STRIPE_SECRET_KEY env var.");
  console.error("Usage: STRIPE_SECRET_KEY=sk_test_xxx node scripts/setup-stripe-product.mjs");
  process.exit(1);
}

const mode = key.startsWith("sk_live_") ? "LIVE" : "TEST";

async function stripe(path, params) {
  const res = await fetch(`https://api.stripe.com/v1/${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(params).toString(),
  });
  const json = await res.json();
  if (!res.ok) {
    console.error(`Stripe error (${path}):`, json.error?.message || json);
    process.exit(1);
  }
  return json;
}

console.log(`Creating product + price in ${mode} mode...`);

const product = await stripe("products", {
  name: "Hammer Financial Membership",
  description: "Private Telegram group access: real-time portfolio moves, holdings changes, and yield commentary.",
});

const price = await stripe("prices", {
  product: product.id,
  currency: "usd",
  unit_amount: "6000", // $60.00 in cents
  "recurring[interval]": "month",
  nickname: "Membership — $60/month",
});

console.log("\n✅ Done.");
console.log("Product ID:", product.id);
console.log("Price ID:  ", price.id);
console.log(`\nAdd this to your env (${mode} mode):`);
console.log(`STRIPE_PRICE_ID=${price.id}`);
