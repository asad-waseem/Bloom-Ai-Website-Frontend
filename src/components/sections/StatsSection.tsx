"use client"

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const stats = [
  { label: "Throughput", value: "850k/s", sub: "Global Capacity" },
  { label: "Availability", value: "99.999%", sub: "Enterprise SLA" },
  { label: "Avg Latency", value: "12ms", sub: "Edge Inference" },
  { label: "Global Nodes", value: "500+", sub: "Distributed Mesh" },
]

export const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-20 md:py-32 relative border-y border-white/5 bg-white/[0.01] overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-accent/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 md:gap-x-12">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={cn(
                "group relative flex flex-col items-center text-center p-4 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] transition-all duration-700 hover:bg-white/[0.03] animate-in fade-in slide-in-from-bottom-8",
                isVisible ? "opacity-100" : "opacity-0"
              )}
              style={{ animationDelay: `${i * 150}ms`, animationFillMode: 'forwards' }}
            >
              {/* Individual Hover Glow */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.05] blur-2xl md:blur-3xl transition-all duration-700 rounded-full scale-50 group-hover:scale-100 opacity-0 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <div className="mb-2 md:mb-4 overflow-hidden">
                  <p className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tighter group-hover:text-primary transition-all duration-500 group-hover:scale-110 heading-glow">
                    {stat.value}
                  </p>
                </div>
                
                <div className="space-y-1 md:space-y-2">
                  <p className="text-[8px] md:text-[12px] text-foreground font-black uppercase tracking-[0.2em] md:tracking-[0.3em] leading-none">
                    {stat.label}
                  </p>
                  <p className="text-[7px] md:text-[9px] text-muted-foreground font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity">
                    {stat.sub}
                  </p>
                </div>

                {/* Decorative Dynamic Underline */}
                <div className="mt-6 md:mt-10 mx-auto w-8 md:w-16 h-[1px] bg-white/10 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
