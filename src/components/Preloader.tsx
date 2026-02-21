"use client"

import React, { useEffect, useState } from 'react'
import { Logo } from './Navbar'
import { cn } from '@/lib/utils'
import Image from 'next/image'

/**
 * VIP PRELOADER CONFIGURATION
 * Change these values to customize your loading screen
 */
const PRELOADER_CONFIG = {
  logoUrl: "", // Add a URL here (e.g., "https://example.com/logo.png") to use an image instead of the SVG
  mainText: "Synthesizing Neural Interface",
  subText: "Edge Compute Nodes Active",
  versionText: "Bloom AI Orchestrator v2.0.42",
  accentColor: "primary", // Uses the primary theme color
}

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    // Check if we've already shown the loader in this session
    const hasSeenPreloader = sessionStorage.getItem('bloom_preloader_seen')
    
    if (hasSeenPreloader) {
      setLoading(false)
      setShouldRender(false)
      return
    }

    // Force render on the first visit
    setShouldRender(true)
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setLoading(false)
            sessionStorage.setItem('bloom_preloader_seen', 'true')
            // Delay unmounting to allow the fade-out animation to complete
            setTimeout(() => setShouldRender(false), 1100)
          }, 500)
          return 100
        }
        // Varied progress increments for a more "organic" loading feel
        return prev + Math.floor(Math.random() * 15) + 5
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  if (!shouldRender) return null

  return (
    <div className={cn(
      "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-all duration-1000 ease-in-out",
      !loading ? "opacity-0 invisible scale-110 pointer-events-none" : "opacity-100 visible scale-100"
    )}>
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
      
      <div className="relative flex flex-col items-center gap-12">
        {/* Animated Logo Container */}
        <div className="relative group">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-ping" />
          <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center text-white shadow-2xl shadow-primary/40 relative z-10 transition-transform duration-700 hover:scale-110">
            {PRELOADER_CONFIG.logoUrl ? (
              <div className="relative w-16 h-16">
                <Image 
                  src={PRELOADER_CONFIG.logoUrl} 
                  alt="Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
            ) : (
              <Logo className="w-16 h-16" />
            )}
          </div>
        </div>

        {/* Loading Information */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground animate-pulse">
            {PRELOADER_CONFIG.mainText}
          </h2>
          
          {/* Progress Bar */}
          <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden relative">
            <div 
              className="absolute inset-y-0 left-0 bg-primary transition-all duration-300 ease-out shadow-[0_0_15px_rgba(59,130,246,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black tabular-nums tracking-tighter">
              {progress}
            </span>
            <span className="text-[10px] font-black text-primary uppercase tracking-widest">%</span>
          </div>
        </div>

        {/* Tech Footnote */}
        <div className="absolute bottom-12 flex flex-col items-center gap-2 opacity-30">
          <div className="flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[8px] font-black uppercase tracking-[0.3em]">
              {PRELOADER_CONFIG.subText}
            </span>
          </div>
          <p className="text-[7px] font-black uppercase tracking-widest">
            {PRELOADER_CONFIG.versionText}
          </p>
        </div>
      </div>
    </div>
  )
}