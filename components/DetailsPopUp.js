import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const DetailsPopUp = ({ note, summary, setShowDetails }) => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    const handleClose = () => {
        setShow(false);
        setTimeout(() => {
            setShowDetails(false);
        }, 300);
    };

    return (
        <div className={`h-screen w-screen fixed left-0 top-0 inset-0 z-50  flex justify-center items-center transition-opacity duration-600 ${show ? "opacity-100 backdrop-blur-sm" : "opacity-0 pointer-events-none"}`}>
            <div className={`Note flex flex-col w-[90%] md:w-3/4 bg-white shadow-xl rounded-lg p-6 transform transition-all duration-600 ${show ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}>

                <h2 className="text-lg font-semibold mb-2">
                    {note.title}
                </h2>
                <div className="flex justify-between items-center gap-2 text-sm text-gray-500 mb-2">
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-600 rounded-md text-xs">
                        {note.type}
                    </span>
                    <span className="text-xs">{new Date(note.createdAt).toLocaleString()}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs flex gap-2 bg-gray-200 px-2 py-1 rounded-md">
                        <Image src="/tag.png" alt="Tag Icon" width={15} height={15} />
                        {note.tags}
                    </span>
                </div>
                <p className="text-gray-700 text-sm mb-4">{note.content}</p>

                {summary && (
                    <div className="bg-purple-50 text-purple-700 p-3 rounded-lg text-sm mb-4">
                        <strong>AI Summary:</strong> {summary}
                    </div>
                )}

                <button onClick={handleClose} className="absolute top-3 right-3 text-gray-500 w-10 h-10 hover:bg-red-600 hover:text-white cursor-pointer">✕</button>
            </div>
        </div >
    )
}

export default DetailsPopUp
