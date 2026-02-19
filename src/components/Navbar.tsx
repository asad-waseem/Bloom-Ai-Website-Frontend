"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'

export const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <nav className="glass max-w-4xl w-full h-14 rounded-full px-6 flex items-center justify-between border border-white/10">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
            <Sparkles className="text-white w-4 h-4" />
          </div>
          <span className="text-base font-black tracking-tight">BLOOM</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80">
          <Link href="#capabilities" className="hover:text-primary transition-colors">Features</Link>
          <Link href="#testimonials" className="hover:text-primary transition-colors">Success</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden sm:inline-flex text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 rounded-full px-4 h-9">Log In</Button>
          <Button className="bg-primary hover:bg-primary/90 rounded-full px-6 text-[10px] font-bold uppercase tracking-widest h-9 shadow-lg shadow-primary/20">Sign Up</Button>
        </div>
      </nav>
    </div>
  )
}