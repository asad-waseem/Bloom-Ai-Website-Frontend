"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronRight, Zap, Sparkles, Activity, ShieldCheck } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { Badge } from '@/components/ui/badge'

export const HeroSection: React.FC = () => {
  const { toast } = useToast()

  const handleAction = (title: string, desc: string) => {
    toast({ title, description: desc })
  }

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full hero-glow pointer-events-none" />
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black,transparent)] opacity-30 pointer-events-none" />
      
      <div className="absolute top-1/4 -left-20 w-[40rem] h-[40rem] bg-primary/10 blur-[180px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[40rem] h-[40rem] bg-accent/10 blur-[180px] rounded-full animate-pulse delay-700 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="flex justify-center mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-foreground/90">
            <Badge className="bg-primary/20 text-primary border-primary/20 h-5 px-2 flex items-center gap-1.5">
              <Activity className="w-3 h-3 animate-pulse" />
              v3.0 Live
            </Badge>
            <span className="opacity-60">Global Neural Mesh Active</span>
          </div>
        </div>
        
        <div className="relative mb-8 group">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-100">
            Bloom <br />
            <span className="animate-gradient-text heading-glow">Intelligence.</span>
          </h1>
          <div className="absolute -top-12 -right-12 hidden lg:block opacity-30">
            <Sparkles className="w-20 h-20 text-accent animate-spin-slow" />
          </div>
        </div>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground/80 mb-10 leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-200">
          The definitive platform for enterprise AI orchestration. 
          Deploy zero-latency agents with military-grade security and semantic precision.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-300">
          <Button 
            size="lg" 
            onClick={() => handleAction("Initializing Workspace", "Synchronizing neural cores...")}
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-[11px] h-14 px-10 rounded-2xl group font-black button-glow transition-all"
          >
            <Zap className="mr-2 w-4 h-4 fill-current" />
            Launch Interface
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => handleAction("Demo Requested", "A specialist will be in touch soon.")}
            className="w-full sm:w-auto glass text-[11px] h-14 px-10 rounded-2xl font-black border-white/10 hover:bg-white/10 group"
          >
            Request VIP Access
            <ChevronRight className="ml-1 w-4 h-4 opacity-50 group-hover:translate-x-0.5 transition-all" />
          </Button>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-8 items-center opacity-40">
          {["ISO 27001", "SOC2 TYPE II", "GDPR COMPLIANT"].map((text) => (
            <div key={text} className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="text-[10px] font-black uppercase tracking-widest">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}