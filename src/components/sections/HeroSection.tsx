"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronRight, Zap, Sparkles, Activity } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { Badge } from '@/components/ui/badge'

export const HeroSection: React.FC = () => {
  const { toast } = useToast()

  const handleGetStarted = () => {
    toast({
      title: "Welcome to the Future",
      description: "Redirecting you to the Bloom dashboard. Prepare for synthesis.",
    })
  }

  const handleRequestDemo = () => {
    toast({
      title: "Demo Request Received",
      description: "An AI solutions architect will contact you within 15 minutes.",
    })
  }

  return (
    <section className="relative pt-20 pb-12 md:pt-32 md:pb-24 flex flex-col items-center text-center overflow-hidden">
      {/* Background Enhancements */}
      <div className="absolute top-0 left-0 w-full h-full hero-glow pointer-events-none" />
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black,transparent)] opacity-20 pointer-events-none" />
      
      {/* Floating Elements for VIP Look */}
      <div className="absolute top-1/4 -left-12 w-64 h-64 bg-primary/20 blur-[100px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-accent/20 blur-[100px] rounded-full animate-pulse delay-700 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Status Badge */}
        <div className="flex justify-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/80">
            <Badge className="bg-primary/20 text-primary border-primary/20 h-5 px-2 flex items-center gap-1.5 animate-pulse">
              <Activity className="w-3 h-3" />
              Live
            </Badge>
            <span>Neural Orchestration v2.0</span>
            <ChevronRight className="w-3 h-3 opacity-30" />
          </div>
        </div>
        
        {/* Main Heading */}
        <div className="relative mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            Design <br />
            <span className="animate-gradient-text heading-glow">Intelligence.</span>
          </h1>
          {/* Subtle decoration */}
          <div className="absolute -top-6 -right-6 hidden lg:block opacity-20">
            <Sparkles className="w-12 h-12 text-primary animate-pulse" />
          </div>
        </div>
        
        {/* Description */}
        <p className="max-w-2xl mx-auto text-base md:text-xl text-muted-foreground/80 mb-12 leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          Scale your engineering throughput with high-performance AI orchestration. 
          Deployment-ready agents for the modern million-dollar enterprise.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
          <Button 
            size="lg" 
            onClick={handleGetStarted}
            className="bg-primary hover:bg-primary/90 text-sm h-16 px-10 rounded-2xl group font-black button-glow transition-all relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <Zap className="mr-2 w-4 h-4 text-white fill-current" />
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={handleRequestDemo}
            className="glass text-sm h-16 px-10 rounded-2xl font-black border-white/10 hover:bg-white/5 transition-all group"
          >
            Request Demo
            <ChevronRight className="ml-1 w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </Button>
        </div>

        {/* Bottom Social Proof Hint */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 items-center opacity-30 grayscale filter invert dark:invert-0 animate-in fade-in duration-1000 delay-500">
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Certified Security</span>
          <div className="h-px w-12 bg-foreground/20" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">SOC2 Compliance</span>
          <div className="h-px w-12 bg-foreground/20" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">GDPR Ready</span>
        </div>
      </div>
    </section>
  )
}