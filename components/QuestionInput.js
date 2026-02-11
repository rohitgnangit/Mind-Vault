"use client"

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const QuestionInput = () => {
    const [input, setInput] = useState("")
    const [answer, setAnswer] = useState("")

    const handleQuestion = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = async (e) => {

        const questionText = input;

        const res = await fetch("/api/query", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question: questionText })
        });

        const data = await res.json();
        setAnswer(data.answer)

        console.log("answer", data.answer)

        setInput("")
    }

    return (
        <>
            <div className="inputField flex justify-between items-center h-12 md:w-1/2 rounded-2xl border-2 border-purple-300 focus-within:ring-2 focus-within:ring-indigo-400 focus-within:shadow-[0_0_20px_rgba(99,102,241,0.45)]">
                <Image className='ml-3' src="/AI-chat.png" alt="AI icon" height={28} width={28} />
                {/* Chat Input */}
                <input onChange={handleQuestion} onKeyDown={(e) => { e.key === "Enter" && handleSubmit() }} value={input} type="text" className="outline-none h-full w-[95%] rounded-2xl px-4" placeholder=" Ask something to AI about your notes " />
                {/* Send Button */}
                <div className="send h-10 w-10 flex justify-center items-center rounded-full mr-3">
                    <button onClick={handleSubmit} className="w-full h-full flex justify-center items-center rounded-full cursor-pointer bg-purple-200 hover:bg-purple-400"><Image src="/send.png" alt="send icon" height={19} width={19}></Image></button>
                </div>
            </div>
            {answer &&
                <div className="answer mt-5 px-4 py-2 bg-cyan-50 text-cyan-800 rounded-lg border border-cyan-300">
                    <div className="flex justify-between">
                        <p className="font-semibold">Answer :</p>
                        <button onClick={() => setAnswer("")} className="cursor-pointer">✕</button>
                    </div>
                    {answer}
                </div>}
        </>
    )
}

export default QuestionInput
