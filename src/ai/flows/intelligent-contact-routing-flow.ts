'use server';
/**
 * @fileOverview An AI agent for intelligent contact form message routing.
 *
 * - intelligentContactRouting - A function that analyzes a contact message and routes it to the appropriate department.
 * - IntelligentContactRoutingInput - The input type for the intelligentContactRouting function.
 * - IntelligentContactRoutingOutput - The return type for the intelligentContactRouting function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const IntelligentContactRoutingInputSchema = z.object({
  message: z.string().describe('The content of the contact form message.'),
});
export type IntelligentContactRoutingInput = z.infer<typeof IntelligentContactRoutingInputSchema>;

const IntelligentContactRoutingOutputSchema = z.object({
  department: z.enum(['Sales', 'Support', 'Technical', 'Billing', 'General Inquiry', 'Unknown']).describe('The department the message should be routed to.'),
});
export type IntelligentContactRoutingOutput = z.infer<typeof IntelligentContactRoutingOutputSchema>;

const identifyDepartmentTool = ai.defineTool(
  {
    name: 'identifyDepartment',
    description: 'Identifies the most appropriate department for a given contact form message based on keywords and context.',
    inputSchema: z.object({
      message: z.string().describe('The content of the contact form message.'),
    }),
    outputSchema: z.object({
      department: z.enum(['Sales', 'Support', 'Technical', 'Billing', 'General Inquiry', 'Unknown']).describe('The identified department.'),
    }),
  },
  async (input) => {
    const lowerCaseMessage = input.message.toLowerCase();
    if (lowerCaseMessage.includes('sales') || lowerCaseMessage.includes('pricing') || lowerCaseMessage.includes('quote')) {
      return { department: 'Sales' };
    } else if (lowerCaseMessage.includes('support') || lowerCaseMessage.includes('help') || lowerCaseMessage.includes('issue') || lowerCaseMessage.includes('problem')) {
      return { department: 'Support' };
    } else if (lowerCaseMessage.includes('technical') || lowerCaseMessage.includes('bug') || lowerCaseMessage.includes('development') || lowerCaseMessage.includes('api')) {
      return { department: 'Technical' };
    } else if (lowerCaseMessage.includes('bill') || lowerCaseMessage.includes('invoice') || lowerCaseMessage.includes('payment') || lowerCaseMessage.includes('subscription')) {
      return { department: 'Billing' };
    } else if (lowerCaseMessage.includes('general inquiry') || lowerCaseMessage.includes('other') || lowerCaseMessage.includes('feedback')) {
      return { department: 'General Inquiry' };
    }
    return { department: 'Unknown' };
  }
);

const intelligentContactRoutingPrompt = ai.definePrompt({
  name: 'intelligentContactRoutingPrompt',
  input: { schema: IntelligentContactRoutingInputSchema },
  output: { schema: IntelligentContactRoutingOutputSchema },
  tools: [identifyDepartmentTool],
  system: 'You are an AI assistant for a company. Your task is to analyze contact form messages and identify the most appropriate department to route them to. Use the available tool `identifyDepartment` to determine the department. Your final output must be solely the department name, as specified by the output schema.',
  prompt: 'Message: {{{message}}}',
});

const intelligentContactRoutingFlow = ai.defineFlow(
  {
    name: 'intelligentContactRoutingFlow',
    inputSchema: IntelligentContactRoutingInputSchema,
    outputSchema: IntelligentContactRoutingOutputSchema,
  },
  async (input) => {
    const { output } = await intelligentContactRoutingPrompt(input);
    return output!;
  }
);

export async function intelligentContactRouting(input: IntelligentContactRoutingInput): Promise<IntelligentContactRoutingOutput> {
  return intelligentContactRoutingFlow(input);
}
