"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, ArrowRight, Github, Twitter } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Logo } from './Navbar'
import { useToast } from '@/hooks/use-toast'

export const MobileNav: React.FC = () => {
  const [open, setOpen] = useState(false)
  const { toast } = useToast()

  const navLinks = [
    { name: 'Features', href: '#capabilities' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Success', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleAction = (action: string) => {
    setOpen(false)
    toast({
      title: "Mobile Action Triggered",
      description: `Initializing ${action} flow for mobile devices.`,
    })
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden glass rounded-full h-10 w-10">
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-xs bg-background/95 backdrop-blur-2xl border-white/5 p-0 flex flex-col">
        <SheetHeader className="p-6 border-b border-white/5">
          <SheetTitle className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
              <Logo className="w-6 h-6" />
            </div>
            <span className="text-lg font-black tracking-tighter">BLOOM</span>
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex-grow flex flex-col p-6 space-y-6">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setOpen(false)}
                className="text-2xl font-bold hover:text-primary transition-colors py-2 flex items-center justify-between group"
              >
                {link.name}
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
              </Link>
            ))}
          </nav>
          
          <div className="pt-8 space-y-4">
            <Button 
              onClick={() => handleAction('Free Registration')}
              className="w-full bg-primary hover:bg-primary/90 rounded-xl h-14 text-sm font-bold button-glow"
            >
              Get Started Free
            </Button>
            <Button 
              variant="outline" 
              onClick={() => handleAction('Client Portal')}
              className="w-full glass rounded-xl h-14 text-sm font-bold border-white/10"
            >
              Client Portal
            </Button>
          </div>
        </div>

        <div className="p-6 border-t border-white/5 flex items-center justify-between text-muted-foreground">
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><Github className="w-5 h-5" /></Link>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">v2.0 PRO</span>
        </div>
      </SheetContent>
    </Sheet>
  )
}
