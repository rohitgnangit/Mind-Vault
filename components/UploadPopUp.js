"use client"

import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { saveNoteAction } from '@/actions/saveNoteAction'
import SubmitButton from './SubmitButton'
import { useActionState } from "react";


const UploadPopUp = ({ notesUploadPopup, setNotesUploadPopup, fetchNotes }) => {
    const [state, formAction] = useActionState(saveNoteAction, null);

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    const handleClose = () => {
        setShow(false);
        setTimeout(() => {
            setNotesUploadPopup(false);
        }, 300);
    };

    useEffect(() => {
        if (state?.success) {
            fetchNotes();
            handleClose();
        }
    }, [state, fetchNotes]);

    return (
        <div className={`h-screen w-screen fixed left-0 top-0 inset-0 z-50  flex justify-center items-center transition-opacity duration-600 ${show ? "opacity-100 backdrop-blur-sm" : "opacity-0 pointer-events-none"}`}>
            <div className={`Note flex flex-col md:flex-row w-[90%] md:w-3/4 bg-white shadow-xl rounded-lg p-6 transform transition-all duration-600 ${show ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}>
                <Image src="/Book.png" alt="Book" width={600} height={500} />
                <div className="form">
                    <div className="top flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold">Create New Note</h2>
                        <button onClick={() => handleClose()} className="w-10 h-10 hover:bg-red-600 hover:text-white font-bold  cursor-pointer">✕</button>

                    </div>
                    <form action={formAction}>

                        <input
                            type="text"
                            placeholder="Title"
                            name="title"
                            className="w-full border-b-2 border-gray-300 rounded-lg p-2 outline-gray-200"
                            required
                        />

                        <select
                            className="w-full border-b-2 border-gray-300 rounded-lg p-2 outline-gray-200"
                            name="type"
                        >
                            <option value="note">Note</option>
                            <option value="link">Link</option>
                            <option value="insight">Insight</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Tags (comma separated)"
                            name="tags"
                            className="w-full border-b-2 border-gray-300 rounded-lg p-2 outline-gray-200"
                        />

                        <textarea
                            placeholder="Write your content..."
                            name="content"
                            className="w-full border-b-2 border-gray-300 rounded-lg p-2 h-40 outline-gray-200"
                            required
                        />

                        <SubmitButton />

                    </form>
                </div>
            </div>
        </div >
    )
}

export default UploadPopUp
