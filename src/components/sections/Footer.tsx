"use client"

import React from 'react'
import Link from 'next/link'
import { Twitter, Github, Linkedin, Globe } from 'lucide-react'
import { Logo } from '../Navbar'

export const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center group-hover:rotate-12 transition-transform text-white">
                <Logo />
              </div>
              <span className="text-xl font-black tracking-tighter">BLOOM</span>
            </Link>
            <p className="text-sm text-muted-foreground/60 leading-relaxed max-w-xs font-medium">
              Architecting the future of enterprise AI through high-performance neural orchestration.
            </p>
          </div>
          
          {[
            { title: "Platform", links: ["Inference", "Orchestration", "Security", "Vision"] },
            { title: "Company", links: ["About", "Success Stories", "Network Status", "Careers"] },
            { title: "Legal", links: ["Privacy Policy", "Terms of Service", "SOC2", "Cookie Policy"] }
          ].map((column, i) => (
            <div key={i} className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground">{column.title}</h4>
              <div className="flex flex-col space-y-4">
                {column.links.map((link) => (
                  <Link key={link} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5">
          <div className="flex gap-6">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-5 h-5" /></Link>
          </div>
          
          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/30">
            <span className="flex items-center gap-1.5"><Globe className="w-3 h-3" /> US East-1</span>
            <span>© {new Date().getFullYear()} BLOOM AI LABS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
