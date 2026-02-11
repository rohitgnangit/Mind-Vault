"use client"

import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { summarizeAction } from '@/actions/summarizeAction'
import DetailsPopUp from './DetailsPopUp'
import { Tag } from "lucide-react"

const NoteCard = ({ note, fetchNotes }) => {
    const [summary, setSummary] = useState("")
    const [isSummarizing, setIsSummarizing] = useState(false)
    const [showDetails, setShowDetails] = useState(false);


    const handleSummarize = async () => {
        setIsSummarizing(true);
        const summary = await summarizeAction(note._id, note.content);
        setSummary(summary);
        fetchNotes();
        setIsSummarizing(false);
    }
    
    return (
        <>
        <div className="Note bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-2">
                {note.title}
            </h3>
            <div className="flex justify-between items-center gap-2 text-sm text-gray-500 mb-2">
                <span className="px-2 py-1 bg-indigo-100 text-indigo-600 rounded-md text-xs">
                    {note.type}
                </span>
                <span className="text-xs">{new Date(note.createdAt).toLocaleString()}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs flex items-center gap-2 bg-gray-200 px-2 py-1 rounded-md">
                    <Tag size={13}/>
                    {note.tags}
                </span>
            </div>
            <p className="text-gray-700 text-sm mb-4">
                {note.content.length > 100 ? note.content.substring(0, 100) + "..." : note.content}
            </p>
            {/* Buttons */}
            <div className="flex flex-col md:flex-row justify-center gap-2">
                <button onClick={() => handleSummarize()} className="flex items-center justify-center gap-3 w-full md:w-[50%] group relative cursor-pointer overflow-hidden px-6 py-3 rounded-lg bg-white text-black font-semibold transition hover:shadow-[0_0_15px_2px_rgba(147,51,234,0.5)]"
                    style={{
                        "--spread": "80deg",
                        "--speed": "3s",
                    }}>
                    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg">
                        <div className="absolute inset-[-100%] rotate-gradient">
                            <div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,#9333ea_var(--spread),transparent_var(--spread))]"></div>
                        </div>
                    </div>
                    <div className="absolute inset-[2px] rounded-lg bg-violet-100"></div>

                    {isSummarizing ? <div className="relative z-10 w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                     : <Image src="/sparkle.png" alt="Sparkle Icon" width={20} height={20} className="relative z-10" />
                    }
                    <span className="relative z-10">{isSummarizing ? "Summarizing..." : "Summarize with AI"}</span>
                </button>

                <button onClick={() => setShowDetails(true)} className="w-full md:w-[50%] text-gray-800 text-sm font-semibold border border-gray-300 py-2 rounded-lg cursor-pointer hover:bg-slate-200">
                    View Details
                </button>
            </div>
            {/* Details popup when user clicks button */}
            {showDetails && <DetailsPopUp note={note} setSummary={setSummary} setShowDetails={setShowDetails} />}
            {/* Details popop when summary is available */}
            {summary.length > 0 && <DetailsPopUp note={note} setSummary={setSummary} setShowDetails={setShowDetails} isSummarizing={false} />}
        </div>
        </>
    )
}

export default NoteCard
