import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

        if (!scriptUrl) {
            return NextResponse.json(
                {
                    success: false,
                    message: "GOOGLE_SCRIPT_URL belum diatur",
                },
                {
                    status: 500,
                }
            );
        }

        const response = await fetch(scriptUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();

        return NextResponse.json(data);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: "Gagal mengirim data",
            },
            {
                status: 500,
            }
        );
    }
}