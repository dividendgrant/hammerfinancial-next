// Creates a Stripe Checkout Session in subscription mode and returns its URL.
// Uses the Stripe REST API via fetch (no SDK) to stay lean on Cloudflare Workers,
// mirroring the pattern in app/api/contact/route.ts.

export async function POST(request: Request) {
  try {
    const env = process.env as Record<string, string | undefined>;
    const secretKey = env.STRIPE_SECRET_KEY;
    const priceId = env.STRIPE_PRICE_ID;

    if (!secretKey || !priceId) {
      return Response.json({ error: "Payments not configured" }, { status: 500 });
    }

    // Base URL for success/cancel redirects.
    const origin =
      request.headers.get("origin") ||
      env.SITE_URL ||
      "https://hammerfinancial.com";

    // Stripe expects application/x-www-form-urlencoded with bracketed nested keys.
    const params = new URLSearchParams({
      mode: "subscription",
      "line_items[0][price]": priceId,
      "line_items[0][quantity]": "1",
      success_url: `${origin}/work-with-us/?status=success`,
      cancel_url: `${origin}/work-with-us/?status=cancelled`,
      billing_address_collection: "auto",
      allow_promotion_codes: "true",
      // Capture the buyer's Telegram handle so we can add them to the group.
      "custom_fields[0][key]": "telegram",
      "custom_fields[0][label][type]": "custom",
      "custom_fields[0][label][custom]": "Telegram username (so we can add you)",
      "custom_fields[0][type]": "text",
      "custom_fields[0][optional]": "false",
    });

    const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const session = (await res.json()) as { url?: string; error?: { message?: string } };

    if (!res.ok || !session.url) {
      return Response.json(
        { error: session.error?.message || "Could not start checkout" },
        { status: 502 },
      );
    }

    return Response.json({ url: session.url });
  } catch {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
