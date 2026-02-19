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
  return (
    <div className="w-full py-12 overflow-hidden border-y border-white/5 relative bg-white/[0.01]">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="animate-marquee flex items-center gap-12 px-12">
        {[...partners, ...partners].map((p, i) => (
          <div key={i} className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-default group">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary">
              {p.icon}
            </div>
            <span className="text-sm font-black tracking-widest uppercase">{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}