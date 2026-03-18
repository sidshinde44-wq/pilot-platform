'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="font-semibold text-lg">
          ✈️ Pilot Platform
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm">

          <Link href="/pilot-career-roadmap" className="font-medium hover:text-blue-600">
            Start Here
          </Link>

          <Link href="/tools" className="hover:text-blue-600">
            Tools
          </Link>

          <Link href="/indigo-selection-process" className="hover:text-blue-600">
            Airlines
          </Link>

          <Link href="/recruitment-tracker" className="relative hover:text-blue-600">
            Recruitment Tracker
            <span className="ml-1 text-xs text-red-500 font-semibold">
              ●
            </span>
          </Link>

          <Link href="/community/interview-experiences" className="hover:text-blue-600">
            Community
          </Link>

        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/tools/airline-eligibility"
            className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
          >
            Check Eligibility
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t px-4 py-4 space-y-4 text-sm bg-white">

          <Link href="/pilot-career-roadmap" onClick={() => setOpen(false)}>
            Start Here
          </Link>

          <Link href="/tools" onClick={() => setOpen(false)}>
            Tools
          </Link>

          <Link href="/indigo-selection-process" onClick={() => setOpen(false)}>
            Airlines
          </Link>

          <Link href="/recruitment-tracker" onClick={() => setOpen(false)}>
            Recruitment Tracker 🔴
          </Link>

          <Link href="/community/interview-experiences" onClick={() => setOpen(false)}>
            Community
          </Link>

          <Link
            href="/tools/airline-eligibility"
            onClick={() => setOpen(false)}
            className="block bg-black text-white text-center py-2 rounded-lg"
          >
            Check Eligibility
          </Link>

        </div>
      )}
    </nav>
  )
}