import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mason - Blockchain Ecosystem & Security Architect",
  description:
    "Forging secure, transparent pathways to decentralized financial freedom. Building the future of digital assets.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        {children}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 Mason. All rights reserved.</p>
            <p className="text-sm mt-2 text-gray-400">Built with ❤️ and a focus on crypto adoption.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
