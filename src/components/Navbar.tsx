"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'
import { MobileNav } from './MobileNav'
import { cn } from '@/lib/utils'

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all">
            <Sparkles className="text-white w-5 h-5" />
          </div>
          <span className="text-lg font-black tracking-tighter hidden sm:block">BLOOM</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-muted-foreground/80">
          <Link href="#capabilities" className="hover:text-primary transition-all hover:scale-105">Capabilities</Link>
          <Link href="#pricing" className="hover:text-primary transition-all hover:scale-105">Infrastructure</Link>
          <Link href="#testimonials" className="hover:text-primary transition-all hover:scale-105">Success</Link>
          <Link href="#contact" className="hover:text-primary transition-all hover:scale-105">Contact</Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 mr-2">
            <Button variant="ghost" className="text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 rounded-full px-5 h-10 transition-all">Log In</Button>
            <Button className="bg-primary hover:bg-primary/90 rounded-full px-6 text-[10px] font-bold uppercase tracking-widest h-10 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">Join Platform</Button>
          </div>
          <MobileNav />
        </div>
      </nav>
    </div>
  )
}