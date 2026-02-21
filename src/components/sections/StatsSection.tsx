"use client"

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const stats = [
  { label: "Throughput", value: "950k/s", sub: "Peak Capacity" },
  { label: "Uptime", value: "99.999%", sub: "Enterprise Grade" },
  { label: "Latency", value: "8ms", sub: "Global Average" },
  { label: "Inference", value: "1.2B", sub: "Daily Requests" },
]

export const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-24 md:py-40 relative border-y border-white/5 bg-white/[0.01] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={cn(
                "group relative flex flex-col items-center text-center p-8 rounded-[3rem] transition-all duration-700 hover:bg-white/[0.04]",
                isVisible ? "animate-in fade-in slide-in-from-bottom-12" : "opacity-0"
              )}
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.05] blur-3xl transition-all duration-700 rounded-full scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <p className="text-4xl md:text-7xl font-black text-foreground tracking-tighter group-hover:text-primary transition-all duration-500 group-hover:scale-110 heading-glow mb-4">
                  {stat.value}
                </p>
                <div className="space-y-1">
                  <p className="text-[12px] text-foreground font-black uppercase tracking-[0.4em]">
                    {stat.label}
                  </p>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">
                    {stat.sub}
                  </p>
                </div>
                <div className="mt-10 mx-auto w-12 h-[2px] bg-white/10 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}