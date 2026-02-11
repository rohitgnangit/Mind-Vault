import connectDB from "@/db/connectDB";
import Note from "@/models/Note";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.loadEnvFile.OPENAI_API_KEY });

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    // Getting question from the URL
    const question = searchParams.get("q");

    await connectDB();

    // Searching notes related to question
    const notes = await Note.find({
        $or: [
            { title: { $regex: question, $options: "i" } },
            { content: { $regex: question, $options: "i" } }
        ]
    }).limit(5);

    // If there are no notes in DB then answer is this
    if (notes.length === 0) {
        return Response.json({
            answer: "I don't see this information in your saved notes."
        });
    }

    const context = notes.map(n => n.content).join("\n\n")

    // Generating answer using openai
    const completion = await openai.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [
            {
                role: "system",
                content: "Answer using only the provided notes."
            },
            {
                role: "user",
                content: `Context:\n${context}\n\nQuestion:\n${question}`
            }
        ]
    });
    const answer = completion.choices[0].message.content

    return Response.json({ answer, sources: notes.map(n => n.title) })
}