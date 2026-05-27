export const runtime = "edge";

export async function POST(request: Request) {
  try {
    let body: { name?: string; email?: string; message?: string } = {};
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400, headers: { "Content-Type": "application/json" },
      });
    }

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400, headers: { "Content-Type": "application/json" },
      });
    }

    const apiKey = (process.env as Record<string, string | undefined>).RESEND_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "No API key" }), {
        status: 500, headers: { "Content-Type": "application/json" },
      });
    }

    let resendRes: Response;
    try {
      resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Hammer Financial <onboarding@resend.dev>",
          to: ["hammerfingroup@gmail.com"],
          reply_to: email,
          subject: `Website Contact from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        }),
      });
    } catch (fetchErr) {
      return new Response(JSON.stringify({ error: "Fetch failed", detail: String(fetchErr) }), {
        status: 500, headers: { "Content-Type": "application/json" },
      });
    }

    if (!resendRes.ok) {
      let detail = {};
      try { detail = await resendRes.json(); } catch { /* ignore */ }
      return new Response(JSON.stringify({ error: "Resend failed", status: resendRes.status, detail }), {
        status: 500, headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200, headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: "Unhandled", detail: String(err) }), {
      status: 500, headers: { "Content-Type": "application/json" },
    });
  }
}
