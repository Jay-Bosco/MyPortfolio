import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const fname    = formData.get("fname")    as string;
    const lname    = formData.get("lname")    as string;
    const email    = formData.get("email")    as string;
    const phone    = formData.get("phone")    as string;
    const subject  = formData.get("subject")  as string;
    const message  = formData.get("message")  as string;

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,   // set in .env.local
        name: `${fname} ${lname}`.trim(),
        email,
        phone,
        subject: subject || "New contact from portfolio",
        message,
        from_name: "Hamzat Portfolio",
      }),
    });

    const data = await res.json();
    console.log("[contact] Web3Forms response:", data);

    if (!data.success) {
      return NextResponse.json({ error: data.message || "Failed to send." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
