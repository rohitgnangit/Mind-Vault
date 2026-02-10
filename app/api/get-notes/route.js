import connectDB from "@/db/connectDB";
import Note from "@/models/Note";
import { NextResponse } from "next/server";

export async function GET() {
    await connectDB();
    const notes = await Note.find().sort({ createdAt: -1 });
    return NextResponse.json(notes);
}