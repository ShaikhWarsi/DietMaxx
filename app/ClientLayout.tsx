"use client"

import React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { AppNavBar } from "@/components/app-navbar"


import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
        <div className="flex flex-col min-h-screen">
          <AppNavBar />
          <div className="flex-1 flex justify-center">
            {/* Page Content */}
            <main className="w-full px-4 py-6">{children}</main>
          </div>
        </div>
  )
}
