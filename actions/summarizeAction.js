"use server"

import Note from "@/models/Note";
import OpenAI from "openai"

export async function summarizeAction(noteId, content) {

   const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
   });

   const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
         { role: "system", content: "Summarize the following text briefly." },
         { role: "user", content }
      ]
   });

   const summary = response.choices[0].message.content;

   await Note.findByIdAndUpdate(noteId, {
        summaryWithAI: summary
   })

   return summary;
}
