"use client"

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react'
import { chatGuide } from '@/ai/flows/chatbot-flow'
import { cn } from '@/lib/utils'

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Welcome to Bloom AI Labs. How can I assist your neural synthesis today?" }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

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
      setMessages(prev => [...prev, { role: 'ai', text: "The neural link is unstable. Please try again." }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-4">
      {isOpen && (
        <Card className="w-[350px] sm:w-[400px] h-[500px] flex flex-col glass-card border-primary/20 animate-in slide-in-from-bottom-5 duration-300">
          <CardHeader className="p-4 border-b border-white/5 bg-primary/5 flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <CardTitle className="text-sm font-black tracking-tight">BLOOMIE GUIDE</CardTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 rounded-full">
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="flex-grow p-4 overflow-y-auto space-y-4 scroll-smooth" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={cn(
                "flex flex-col max-w-[80%]",
                m.role === 'user' ? "ml-auto items-end" : "items-start"
              )}>
                <div className={cn(
                  "px-4 py-2 rounded-2xl text-xs font-medium leading-relaxed",
                  m.role === 'user' 
                    ? "bg-primary text-white rounded-tr-none" 
                    : "bg-secondary text-foreground rounded-tl-none border border-white/5"
                )}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="w-3 h-3 animate-spin text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Synthesizing...</span>
              </div>
            )}
          </CardContent>

          <div className="p-4 border-t border-white/5 bg-background/50 backdrop-blur-md">
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
              <Input 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Bloom..."
                className="bg-white/5 border-white/10 rounded-xl h-10 text-xs"
              />
              <Button type="submit" size="icon" className="rounded-xl h-10 w-10 bg-primary hover:bg-primary/90">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </Card>
      )}

      <Button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-2xl button-glow group"
      >
        <MessageCircle className={cn("w-6 h-6 transition-transform", isOpen ? "scale-0 absolute" : "scale-100")} />
        <X className={cn("w-6 h-6 transition-transform", !isOpen ? "scale-0 absolute" : "scale-100")} />
      </Button>
    </div>
  )
}
