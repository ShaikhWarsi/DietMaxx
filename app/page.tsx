"use client"



import { useRouter } from 'next/navigation';
import { Brain, ClipboardList, BarChart2, PieChart, Pill, Target } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push('/home'); // Assuming '/home' is the route for the assessment form
  };
  return (
    <div className="min-h-screen">
      {/* Header with Menu Button */}
      <div className="sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">

            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DietMaxxing
            </h1>
          </div>
          <p className="text-sm hidden md:block">AI-Powered Dietary Analysis & Optimization</p>
          <ThemeToggle />
        </div>
      </div>

      {/* Page Content */}
      <main className="container mx-auto px-4 py-12 flex flex-col items-center justify-center text-center">
        <h2 className="text-5xl font-extrabold mb-4 animate-fade-in-up">
          Personalized AI Diet Plans Backed by Science — Tailored to Your Goals
        </h2>
        <p className="text-xl mb-8 max-w-2xl animate-fade-in-up animation-delay-200">
          Understand your nutrition better, get actionable advice, and make healthier choices with data-driven insights.
        </p>
        <button
          onClick={handleGetStartedClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 animate-fade-in-up animation-delay-400"
        >
          Get Your Personalized Diet Plan
        </button>
      </main>

      {/* How it works section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h3 className="text-4xl font-bold text-gray-900 mb-6">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg shadow-lg">
            <Brain className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-blue-600 mb-3">1. AI Assessment</h4>
            <p>Answer a few questions about your diet, lifestyle, and health goals.</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg">
            <ClipboardList className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-blue-600 mb-3">2. Personalized Plan</h4>
            <p>Our AI generates a custom diet plan tailored to your unique needs.</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg">
            <BarChart2 className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-blue-600 mb-3">3. Weekly Insights</h4>
            <p>Receive ongoing advice and track your progress with data-driven insights.</p>
          </div>
        </div>
      </section>

      {/* What you get section */}
      <section className="container mx-auto px-4 py-12 text-center rounded-lg">
        <h3 className="text-4xl font-bold text-gray-900 mb-6">What You Get</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6">
            <PieChart className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-blue-600 mb-3">Macro Breakdowns</h4>
            <p>Detailed analysis of your protein, carbs, and fats intake.</p>
          </div>
          <div className="p-6">
            <Pill className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-blue-600 mb-3">Vitamin Suggestions</h4>
            <p>Recommendations for essential vitamins and minerals you might be missing.</p>
          </div>
          <div className="p-6">
            <Target className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-blue-600 mb-3">Goal Tracking</h4>
            <p>Monitor your progress towards your health and fitness objectives.</p>
          </div>
        </div>
      </section>

      {/* Why it's better section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h3 className="text-4xl font-bold text-gray-900 mb-6">Why DietMaxxing Is Better</h3>
        <div className="max-w-3xl mx-auto p-6 rounded-lg shadow-lg">
          <h4 className="text-xl font-semibold text-blue-600 mb-3">AI-Driven vs. Generic Diet Tips</h4>
          <p>Unlike generic diet advice, DietMaxxing uses advanced AI to provide recommendations specifically tailored to your body and lifestyle, ensuring more effective and sustainable results.</p>
        </div>
      </section>

      {/* Social Proof / Testimonials Section */}
      <section className="container mx-auto px-4 py-12 text-center rounded-lg">
        <h3 className="text-4xl font-bold text-gray-900 mb-6">What Our Users Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg shadow-lg text-left">
            <p className="italic mb-4">"DietMaxxing has completely transformed my approach to nutrition. The personalized plans are incredibly effective!"</p>
            <p className="font-semibold text-blue-600">- Jane Doe, Health Enthusiast</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg text-left">
            <p className="italic mb-4">"I've tried countless diets, but DietMaxxing's AI-driven insights finally helped me achieve my weight goals."</p>
            <p className="font-semibold text-blue-600">- John Smith, Fitness Trainer</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="text-center mt-12 pt-8">
        <p className="text-sm">Built with ❤️ by shaikh warsi</p>
      </div>
    </div>
  )
}
