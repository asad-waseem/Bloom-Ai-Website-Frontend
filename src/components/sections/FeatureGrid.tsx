"use client"

import React from 'react'
import { Zap, Shield, Globe } from 'lucide-react'

const features = [
  { 
    icon: <Zap className="w-6 h-6" />, 
    title: "Edge Real-time", 
    desc: "Sub-ms latency via globally distributed inference clusters." 
  },
  { 
    icon: <Shield className="w-6 h-6" />, 
    title: "SOC2 Compliance", 
    desc: "Military-grade data isolation and end-to-end encryption." 
  },
  { 
    icon: <Globe className="w-6 h-6" />, 
    title: "Neural Mesh", 
    desc: "Automated model routing across 200+ global edge locations." 
  },
]

export const FeatureGrid: React.FC = () => {
  return (
    <section className="py-24 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="apple-glass p-10 rounded-[3rem] group relative overflow-hidden transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-base text-muted-foreground/80 leading-relaxed font-medium">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
