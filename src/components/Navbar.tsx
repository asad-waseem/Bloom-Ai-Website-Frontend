"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MobileNav } from './MobileNav'
import { cn } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export const Logo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-8 h-8", className)}>
    <path d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5ZM20 30C14.4772 30 10 25.5228 10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30Z" fill="currentColor" fillOpacity="0.2"/>
    <path d="M20 12C15.5817 12 12 15.5817 12 20C12 24.4183 15.5817 28 20 28C24.4183 28 28 24.4183 28 20C28 15.5817 24.4183 12 20 12ZM20 24C17.7909 24 16 22.2091 16 20C16 17.7909 17.7909 16 20 16C22.2091 16 24 17.7909 24 20C24 22.2091 22.2091 24 20 24Z" fill="currentColor"/>
    <circle cx="20" cy="20" r="2" fill="white"/>
    <path d="M20 2L20 8M20 32L20 38M2 20L8 20M32 20L38 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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

  const handleAction = (action: string) => {
    toast({
      title: "Action Initiated",
      description: `The ${action} sequence has been started.`,
    })
  }

  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4",
      scrolled ? "pt-2 md:pt-4" : "pt-4 md:pt-6"
    )}>
      <nav className={cn(
        "mx-auto max-w-6xl w-full h-16 rounded-full px-6 flex items-center justify-between transition-all duration-500",
        scrolled ? "glass-card border-white/10 shadow-2xl scale-[0.98]" : "glass border-white/5"
      )}>
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all text-white">
            <Logo />
          </div>
          <span className="text-lg font-black tracking-tighter hidden sm:block">BLOOM</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-muted-foreground/80">
          <Link href="#capabilities" className="hover:text-primary transition-all">Capabilities</Link>
          <Link href="#pricing" className="hover:text-primary transition-all">Pricing</Link>
          <Link href="#testimonials" className="hover:text-primary transition-all">Success</Link>
          <Link href="#contact" className="hover:text-primary transition-all">Contact</Link>
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
              variant="ghost" 
              onClick={() => handleAction('Login')}
              className="text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 rounded-full px-5 h-10 transition-all"
            >
              Log In
            </Button>
            <Button 
              onClick={() => handleAction('Onboarding')}
              className="bg-primary hover:bg-primary/90 rounded-full px-6 text-[10px] font-bold uppercase tracking-widest h-10 shadow-lg shadow-primary/20 transition-all"
            >
              Join
            </Button>
          </div>
          <MobileNav />
        </div>
      </nav>
    </div>
  )
}
