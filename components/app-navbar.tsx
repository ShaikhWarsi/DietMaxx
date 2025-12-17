"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { HomeIcon, PillIcon, BrainIcon, HeartIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

export function AppNavBar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    {
      title: "Home",
      href: "/",
      icon: HomeIcon,
    },
    {
      title: "Vitamin Optimization",
      href: "/vitamin-optimization",
      icon: PillIcon,
    },
    {
      title: "Neurochemical Optimization",
      href: "/neurochemical-optimization",
      icon: BrainIcon,
    },
    {
      title: "Gut Health",
      href: "/gut-health",
      icon: HeartIcon,
    },
    {
      title: "Sleep & Recovery",
      href: "/sleep-recovery",
      icon: MoonIcon,
    },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="mr-4 flex items-center space-x-2">
          <span className="font-bold">DietMaxx</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium ml-auto"> {/* Added ml-auto */}
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
            "transition-all duration-200 hover:text-foreground/80 hover:scale-105 flex items-center",
            pathname === item.href ? "text-foreground" : "text-foreground/60"
          )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto"> {/* Added ml-auto to push mobile button to right */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
            {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60 pb-4">
          <nav className="flex flex-col items-center space-y-2 text-sm font-medium">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "w-full text-center py-2 transition-colors hover:text-foreground/80 flex items-center justify-center",
                    pathname === item.href ? "text-foreground bg-accent" : "text-foreground/60"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </nav>
  )
}
