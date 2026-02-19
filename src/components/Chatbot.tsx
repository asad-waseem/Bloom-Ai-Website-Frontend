"use client"

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { MessageCircle, X, Send, Loader2, Sparkles, PhoneCall } from 'lucide-react'
import { chatGuide } from '@/ai/flows/chatbot-flow'
import { cn } from '@/lib/utils'

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Welcome to Bloom AI Labs. I'm Bloomie, your neural guide. How can I assist your synthesis today?" }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const WHATSAPP_NUMBER = "923122943462" // International format for 03122943462

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isLoading])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return
    
    const userMsg = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: userMsg }])
    setIsLoading(true)

    try {
      const response = await chatGuide(userMsg)
      setMessages(prev => [...prev, { role: 'ai', text: response }])
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "The neural link is unstable. Please try connecting via WhatsApp for live support." }])
    } finally {
      setIsLoading(false)
    }
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi Bloom Labs, I'm interested in your AI services. Can we chat?")
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-4 pointer-events-none">
      {isOpen && (
        <Card className="w-[calc(100vw-3rem)] sm:w-[400px] h-[500px] sm:h-[600px] flex flex-col glass-card border-primary/20 animate-in slide-in-from-bottom-5 duration-300 pointer-events-auto shadow-2xl overflow-hidden">
          <CardHeader className="p-4 border-b border-white/5 bg-primary/10 flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <CardTitle className="text-xs font-black tracking-tighter uppercase">Bloomie Guide</CardTitle>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Neural Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={openWhatsApp} 
                className="h-9 w-9 rounded-full hover:bg-emerald-500/10 hover:text-emerald-500"
                title="Live Chat on WhatsApp"
              >
                <PhoneCall className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-9 w-9 rounded-full">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="flex-grow p-4 overflow-y-auto space-y-4 scroll-smooth bg-background/30" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={cn(
                "flex flex-col max-w-[85%]",
                m.role === 'user' ? "ml-auto items-end" : "items-start"
              )}>
                <div className={cn(
                  "px-4 py-3 rounded-2xl text-[11px] font-medium leading-relaxed shadow-sm",
                  m.role === 'user' 
                    ? "bg-primary text-white rounded-tr-none" 
                    : "bg-secondary text-foreground rounded-tl-none border border-white/5 glass"
                )}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-muted-foreground bg-white/5 p-2 rounded-xl w-fit">
                <Loader2 className="w-3 h-3 animate-spin text-primary" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em]">Synthesizing response...</span>
              </div>
            )}
          </CardContent>

          <div className="p-4 border-t border-white/5 bg-background/80 backdrop-blur-xl">
            <div className="flex flex-col gap-3">
              <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
                <Input 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about AI Bloom..."
                  className="bg-white/5 border-white/10 rounded-xl h-11 text-xs focus:ring-primary/30"
                />
                <Button type="submit" size="icon" className="rounded-xl h-11 w-11 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
              <Button 
                variant="outline" 
                className="w-full rounded-xl h-10 border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500 hover:text-white transition-all text-[10px] font-black uppercase tracking-widest gap-2"
                onClick={openWhatsApp}
              >
                <PhoneCall className="w-3.5 h-3.5" />
                Live Expert (WhatsApp)
              </Button>
            </div>
          </div>
        </Card>
      )}

      <Button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 text-white shadow-2xl button-glow group pointer-events-auto"
      >
        <div className="relative">
          <MessageCircle className={cn("w-7 h-7 transition-all duration-500", isOpen ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100")} />
          <X className={cn("w-7 h-7 absolute inset-0 transition-all duration-500", !isOpen ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100")} />
        </div>
      </Button>
    </div>
  )
}
