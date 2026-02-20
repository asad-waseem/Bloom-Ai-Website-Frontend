"use client"

import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Brain, Sparkles, Languages, Eye, Zap, SearchCode } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const capabilities = [
  {
    title: 'Reasoning Engine',
    description: 'Deep chain-of-thought processing for complex decision making and logical inference.',
    icon: <Brain className="w-5 h-5 text-primary" />,
    badge: 'Enterprise'
  },
  {
    title: 'Vision Studio',
    description: 'Advanced computer vision that identifies spatial relationships and object intent.',
    icon: <Eye className="w-5 h-5 text-primary" />,
    badge: 'Pro'
  },
  {
    title: 'Neural Translation',
    description: 'Near-instant localization that preserves tone, context, and regional slang.',
    icon: <Languages className="w-5 h-5 text-primary" />,
    badge: 'Global'
  },
  {
    title: 'Asset Synthesis',
    description: 'Generate production-ready UI components and vector assets with simple prompts.',
    icon: <Sparkles className="w-5 h-5 text-primary" />,
    badge: 'Beta'
  },
  {
    title: 'Edge Compute',
    description: 'Globally distributed inference nodes for zero-latency user experiences.',
    icon: <Zap className="w-5 h-5 text-primary" />,
    badge: 'Standard'
  },
  {
    title: 'Semantic Search',
    description: 'Vector-based retrieval that understands conceptual relationships between data points.',
    icon: <SearchCode className="w-5 h-5 text-primary" />,
    badge: 'New'
  }
]

export const CapabilityCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {capabilities.map((cap, idx) => (
        <Card 
          key={idx} 
          className="group relative apple-glass border-transparent hover:border-primary/20 transition-all duration-500 rounded-[2.5rem] overflow-hidden"
        >
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                {cap.icon}
              </div>
              <Badge variant="outline" className="text-[9px] px-3 py-1 uppercase font-black tracking-[0.2em] border-primary/20 bg-primary/5 text-primary">{cap.badge}</Badge>
            </div>
            <CardTitle className="text-xl font-black group-hover:text-primary transition-colors tracking-tight">{cap.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base text-muted-foreground/80 leading-relaxed font-medium">
              {cap.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
