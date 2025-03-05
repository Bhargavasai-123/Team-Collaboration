import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, mobile, request } = await req.json();

    if (
      process.env.RESEND_API_KEY === undefined ||
      process.env.RESEND_TO_EMAIL === undefined
    ) {
      return new Response(
        "Something went wrong, please try alternate method to contact",
        {
          status: 400,
        }
      );
    }
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "noreply@jetbro.in",
        to: process.env.RESEND_TO_EMAIL || "",
        subject: `Website Enquiry from ReCirqularity`,
        html: `Name: ${name}
          <br />Email: ${email}
          <br />Mobile: ${mobile}
          <br />Request:
          <br />${request.split("\n").join("<br />")}`,
      });
    } catch (error: any) {
      console.error("Error sending email:", error.message);
      return new Response(
        "Something went wrong, please try alternate method to contact",
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error.message);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
