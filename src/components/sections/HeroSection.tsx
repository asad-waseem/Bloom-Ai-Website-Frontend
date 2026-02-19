"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronRight, Zap, Sparkles, Activity, ShieldCheck } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { Badge } from '@/components/ui/badge'

export const HeroSection: React.FC = () => {
  const { toast } = useToast()

  const handleGetStarted = () => {
    toast({
      title: "Initializing Workspace",
      description: "Welcome back, Lead Engineer. Neural sync in progress.",
    })
  }

  const handleRequestDemo = () => {
    toast({
      title: "Synthesis Scheduled",
      description: "A specialized agent will contact you shortly.",
    })
  }

  return (
    <section className="relative pt-24 pb-16 md:pt-40 md:pb-32 flex flex-col items-center text-center overflow-hidden">
      {/* Background Enhancements */}
      <div className="absolute top-0 left-0 w-full h-full hero-glow pointer-events-none" />
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black,transparent)] opacity-40 pointer-events-none" />
      
      {/* Dynamic Glow Blobs */}
      <div className="absolute top-1/4 -left-20 w-[40rem] h-[40rem] bg-primary/10 blur-[150px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[40rem] h-[40rem] bg-accent/10 blur-[150px] rounded-full animate-pulse delay-1000 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Status Badge */}
        <div className="flex justify-center mb-10 animate-in fade-in slide-in-from-top-4 duration-1000 ease-out">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-white/10 text-[11px] font-black uppercase tracking-[0.3em] text-foreground/90 shadow-xl">
            <Badge className="bg-primary/20 text-primary border-primary/20 h-5 px-2 flex items-center gap-1.5">
              <Activity className="w-3 h-3 animate-pulse" />
              v2.0 Stable
            </Badge>
            <span className="opacity-60">Neural Infrastructure for Scale</span>
            <ChevronRight className="w-3 h-3 opacity-30" />
          </div>
        </div>
        
        {/* Main Heading */}
        <div className="relative mb-10 group">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.82] animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-100 ease-out">
            Synthesize <br />
            <span className="animate-gradient-text heading-glow">Intelligence.</span>
          </h1>
          {/* Decorative Sparkle */}
          <div className="absolute -top-10 -right-10 hidden lg:block opacity-40 group-hover:scale-125 transition-transform duration-700">
            <Sparkles className="w-16 h-16 text-primary animate-pulse" />
          </div>
        </div>
        
        {/* High-Impact Description */}
        <p className="max-w-2xl mx-auto text-lg md:text-2xl text-muted-foreground/80 mb-14 leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-200 ease-out">
          Engineer the future with production-ready AI agents. 
          Zero-latency orchestration for the modern billion-dollar enterprise.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-300 ease-out">
          <Button 
            size="lg" 
            onClick={handleGetStarted}
            className="bg-primary hover:bg-primary/90 text-sm h-16 px-12 rounded-2xl group font-black button-glow transition-all relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <Zap className="mr-2 w-4 h-4 text-white fill-current" />
            Launch Dashboard
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={handleRequestDemo}
            className="glass text-sm h-16 px-12 rounded-2xl font-black border-white/10 hover:bg-white/10 transition-all group shadow-xl"
          >
            Request VIP Access
            <ChevronRight className="ml-1 w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </Button>
        </div>

        {/* Security / Compliance Footnote */}
        <div className="mt-24 flex flex-wrap justify-center gap-10 items-center opacity-40 animate-in fade-in duration-1000 delay-500">
          <div className="flex items-center gap-2 group cursor-default">
            <ShieldCheck className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em]">SOC2 Certified</span>
          </div>
          <div className="h-px w-16 bg-foreground/10" />
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-[0.3em]">ISO/IEC 27001</span>
          </div>
          <div className="h-px w-16 bg-foreground/10" />
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-[0.3em]">GDPR Compliant</span>
          </div>
        </div>
      </div>
    </section>
  )
}