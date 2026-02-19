"use client"

import React from 'react'

const stats = [
  { label: "Throughput", value: "850k/s" },
  { label: "Availability", value: "99.999%" },
  { label: "Avg Latency", value: "12ms" },
  { label: "Global Nodes", value: "500+" },
]

export const StatsSection: React.FC = () => {
  return (
    <section className="py-24 border-y border-white/5 bg-white/[0.01]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group relative">
              <div className="absolute inset-0 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-5xl md:text-6xl font-black text-foreground mb-2 group-hover:text-primary transition-all scale-100 group-hover:scale-110 tracking-tighter">
                {stat.value}
              </p>
              <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}