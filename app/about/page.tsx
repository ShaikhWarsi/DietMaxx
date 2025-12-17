"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Info, Menu } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header with Menu Button */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                {/* Sidebar content goes here */}
                <p>Sidebar Content</p>
              </SheetContent>
            </Sheet>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DietMaxxing
            </h1>
          </div>
          <p className="text-sm text-gray-600 hidden md:block">AI-Powered Dietary Analysis & Optimization</p>
        </div>
      </div>

      {/* Page Content */}
      <main className="container mx-auto px-4 py-12 flex flex-col items-center justify-center text-center">
        <Info className="h-24 w-24 text-blue-500 mb-6" />
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in-up">
          About DietMaxxing
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl animate-fade-in-up animation-delay-200">
          At DietMaxxing, we believe that personalized nutrition is the key to optimal health.
          We leverage cutting-edge AI to analyze your unique dietary needs, lifestyle, and health goals
          to create a customized diet plan that truly works for you.
        </p>
        <p className="text-lg text-gray-600 max-w-2xl animate-fade-in-up animation-delay-400">
          Our mission is to empower individuals to make informed food choices, understand their bodies better,
          and achieve sustainable health outcomes. We're passionate about transforming generic diet advice
          into actionable, science-backed insights tailored just for you.
        </p>
      </main>

      {/* Footer */}
      <div className="text-center mt-12 pt-8 border-t border-gray-200">
        <p className="text-gray-500 text-sm">Powered by Gemini 1.5 Flash AI | Built with ❤️ by shaikh warsi</p>
      </div>
    </div>
  )
}