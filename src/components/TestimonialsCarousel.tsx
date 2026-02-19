"use client"

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from 'lucide-react'
import { PlaceHolderImages } from '@/lib/placeholder-images'

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CTO @ FlowState",
    content: "AI Bloom has completely transformed how we handle our customer data. The predictive analytics are scary accurate.",
    image: PlaceHolderImages.find(img => img.id === 'testimonial-1')?.imageUrl
  },
  {
    name: "Marcus Chen",
    role: "Head of Product",
    content: "The NLP engine is the best we've tested. Integration was seamless and the results speak for themselves.",
    image: PlaceHolderImages.find(img => img.id === 'testimonial-2')?.imageUrl
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, Bloom Creative",
    content: "Creativity meets technology. Their generative synthesis tool saves us hours of manual design work every day.",
    image: PlaceHolderImages.find(img => img.id === 'testimonial-3')?.imageUrl
  }
]

export const TestimonialsCarousel: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((t, idx) => (
            <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/2 p-2">
              <Card className="bg-white/5 border-white/10 h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <Quote className="w-8 h-8 text-primary/50 mb-6" />
                  <p className="text-lg text-foreground/90 italic mb-8 flex-grow">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 ring-2 ring-primary/20">
                      <AvatarImage src={t.image} alt={t.name} />
                      <AvatarFallback>{t.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="bg-background/50 border-white/10 hover:bg-primary/20 -left-12" />
          <CarouselNext className="bg-background/50 border-white/10 hover:bg-primary/20 -right-12" />
        </div>
      </Carousel>
    </div>
  )
}