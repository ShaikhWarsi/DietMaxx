"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Sparkles, Menu, ListChecks, Brain, Scale, HeartPulse, FlaskConical, MoonStar } from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50">
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
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Key Features
            </h1>
          </div>
          <p className="text-sm text-gray-600 hidden md:block">AI-Powered Dietary Analysis & Optimization</p>
        </div>
      </div>

      {/* Page Content */}
      <main className="container mx-auto px-4 py-12 flex flex-col items-center justify-center text-center">
        <ListChecks className="h-24 w-24 text-blue-500 mb-6" />
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in-up">
          Key Features of DietMaxxing
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl animate-fade-in-up animation-delay-200">
          Discover how DietMaxxing empowers you to achieve your health and wellness goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mt-8">
          <div className="p-6 rounded-lg shadow-lg bg-white/80 backdrop-blur-sm text-left">
            <Brain className="h-10 w-10 text-blue-500 mb-3" />
            <h3 className="text-xl font-semibold text-blue-600 mb-2">AI-Powered Personalization</h3>
            <p className="text-gray-700">Get diet plans and recommendations uniquely tailored to your body, preferences, and goals using advanced AI.</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-white/80 backdrop-blur-sm text-left">
            <Scale className="h-10 w-10 text-blue-500 mb-3" />
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Macro & Micronutrient Tracking</h3>
            <p className="text-gray-700">Understand your intake of proteins, carbs, fats, vitamins, and minerals with detailed breakdowns.</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-white/80 backdrop-blur-sm text-left">
            <HeartPulse className="h-10 w-10 text-blue-500 mb-3" />
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Health Goal Management</h3>
            <p className="text-gray-700">Set and track progress for weight loss, muscle gain, energy levels, and overall well-being.</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-white/80 backdrop-blur-sm text-left">
            <FlaskConical className="h-10 w-10 text-blue-500 mb-3" />
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Science-Backed Insights</h3>
            <p className="text-gray-700">Receive evidence-based advice and explanations for every recommendation.</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-white/80 backdrop-blur-sm text-left">
            <MoonStar className="h-10 w-10 text-blue-500 mb-3" />
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Lifestyle Integration</h3>
            <p className="text-gray-700">Recommendations that fit seamlessly into your daily routine, dietary preferences, and activity levels.</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-white/80 backdrop-blur-sm text-left">
            <ListChecks className="h-10 w-10 text-blue-500 mb-3" />
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Progress Visualization</h3>
            <p className="text-gray-700">Intuitive charts and graphs to help you visualize your journey and stay motivated.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="text-center mt-12 pt-8 border-t border-gray-200">
        <p className="text-gray-500 text-sm">Powered by Gemini 1.5 Flash AI | Built with ❤️ by shaikh warsi</p>
      </div>
    </div>
  )
}