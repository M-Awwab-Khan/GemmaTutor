import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.NVIDIA_API_KEY,
    baseURL: 'https://integrate.api.nvidia.com/v1'
});

export async function POST(req) {
    const messages = await req.json();

    // Create a ReadableStream to handle streaming
    const stream = new ReadableStream({
        start(controller) {
            // Make a request to OpenAI with streaming enabled
            openai.chat.completions.create({
                model: "google/gemma-2-27b-it",
                messages: messages,
                stream: true
            }).then(async (response) => {
                for await (const chunk of response) {
                    // Send each chunk to the client
                    const content = chunk.choices[0]?.delta?.content || '';
                    controller.enqueue(new TextEncoder().encode(content));
                }
                controller.close();
            }).catch((error) => {
                console.error('Streaming error:', error);
                controller.error(error);
            });
        }
    });

    // Return the stream as a Response with appropriate headers
    return new Response(stream, {
        headers: {
            'Content-Type': 'text/plain;charset=UTF-8',
            'Cache-Control': 'no-cache',
            'Transfer-Encoding': 'chunked',
        }
    });
}
