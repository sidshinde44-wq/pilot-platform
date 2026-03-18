import "./globals.css"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: {
    default: "Pilot Platform India",
    template: "%s | Pilot Platform India"
  },
  description:
    "India’s pilot career guide. Learn how to become a pilot, explore airline recruitment, and use tools for CPL cost, eligibility, and ADAPT preparation.",
  keywords: [
    "pilot career India",
    "how to become pilot India",
    "CPL training India",
    "DGCA license",
    "pilot salary India",
    "ADAPT test preparation",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-4 py-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t mt-10 py-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Pilot Platform India</p>
          <p className="mt-2">
            This platform provides informational guidance. Always verify details
            with official aviation authorities and airlines.
          </p>
        </footer>

      </body>
    </html>
  )
}