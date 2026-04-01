import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // Pull fields out of the incoming FormData
    const payload: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (typeof value === "string") payload[key] = value;
    });

    // Send to FormSubmit as JSON — avoids all FormData / multipart issues
    const res = await fetch(
      "https://formsubmit.co/ajax/hamzatajibola401@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data, { status: res.ok ? 200 : 500 });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
