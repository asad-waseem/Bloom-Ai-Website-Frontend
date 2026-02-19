"use client"

import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Brain, Sparkles, Languages, Eye, Zap, SearchCode } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const capabilities = [
  {
    title: 'Cognitive Engine',
    description: 'Highly specialized LLMs trained for deep reasoning and complex problem solving.',
    icon: <Brain className="w-6 h-6 text-primary" />,
    badge: 'Enterprise'
  },
  {
    title: 'Vision Analysis',
    description: 'Instant object detection and scene understanding with low-latency processing.',
    icon: <Eye className="w-6 h-6 text-accent" />,
    badge: 'Pro'
  },
  {
    title: 'Language Matrix',
    description: 'Dynamic translation across 150+ dialects with native-level linguistic nuance.',
    icon: <Languages className="w-6 h-6 text-primary" />,
    badge: 'Global'
  },
  {
    title: 'Neural Synthesis',
    description: 'Generate production-ready assets and complex data models in seconds.',
    icon: <Sparkles className="w-6 h-6 text-accent" />,
    badge: 'New'
  },
  {
    title: 'Velocity Compute',
    description: 'Edge-optimized inference delivering results at the speed of thought.',
    icon: <Zap className="w-6 h-6 text-primary" />,
    badge: 'Standard'
  },
  {
    title: 'Deep Search',
    description: 'Semantic vector search that understands the "why" behind every query.',
    icon: <SearchCode className="w-6 h-6 text-accent" />,
    badge: 'Search'
  }
]

export const CapabilityCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {capabilities.map((cap, idx) => (
        <Card 
          key={idx} 
          className="group relative glass-card border-white/5 hover:border-primary/40 transition-all duration-500 overflow-hidden cursor-pointer"
        >
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity duration-500">
            {React.cloneElement(cap.icon as React.ReactElement, { className: "w-24 h-24" })}
          </div>
          <CardHeader>
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
              {cap.icon}
            </div>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">{cap.title}</CardTitle>
              <Badge variant="outline" className="text-[9px] uppercase font-black tracking-widest border-white/10 bg-white/5">{cap.badge}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
              {cap.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}