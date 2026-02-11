"use client"
import React from 'react'

const SkeletonLoadCard = () => {
    return (
        <div className="animate-pulse flex flex-col gap-4 p-5 bg-white rounded-2xl shadow-md">
            {/* title */}
            <div className="h-6 bg-gray-300 rounded w-1/3"></div>

            {/* type + date */}
            <div className="flex justify-between">
                <div className="h-4 bg-gray-300 rounded w-20"></div>
                <div className="h-4 bg-gray-300 rounded w-24"></div>
            </div>

            {/* tags */}
            <div className="h-4 bg-gray-300 rounded w-28"></div>

            {/* content */}
            <div className="space-y-2">
                <div className="h-3 bg-gray-300 rounded"></div>
                <div className="h-3 bg-gray-300 rounded"></div>
                <div className="h-3 bg-gray-300 rounded w-5/6"></div>
            </div>

            {/* buttons */}
            <div className="flex flex-col md:flex-row gap-3">
                <div className="h-9 bg-gray-300 rounded w-full md:w-1/2"></div>
                <div className="h-9 bg-gray-300 rounded w-full md:w-1/2"></div>
            </div>

        </div>
    )
}

export default SkeletonLoadCard
