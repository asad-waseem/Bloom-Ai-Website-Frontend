"use client"

import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeatureGrid } from '@/components/sections/FeatureGrid'
import { StatsSection } from '@/components/sections/StatsSection'
import { Footer } from '@/components/sections/Footer'
import { CapabilityCards } from '@/components/CapabilityCards'
import { PricingSection } from '@/components/PricingSection'
import { TestimonialsCarousel } from '@/components/TestimonialsCarousel'
import { FAQSection } from '@/components/FAQSection'
import { PartnerMarquee } from '@/components/PartnerMarquee'
import { ContactFormSection } from '@/components/ContactFormSection'
import { AnimatedHeroBackground } from '@/components/AnimatedHeroBackground'
import { Chatbot } from '@/components/Chatbot'
import { BackToTop } from '@/components/BackToTop'
import { Toaster } from '@/components/ui/toaster'
import { CheckCircle2 } from 'lucide-react'

export default function Home() {
  return (
    <main className="relative min-h-screen mesh-gradient overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <AnimatedHeroBackground />
      <Navbar />
      
      <HeroSection />
      <PartnerMarquee />
      <FeatureGrid />

      <section id="capabilities" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[50rem] h-[50rem] bg-primary/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12 md:mb-20 text-center px-4">
            <h2 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 tracking-tighter">Engineered for <span className="text-primary">Scale.</span></h2>
            <p className="text-muted-foreground/70 text-sm md:text-lg max-w-xl mx-auto font-medium">
              A comprehensive toolset for deploying production-ready AI agents with zero technical overhead.
            </p>
          </div>
          <CapabilityCards />
        </div>
      </section>

      <StatsSection />
      <PricingSection />

      <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden bg-white/[0.01]">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none translate-x-1/4" />
        <div className="container mx-auto px-4">
          <div className="mb-12 md:mb-20 text-center">
            <h2 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 tracking-tighter">Trusted Ecosystem</h2>
            <p className="text-muted-foreground/70 text-sm md:text-base font-medium">Empowering the next generation of AI-native companies.</p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      <FAQSection />

      <section id="contact" className="py-20 md:py-32 container mx-auto px-4">
        <div className="glass-card p-6 xs:p-8 md:p-20 rounded-[2rem] md:rounded-[3rem] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center border border-white/10 overflow-hidden relative group">
          <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-primary/10 blur-[150px] rounded-full group-hover:scale-125 transition-transform duration-1000" />
          
          <div className="space-y-6 md:space-y-10 relative z-10">
            <h2 className="text-4xl xs:text-5xl md:text-7xl font-black leading-[1] md:leading-[0.9] tracking-tighter">
              Ready to <br />
              <span className="text-primary">Synthesize?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground/80 max-w-md font-medium leading-relaxed">
              Join the waiting list for enterprise early access or schedule a session with our neural engineers.
            </p>
            <div className="space-y-3 md:space-y-5">
              {[
                "Zero-latency message routing",
                "Automated agent orchestration",
                "Custom LLM fine-tuning",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-4">
                  <div className="w-5 h-5 md:w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 md:w-4 h-4 text-primary" />
                  </div>
                  <span className="font-black text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative z-10">
            <ContactFormSection />
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
      <BackToTop />
      <Toaster />
    </main>
  )
}
