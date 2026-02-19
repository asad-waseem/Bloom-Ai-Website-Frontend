"use client"

import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Brain, Sparkles, Languages, Eye, Zap, SearchCode } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const capabilities = [
  {
    title: 'Natural Language Processing',
    description: 'Understand and generate human-like text with context-aware precision.',
    icon: <Brain className="w-8 h-8 text-primary" />,
    badge: 'Standard'
  },
  {
    title: 'Predictive Analytics',
    description: 'Analyze historical data to forecast future trends and behaviors.',
    icon: <Zap className="w-8 h-8 text-accent" />,
    badge: 'Pro'
  },
  {
    title: 'Computer Vision',
    description: 'Enable machines to identify and process objects in images and videos.',
    icon: <Eye className="w-8 h-8 text-primary" />,
    badge: 'Advanced'
  },
  {
    title: 'Generative Synthesis',
    description: 'Create unique digital assets and content from scratch using deep learning.',
    icon: <Sparkles className="w-8 h-8 text-accent" />,
    badge: 'Beta'
  },
  {
    title: 'Real-time Translation',
    description: 'Break language barriers with instantaneous, high-fidelity translation.',
    icon: <Languages className="w-8 h-8 text-primary" />,
    badge: 'Global'
  },
  {
    title: 'Semantic Search',
    description: 'Go beyond keywords to find results based on intent and meaning.',
    icon: <SearchCode className="w-8 h-8 text-accent" />,
    badge: 'Search'
  }
]

export const CapabilityCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {capabilities.map((cap, idx) => (
        <Card 
          key={idx} 
          className="group relative bg-card border-white/5 hover:border-primary/50 transition-all duration-300 hover:translate-y-[-4px] overflow-hidden cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardHeader>
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 group-hover:bg-primary/20 transition-colors duration-300">
              {cap.icon}
            </div>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold">{cap.title}</CardTitle>
              <Badge variant="outline" className="text-[10px] uppercase tracking-wider border-white/10">{cap.badge}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground leading-relaxed">
              {cap.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}