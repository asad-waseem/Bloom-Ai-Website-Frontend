"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-52 md:pb-32 flex flex-col items-center text-center">
      <div className="absolute top-0 left-0 w-full h-full hero-glow pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/5 text-[10px] font-bold uppercase tracking-widest text-primary mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Enterprise v2.0 is Live
          <ChevronRight className="w-3 h-3 ml-1 opacity-50" />
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black mb-8 tracking-tighter leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          Intelligence <br />
          <span className="animate-gradient-text">By Design.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-base md:text-xl text-muted-foreground/70 mb-12 leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
          Scale your engineering throughput with high-performance AI orchestration. Deployment-ready agents for the modern enterprise.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-sm h-16 px-10 rounded-full group font-black button-glow transition-all">
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="glass text-sm h-16 px-10 rounded-full font-black border-white/10 hover:bg-white/5 transition-all">
            Request Demo
          </Button>
        </div>
      </div>
    </section>
  )
}