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
    <main className="relative min-h-screen overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-64 md:pb-40 flex flex-col items-center text-center overflow-hidden">
        <div className="blob-container">
          <div className="blob" />
          <div className="blob blob-pink" />
          <div className="blob blob-blue" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full hero-glow pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            Intelligence Reimagined
            <ChevronRight className="w-3 h-3 ml-1" />
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            Design for <br />
            <span className="animate-gradient-text">the AI Era</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground/80 mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            AI Bloom is a decentralized intelligence platform empowering engineers to build, scale, and deploy autonomous agents with unprecedented speed.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-sm h-16 px-10 rounded-full group font-black uppercase tracking-widest shadow-xl shadow-primary/25 border-t border-white/20">
              Start Building
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="glass text-sm h-16 px-10 rounded-full font-black uppercase tracking-widest border-white/10 hover:bg-white/5">
              Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Core Technologies</h2>
            <p className="text-muted-foreground text-lg font-medium">
              Modular infrastructure for the next generation of digital consciousness.
            </p>
          </div>
          <CapabilityCards />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 glass border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Active Nodes", value: "12,482" },
              { label: "Response Time", value: "<12ms" },
              { label: "Data Processed", value: "4.2 PB" },
              { label: "Safety Rating", value: "100%" },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <p className="text-4xl md:text-5xl font-black text-foreground mb-2 group-hover:text-primary transition-colors duration-500">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Adopted by Giants</h2>
            <p className="text-muted-foreground text-lg font-medium">
              Join thousands of developers building the future on AI Bloom.
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 container mx-auto px-4">
        <div className="glass p-8 md:p-16 rounded-[2.5rem] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border border-white/5">
          <div className="space-y-10">
            <h2 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter">
              Let's build <br />
              <span className="animate-gradient-text">the future.</span>
            </h2>
            <p className="text-xl text-muted-foreground/80 max-w-md font-medium leading-relaxed">
              Experience zero-latency deployment and enterprise-grade security. Our team is ready to scale with you.
            </p>
            <div className="space-y-5">
              {[
                "Instant department routing",
                "24/7 priority support",
                "Custom protocol engineering",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-bold text-sm uppercase tracking-widest">{item}</span>
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
      <footer className="py-20 border-t border-white/5 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-2">
              <Sparkles className="text-primary w-8 h-8" />
              <span className="text-2xl font-black tracking-tighter">BLOOM</span>
            </div>
            <div className="flex flex-wrap justify-center gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
              <Link href="#" className="hover:text-primary transition-colors">Network</Link>
              <Link href="#" className="hover:text-primary transition-colors">Twitter</Link>
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50">
              © {new Date().getFullYear()} AI BLOOM SYSTEM.
            </p>
          </div>
        </div>
      </footer>
      <Toaster />
    </main>
  )
}