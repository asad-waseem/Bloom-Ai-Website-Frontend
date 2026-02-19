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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {capabilities.map((cap, idx) => (
        <Card 
          key={idx} 
          className="group relative glass-card border-white/5 hover:border-primary/30 transition-all duration-300"
        >
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                {cap.icon}
              </div>
              <Badge variant="outline" className="text-[8px] uppercase font-bold tracking-widest border-white/10 bg-white/5 text-muted-foreground">{cap.badge}</Badge>
            </div>
            <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">{cap.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm text-muted-foreground leading-relaxed">
              {cap.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}