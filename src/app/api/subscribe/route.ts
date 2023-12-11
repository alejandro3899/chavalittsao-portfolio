import Axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const request = await req.json();

    const data = {
        token: process.env.KLAVIYO_PUBLIC_API_KEY,
        event: "Subscription",
        customer_properties: {
            $email: process.env.KLAVIYO_EMAIL_ADDRESS,
        },
        properties: {
            Email: request.email,
        },
    };

    try {
       await Axios({
            method: "GET",
            url: `https://a.klaviyo.com/api/track?data=${Buffer.from(
                JSON.stringify(data)
            ).toString("base64")}`,
        });

        return new NextResponse(
            JSON.stringify({ msg: "subscribed successfully" }),
            { status: 200 }
        );
    } catch (error:any) {

        return new NextResponse(
            JSON.stringify({"Klaviyo Request Error": error.message}),
            { status: 400 }
        );
    }
}
