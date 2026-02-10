"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav className="bg-white fixed w-full h-15 shadow-md top-0 left-0 z-50 py-5 px-3 md:px-10 flex justify-between items-center">
            <Link href="/">
                <div className="logo font-bold px-3 text-2xl"><Image src="/logooo.png" alt="Logo" width={200} height={200}/></div>
            </Link>
            <Link href="/home">
            <button className={`border bg-slate-600 text-white py-2 px-4 rounded-lg hover:bg-slate-500 cursor-pointer ${pathname === '/home' ? 'bg-slate-500 text-white hover:bg-slate-400' : ''}`}>DashBoard</button>
            </Link>
        </nav>
    )
}

export default Navbar
