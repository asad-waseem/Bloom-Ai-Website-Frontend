"use client"

import React from 'react'
import { Cpu, Database, Cloud, Zap, Infinity, Terminal } from 'lucide-react'

const partners = [
  { name: 'Nvidia', icon: <Cpu className="w-5 h-5" /> },
  { name: 'Azure', icon: <Cloud className="w-5 h-5" /> },
  { name: 'Oracle', icon: <Database className="w-5 h-5" /> },
  { name: 'Fastly', icon: <Zap className="w-5 h-5" /> },
  { name: 'Vercel', icon: <Infinity className="w-5 h-5" /> },
  { name: 'OpenAI', icon: <Terminal className="w-5 h-5" /> },
]

export const PartnerMarquee: React.FC = () => {
  // Triple the partners for a seamless loop
  const displayPartners = [...partners, ...partners, ...partners]

  return (
    <div className="w-full py-16 overflow-hidden border-y border-white/5 relative bg-white/[0.01]">
      {/* Side Masks for Fade Effect */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex w-max animate-marquee">
        {displayPartners.map((p, i) => (
          <div 
            key={i} 
            className="flex items-center gap-4 px-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-default group whitespace-nowrap"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
              {p.icon}
            </div>
            <span className="text-sm font-black tracking-[0.2em] uppercase">{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
