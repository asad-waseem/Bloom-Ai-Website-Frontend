"use client"

import React from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const tiers = [
  {
    name: 'Developer',
    price: '$0',
    description: 'Perfect for exploring AI capabilities and building side projects.',
    features: ['10k requests/month', 'Shared infrastructure', 'Standard support', 'Public API access'],
    buttonText: 'Get Started',
    popular: false
  },
  {
    name: 'Pro',
    price: '$79',
    description: 'For growing teams scaling their production AI applications.',
    features: ['500k requests/month', 'Priority routing', '24/7 technical support', 'Custom knowledge base'],
    buttonText: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Bespoke infrastructure for large-scale enterprise deployments.',
    features: ['Unlimited throughput', 'Dedicated inference nodes', 'SLA guarantees', 'White-glove migration'],
    buttonText: 'Talk to Sales',
    popular: false
  }
]

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Simple, Agentic Pricing</h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Scale seamlessly as your traffic grows. No hidden fees, just raw intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <Card 
              key={idx} 
              className={`relative glass-card border-white/5 hover-shine flex flex-col ${tier.popular ? 'border-primary/40 bg-primary/[0.02] -translate-y-4 scale-105' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-white hover:bg-primary px-3 py-1 font-bold text-[10px] uppercase tracking-widest">Most Popular</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-black">{tier.name}</CardTitle>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-4xl font-black tracking-tight">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className="text-muted-foreground text-sm font-medium">/mo</span>}
                </div>
                <CardDescription className="text-sm mt-4 leading-relaxed">
                  {tier.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full h-12 rounded-xl font-bold transition-all ${tier.popular ? 'bg-primary hover:bg-primary/90 button-glow' : 'glass border-white/10 hover:bg-white/5'}`}
                  variant={tier.popular ? 'default' : 'outline'}
                >
                  {tier.buttonText}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}