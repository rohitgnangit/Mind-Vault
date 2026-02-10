"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import UploadPopUp from '@/components/UploadPopUp'
import NoteCard from '@/components/NoteCard'

const home = () => {
  const [notesUploadPopup, setNotesUploadPopup] = useState(false)
  const [notes, setNotes] = useState([])
  // for serachbar to search notes by title
  const [search, setSearch] = useState("")
  // For toggle
  const [type, setType] = useState("all")

  const fetchNotes = async () => {
    const res = await fetch("/api/get-notes");
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);


  // Serach
  const searchItem = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  return (
    <div className="h-screen mt-15 pt-10 bg-gray-100 px-5 md:px-20">
      {/* Top */}
      <div className="sticky top-20 z-30 bg-gray-100 pb-4">
        <div className="top flex flex-col gap-5">
          <button onClick={() => setNotesUploadPopup(true)} type="button" className="w-full md:w-[50%] text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 cursor-pointer rounded-full">✏️ Create Note</button>
          <div className="search bg-gray-200 flex w-full md:w-[50%] rounded-full">
            <input className='Search w-full py-2 px-5 rounded-xl text-sm outline-none' name="search" value={search} onChange={searchItem} type="text" placeholder='search for note' />
            <span className="w-10 h-10 mx-2 my-1 flex justify-center items-center rounded-full">
              <Image src="/search.png" alt="Search Bar" width={25} height={25} />
            </span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bottom mt-10">
        <div className="sticky top-50 z-30 bg-gray-100 pb-4">
          <div className="buttons flex gap-2">
            <button onClick={() => setType("all")} className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl cursor-pointer ${type === "all" ? "bg-purple-500 text-white" : "bg-slate-200 text-gray-800"}`}>All</button>
            <button onClick={() => setType("note")} className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl cursor-pointer ${type === "note" ? "bg-purple-500 text-white" : "bg-slate-200 text-gray-800"}`}>Note</button>
            <button onClick={() => setType("link")} className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl cursor-pointer ${type === "link" ? "bg-purple-500 text-white" : "bg-slate-200 text-gray-800"}`}>Link</button>
            <button onClick={() => setType("insight")} className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl cursor-pointer ${type === "insight" ? "bg-purple-500 text-white" : "bg-slate-200 text-gray-800"}`}>Insight</button>

          </div>
        </div>
        {/* Display Notes in grid */}
        <div className="NotesContainer grid md:grid-cols-2 gap-5 mt-3">
          {notes.filter(note => note.title.toLowerCase().includes(search.toLowerCase()) && (type === "all" || note.type === type)).map(note => (
            <NoteCard key={note._id} note={note} type={type} />
          ))}
        </div>
      </div>

      {/* Popup the Save Notes when button click */}
      {notesUploadPopup && <UploadPopUp notesUploadPopup={notesUploadPopup} setNotesUploadPopup={setNotesUploadPopup} fetchNotes={fetchNotes} />}
    </div>
  )
}

export default home
