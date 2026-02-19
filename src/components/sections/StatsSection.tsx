"use client"

import React from 'react'
import { cn } from '@/lib/utils'

const stats = [
  { label: "Throughput", value: "850k/s", sub: "Global Capacity" },
  { label: "Availability", value: "99.999%", sub: "Enterprise SLA" },
  { label: "Avg Latency", value: "12ms", sub: "Edge Inference" },
  { label: "Global Nodes", value: "500+", sub: "Distributed Mesh" },
]

export const StatsSection: React.FC = () => {
  return (
    <section className="py-32 relative border-y border-white/5 bg-white/[0.01] overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="group relative flex flex-col items-center text-center p-8 rounded-[2rem] transition-all duration-500 hover:bg-white/[0.02]"
            >
              {/* Individual Hover Glow */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.03] blur-2xl transition-all duration-500 rounded-full scale-50 group-hover:scale-100 opacity-0 group-hover:opacity-100" />
              
              <div className="relative">
                <p className="text-6xl md:text-7xl font-black text-foreground mb-4 tracking-[calc(-0.05em)] group-hover:text-primary transition-all duration-500 group-hover:scale-105 heading-glow">
                  {stat.value}
                </p>
                
                <div className="space-y-1">
                  <p className="text-[12px] text-foreground font-black uppercase tracking-[0.3em]">
                    {stat.label}
                  </p>
                  <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-[0.15em] opacity-40 group-hover:opacity-100 transition-opacity">
                    {stat.sub}
                  </p>
                </div>

                {/* Decorative Bottom Line */}
                <div className="mt-8 mx-auto w-12 h-1 bg-white/5 rounded-full overflow-hidden">
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
