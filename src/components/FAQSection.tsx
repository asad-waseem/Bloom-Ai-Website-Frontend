"use client"

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the Latency for real-time inference?",
    answer: "Our globally distributed Edge Compute nodes ensure sub-50ms latency for 99% of global requests. We use persistent connections and custom protocols optimized for AI data streams."
  },
  {
    question: "How do you handle data privacy and security?",
    answer: "AI Bloom is SOC2 Type II compliant. All data is encrypted at rest and in transit. We offer VPC peering and on-premise deployment options for enterprise customers who need strict data isolation."
  },
  {
    question: "Can I bring my own fine-tuned models?",
    answer: "Absolutely. You can import weights from HuggingFace or custom PyTorch/TensorFlow models directly into our Neural Engine. We support seamless model orchestration and A/B testing out of the box."
  },
  {
    question: "How does the AI routing work in the contact form?",
    answer: "Our intelligent routing uses a specialized NLP agent that analyzes the semantic intent of your message. It maps the context to your organization's internal departments, ensuring the right expert sees the message instantly."
  },
  {
    question: "What happens if I exceed my request limit?",
    answer: "We don't cut off your services. Instead, we move you to a fair-use metered billing tier where you only pay for what you use above your plan's cap."
  }
]

export const FAQSection: React.FC = () => {
  return (
    <section className="py-24 container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">FAQ</h2>
        <p className="text-muted-foreground text-sm">Everything you need to know about our infrastructure.</p>
      </div>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`} className="border border-white/5 glass rounded-2xl px-6">
            <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-6 group">
              <span className="group-hover:text-primary transition-colors">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm pb-6 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}