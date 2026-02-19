import { Navbar } from '@/components/Navbar'
import { AnimatedHeroBackground } from '@/components/AnimatedHeroBackground'
import { CapabilityCards } from '@/components/CapabilityCards'
import { TestimonialsCarousel } from '@/components/TestimonialsCarousel'
import { ContactFormSection } from '@/components/ContactFormSection'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react'
import { Toaster } from '@/components/ui/toaster'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center text-center overflow-hidden">
        <AnimatedHeroBackground />
        <div className="absolute top-0 left-0 w-full h-full hero-gradient pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary-foreground/80 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            Next Gen AI Infrastructure is here
            <ChevronRight className="w-3 h-3" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Cultivate Intelligence <br />
            <span className="animate-gradient-text">With AI Bloom</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
            The world's most advanced AI platform for businesses ready to blossom in the age of artificial intelligence. Scalable, secure, and stunningly powerful.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8 rounded-full group">
              Launch Platform
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-14 px-8 rounded-full border-white/10 hover:bg-white/5">
              View Showcase
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-24 bg-[#121212] relative">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core AI Capabilities</h2>
            <p className="text-muted-foreground text-lg">
              Explore our modular AI stack designed to power the next generation of digital experiences.
            </p>
          </div>
          <CapabilityCards />
        </div>
      </section>

      {/* Stats/Social Proof */}
      <section className="py-20 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Users", value: "250K+" },
              { label: "Model Accuracy", value: "99.9%" },
              { label: "API Calls / Day", value: "1.2B" },
              { label: "Uptime SLA", value: "99.99%" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Visionaries</h2>
            <p className="text-muted-foreground text-lg">
              Hear from the leaders who are redefining their industries using AI Bloom.
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Ready to <br />
              <span className="text-primary">Transform Your</span> <br />
              Future?
            </h2>
            <p className="text-xl text-muted-foreground max-w-md">
              Our intelligent routing system will connect you with the perfect team within seconds. Send us a message and experience the future of communication.
            </p>
            <div className="space-y-4">
              {[
                "Instant department routing",
                "24/7 technical assistance",
                "Custom enterprise solutions",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <ContactFormSection />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Sparkles className="text-primary w-6 h-6" />
              <span className="text-xl font-bold tracking-tighter uppercase">AI Bloom</span>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-primary transition-colors">Documentation</Link>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} AI Bloom Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <Toaster />
    </main>
  )
}