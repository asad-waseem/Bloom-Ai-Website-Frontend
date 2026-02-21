"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MobileNav } from './MobileNav'
import { cn } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'
import { Moon, Sun, Shield } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export const Logo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-8 h-8", className)}>
    <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
    <path d="M20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10Z" fill="currentColor"/>
    <circle cx="20" cy="20" r="3" fill="white"/>
    <path d="M20 4V8M20 32V36M4 20H8M32 20H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { toast } = useToast()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4",
      scrolled ? "pt-4" : "pt-8"
    )}>
      <nav className={cn(
        "mx-auto max-w-6xl w-full h-16 rounded-full px-6 flex items-center justify-between transition-all duration-500",
        scrolled ? "glass-card border-white/10 shadow-2xl scale-[0.98]" : "glass border-white/5"
      )}>
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center group-hover:rotate-12 transition-all text-white shadow-lg shadow-primary/20">
            <Logo className="w-6 h-6" />
          </div>
          <span className="text-xl font-black tracking-tighter hidden sm:block">BLOOM</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80">
          <Link href="#capabilities" className="hover:text-primary transition-colors">Core</Link>
          <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
          <Link href="#testimonials" className="hover:text-primary transition-colors">Network</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Sync</Link>
        </div>

        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="rounded-full h-10 w-10 glass border-white/5"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
          
          <div className="hidden sm:flex items-center gap-2">
            <Button 
              onClick={() => toast({ title: "Welcome Back", description: "Re-establishing neural link..." })}
              className="bg-primary hover:bg-primary/90 rounded-full px-6 text-[10px] font-black uppercase tracking-widest h-10 shadow-lg shadow-primary/20"
            >
              Terminal
            </Button>
          </div>
          <MobileNav />
        </div>
      </nav>
    </div>
  )
}