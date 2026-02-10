"use server"

import connectDB from "@/db/connectDB";
import Note from "@/models/Note";

export async function saveNoteAction(prevState, formData) {
    await connectDB()

    const newNote = new Note({
        title: formData.get("title"),
        type: formData.get("type"), 
        tags: formData.get("tags").split(",").map(tag => tag.trim()),
        content: formData.get("content"),
    })
    await newNote.save()
    return { success:true }
}