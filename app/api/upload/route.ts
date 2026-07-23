import { NextResponse } from "next/server";

export const runtime = "nodejs";


export async function POST(req: Request) {

    try {

        const formData = await req.formData();


        const file =
            formData.get("file") as File | null;


        const type =
            formData.get("type") as string | null;



        if (!file) {

            return NextResponse.json(
                {
                    success: false,
                    message: "File tidak ditemukan"
                },
                {
                    status: 400
                }
            );

        }



        if (!type) {

            return NextResponse.json(
                {
                    success: false,
                    message: "Tipe file tidak ditemukan"
                },
                {
                    status: 400
                }
            );

        }



        const bytes =
            await file.arrayBuffer();



        const base64 =
            Buffer
                .from(bytes)
                .toString("base64");



        const response =
            await fetch(
                process.env.GOOGLE_SCRIPT_URL!,
                {

                    method: "POST",


                    headers: {
                        "Content-Type":
                            "application/x-www-form-urlencoded"
                    },


                    body:
                        new URLSearchParams({

                            file: base64,

                            fileName: file.name,

                            mimeType: file.type,

                            type: type

                        })

                }
            );


        const result = await response.json();

        if (!result.success) {

            throw new Error(
                result.message ||
                "Upload gagal"
            );

        }



        return NextResponse.json({

            success: true,

            url: result.url,

            fileName: file.name

        });



    } catch (error: any) {


        console.error(
            "UPLOAD ERROR:",
            error
        );


        return NextResponse.json(
            {

                success: false,

                message: error.message ||
                    "Upload gagal"

            },
            {
                status: 500
            }
        );

    }

}