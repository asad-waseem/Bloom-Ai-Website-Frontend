"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'

export const Navbar: React.FC = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="glass max-w-5xl w-full h-16 rounded-full px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <Sparkles className="text-white w-5 h-5" />
          </div>
          <span className="text-lg font-black tracking-tighter">BLOOM</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          <Link href="#capabilities" className="hover:text-primary transition-colors">Platform</Link>
          <Link href="#testimonials" className="hover:text-primary transition-colors">Users</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Connect</Link>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-xs font-bold uppercase tracking-widest hover:bg-white/5 rounded-full px-5">Log In</Button>
          <Button className="bg-primary hover:bg-primary/90 rounded-full px-6 text-xs font-bold uppercase tracking-widest h-10 shadow-lg shadow-primary/20">Get Started</Button>
        </div>
      </nav>
    </div>
  )
}