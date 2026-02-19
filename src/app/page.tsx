import { Navbar } from '@/components/Navbar'
import { CapabilityCards } from '@/components/CapabilityCards'
import { TestimonialsCarousel } from '@/components/TestimonialsCarousel'
import { ContactFormSection } from '@/components/ContactFormSection'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronRight, CheckCircle2, Sparkles, Zap, Shield, Globe } from 'lucide-react'
import { Toaster } from '@/components/ui/toaster'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative min-h-screen mesh-gradient overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-52 md:pb-32 flex flex-col items-center text-center">
        <div className="absolute top-0 left-0 w-full h-full hero-glow pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/5 text-[10px] font-bold uppercase tracking-widest text-primary mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            v2.0 is now live
            <ChevronRight className="w-3 h-3 ml-1" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Building the <br />
            <span className="animate-gradient-text">Intelligent Edge.</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground/80 mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
            Automate complexity with high-performance AI agents. Scale your engineering team without scaling your headcount.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-sm h-14 px-8 rounded-full group font-bold button-glow transition-all">
              Get Started Free
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="glass text-sm h-14 px-8 rounded-full font-bold border-white/10 hover:bg-white/5">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="w-5 h-5" />, title: "Real-time Processing", desc: "Process millions of events with sub-ms latency." },
              { icon: <Shield className="w-5 h-5" />, title: "Enterprise Security", desc: "Military-grade encryption and SOC2 compliance." },
              { icon: <Globe className="w-5 h-5" />, title: "Global Mesh", desc: "Deploy agents across 50+ regions worldwide." },
            ].map((feature, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Capabilities */}
      <section id="capabilities" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Core Infrastructure</h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
              Everything you need to build, deploy, and monitor production AI agents.
            </p>
          </div>
          <CapabilityCards />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Requests/sec", value: "500k+" },
              { label: "Uptime", value: "99.99%" },
              { label: "Latency", value: "24ms" },
              { label: "Countries", value: "180+" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-black text-foreground mb-1">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Trusted by Builders</h2>
            <p className="text-muted-foreground text-sm">Join the next generation of AI-first companies.</p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 container mx-auto px-4">
        <div className="glass p-8 md:p-16 rounded-[2rem] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border border-white/5 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32" />
          <div className="space-y-8 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
              Scale your <br />
              <span className="text-primary">Intelligence.</span>
            </h2>
            <p className="text-lg text-muted-foreground/80 max-w-md font-medium">
              Start building today or talk to our engineers about custom deployments.
            </p>
            <div className="space-y-4">
              {[
                "Zero-latency message routing",
                "Automated agent orchestration",
                "Custom LLM fine-tuning",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-bold text-xs uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10">
            <ContactFormSection />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="text-primary w-6 h-6" />
            <span className="text-xl font-black tracking-tight">BLOOM</span>
          </div>
          <div className="flex justify-center gap-8 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-8">
            <Link href="#" className="hover:text-primary transition-colors">Documentation</Link>
            <Link href="#" className="hover:text-primary transition-colors">API Status</Link>
            <Link href="#" className="hover:text-primary transition-colors">Twitter</Link>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/30">
            © {new Date().getFullYear()} BLOOM AI. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
      <Toaster />
    </main>
  )
}