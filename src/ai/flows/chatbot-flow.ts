'use server';
/**
 * @fileOverview AI Chatbot flow for AI Bloom guide.
 *
 * - chatGuide - A function that answers user queries about AI Bloom features and pricing.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ChatGuideInputSchema = z.object({
  message: z.string().describe('The user question.'),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    text: z.string()
  })).optional(),
});

const ChatGuideOutputSchema = z.object({
  response: z.string().describe('The AI response.'),
});

const chatGuidePrompt = ai.definePrompt({
  name: 'chatGuidePrompt',
  input: { schema: ChatGuideInputSchema },
  output: { schema: ChatGuideOutputSchema },
  system: `You are Bloomie, the official AI guide for Bloom AI Labs. 
  Your goal is to help users understand the platform.
  
  PLATFORM INFO:
  - Name: Bloom AI Labs (v2.0)
  - Core Tech: Neural Orchestration, Edge Compute, Semantic Search.
  - Pricing: Developer ($0), Pro ($79), Enterprise (Custom).
  - Performance: 12ms avg latency, 850k throughput.
  - Support: 24/7 technical support for Pro/Enterprise.
  
  HUMAN CONTACT:
  If the user wants to talk to a human, needs a custom quote, or has complex technical requirements, tell them they can connect directly with our Lead Engineer via the WhatsApp button in this chat window.
  
  Be helpful, professional, and slightly futuristic in your tone.`,
  prompt: 'User: {{{message}}}',
});

const chatGuideFlow = ai.defineFlow(
  {
    name: 'chatGuideFlow',
    inputSchema: ChatGuideInputSchema,
    outputSchema: ChatGuideOutputSchema,
  },
  async (input) => {
    const { output } = await chatGuidePrompt(input);
    return output!;
  }
);

export async function chatGuide(message: string): Promise<string> {
  const result = await chatGuideFlow({ message });
  return result.response;
}
