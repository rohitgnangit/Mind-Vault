"use client"

import Image from "next/image";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Upload, Brain, Search, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Features */}
      <div className="fetures mt-15">
        <motion.h2 className="text-lg font-semibold text-center text-gray-500 tracking-wider"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >Key Features</motion.h2>
        {/* Cards */}
        <motion.div className="cards flex flex-col md:flex-row justify-center items-center gap-10 w-full mt-15"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div className="w-[70%] md:w-[20%] flex flex-col justify-center items-center gap-5 py-10 px-13 shadow-lg text-sm text-gray-600 font-semibold rounded-lg border border-slate-200"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          >
            <Upload size={20} color="gray" />
            <p className="">Upload notes easily</p>
          </motion.div>
          <motion.div className="w-[70%] md:w-[20%] flex flex-col justify-center items-center gap-5 py-10 px-13 shadow-lg text-sm text-gray-600 font-semibold rounded-lg border border-slate-200"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          >
            <Brain size={20} color="gray" />
            <p className="">AI Summarization</p>
          </motion.div>
          <motion.div className="w-[70%] md:w-[20%] flex flex-col justify-center items-center gap-5 py-10 px-13 shadow-lg text-sm text-gray-600 font-semibold rounded-lg border border-slate-200"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          >
            <Search size={20} color="gray" />
            <p className="">Smart Search</p>
          </motion.div>
          <motion.div className="w-[70%] md:w-[20%] flex flex-col justify-center items-center gap-5 py-10 px-13 shadow-lg text-sm text-gray-600 font-semibold rounded-lg border border-slate-200"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          >
            <Shield size={20} color="gray" />
            <p className="">Organized Dashboard</p>
          </motion.div>
        </motion.div>
      </div>

      {/* What is Mind Vault */}
      <div className="whatIs w-full flex flex-col md:flex-row justify-center items-center gap-5 mt-25">
        <motion.div className="w-[90%] md:w-1/2 flex flex-col justify-center items-start gap-5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl text-slate-700 font-bold ">What is Mind vault ?</h2>
          <p className="text-slate-500">MindVault is an AI-powered note-taking platform that helps users store and organize their notes in one place. It automatically generates summaries for notes, making long content easy to understand quickly. Users can search and filter their notes to find important information instantly.</p>
          <span className="bg-slate-200 rounded-lg px-5 py-3 mt-5">
            <p className="italic text-sm text-slate-700">“Store your ideas💡 once, and let your mind stay free — MindVault remembers everything for you.”</p>
          </span>
        </motion.div>
        <motion.div className="mx-5 md:mx-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image className="rounded-lg" src="/book-in-hand.jpg" width={500} height={500} alt="Book in hand" />
        </motion.div>
      </div>

      {/* How it works */}
      <div className="working mt-15">
        <motion.h2 className="text-lg font-semibold text-center text-gray-500 tracking-wider"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >How it works ?</motion.h2>
        {/* Cards */}
        <motion.div className="cards flex flex-col md:flex-row justify-center items-center gap-30 w-full mt-15"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div className="w-[90%] md:w-[20%] flex flex-col justify-center gap-5 py-10 px-10 shadow-lg text-sm rounded-lg border border-slate-200 hover:border-[#C5A059]"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image src="/note-icon.png" width={30} height={30} alt="Notes" />
            <p className="text-xl text-slate-700 font-bold ">Save Your Notes</p>
            <p className="text-slate-500">Save your notes with types like note, link, insight, and it will store securely</p>
          </motion.div>
          <motion.div className="w-[90%] md:w-[20%] flex flex-col justify-center gap-5 py-10 px-10 shadow-lg text-sm rounded-lg border border-slate-200 hover:border-[#C5A059]"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image src="/AI-icon.png" width={30} height={30} alt="Notes" />
            <p className="text-xl text-slate-700 font-bold ">Summarize with AI</p>
            <p className="text-slate-500">Just click the Summarize with AI button and get a concise summary of your notes</p>
          </motion.div>
          <motion.div className="w-[90%] md:w-[20%] flex flex-col justify-center gap-5 py-10 px-10 shadow-lg text-sm rounded-lg border border-slate-200 hover:border-[#C5A059]"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image src="/search-icon.png" width={30} height={30} alt="Notes" />
            <p className="text-xl text-slate-700 font-bold ">Smart Search</p>
            <p className="text-slate-500">Search and filter your notes quickly and efficiently with our powerful search feature</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Why Mind vault */}
      <div className="whatIs w-full flex flex-col md:flex-row justify-center items-center gap-5 mt-25">
        <motion.div className="w-[90%] md:w-1/2 flex flex-col justify-center items-start gap-5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl text-slate-700 font-bold ">Why Mind vault ?</h2>
          <p className="text-slate-500">MindVault is designed to act as a personal second brain where users can securely store, organize, and retrieve their notes and ideas anytime. The platform uses AI to summarize information and make knowledge easier to access and understand in less time.</p>
        </motion.div>
        <motion.div className="mx-5 md:mx-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image className="rounded-lg" src="/reduce-time.jpg" width={500} height={500} alt="Book in hand" />
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
