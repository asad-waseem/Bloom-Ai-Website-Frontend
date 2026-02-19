"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Loader2, Send, CheckCircle2 } from 'lucide-react'
import { intelligentContactRouting } from '@/ai/flows/intelligent-contact-routing-flow'
import { useToast } from '@/hooks/use-toast'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export const ContactFormSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [routingResult, setRoutingResult] = useState<string | null>(null)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setRoutingResult(null)
    try {
      const result = await intelligentContactRouting({ message: values.message })
      setRoutingResult(result.department)
      form.reset()
      toast({
        title: "Message Sent!",
        description: `Your message has been routed to our ${result.department} department.`,
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oops!",
        description: "Something went wrong. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-white/[0.02] border-white/5 shadow-2xl backdrop-blur-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-black">Contact Us</CardTitle>
        <CardDescription className="text-xs">Inquiry routing powered by AI Bloom v2.0</CardDescription>
      </CardHeader>
      <CardContent>
        {routingResult ? (
          <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
            <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Message Sent</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Routed to <strong>{routingResult}</strong>.
            </p>
            <Button variant="outline" className="rounded-full text-[10px] uppercase font-bold tracking-widest" onClick={() => setRoutingResult(null)}>New Message</Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] uppercase font-bold tracking-widest">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Full Name" {...field} className="bg-white/5 border-white/5 focus:border-primary/50 rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] uppercase font-bold tracking-widest">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email@address.com" {...field} className="bg-white/5 border-white/5 focus:border-primary/50 rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] uppercase font-bold tracking-widest">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Project details..." 
                        className="min-h-[120px] bg-white/5 border-white/5 focus:border-primary/50 resize-none rounded-xl" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-full group transition-all" disabled={isSubmitting}>
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  )
}