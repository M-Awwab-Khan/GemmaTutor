import { NextResponse } from "next/server";

export async function POST(req) {
    const { query } = await req.json()

    const finalQuery = `What is ${query}`

    const response = await fetch("https://google.serper.dev/search", {
        method: "POST",
        headers: {
            "X-API-KEY": process.env.SERPER_API_KEY,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            q: finalQuery,
            num: 9,
        }),
    });

    const rawJSON = await response.json();

    // Validate and parse the JSON manually
    if (!Array.isArray(rawJSON.organic)) {
        throw new Error("Invalid response format");
    }

    const results = rawJSON.organic.map((result) => {
        if (typeof result.title !== "string" || typeof result.link !== "string") {
            throw new Error("Invalid response data format");
        }

        return {
            name: result.title,
            url: result.link,
        };
    });

    return NextResponse.json(results);

}
