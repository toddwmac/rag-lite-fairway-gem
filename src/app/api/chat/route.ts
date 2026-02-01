import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';
import { getContext } from '@/lib/context';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    console.log('API: Received request');
    console.log('API: ANTHROPIC_API_KEY set:', !!process.env.ANTHROPIC_API_KEY);
    console.log('API: API_KEY prefix:', process.env.ANTHROPIC_API_KEY?.substring(0, 10) || 'NOT SET');

    const { messages, selectedFiles, customInstructions } = await req.json();
    console.log('API: Messages received:', messages?.length || 0);
    console.log('API: Selected files:', selectedFiles || 'All');

    // Input validation
    const MAX_INPUT_LENGTH = 10000;
    const MAX_MESSAGES = 100;

    if (!Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: 'Messages must be an array' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (messages.length > MAX_MESSAGES) {
      return new Response(
        JSON.stringify({ error: `Too many messages. Maximum: ${MAX_MESSAGES}` }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    for (const msg of messages) {
      if (typeof msg?.content !== 'string' || msg.content.length > MAX_INPUT_LENGTH) {
        return new Response(
          JSON.stringify({ error: `Message content too long. Maximum: ${MAX_INPUT_LENGTH} characters` }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    const context = await getContext(selectedFiles);
    
    // Construct the dynamic system prompt
    const baseIdentity = customInstructions || `You are the Private Fairway Support Assistant.`;
    
    const contextPrompt = context 
      ? `\n\nHIERARCHY OF TRUTH & CITATION RULES:
1. PRIMARY SOURCE: Check the provided Documents below first.
2. ANONYMOUS CITATION: NEVER mention specific filenames (e.g. "In trackman-sops.pdf" or "According to the troubleshooting guide").
   - BAD: "According to the Trackman Simulator SOP..."
   - GOOD: "According to the system procedures..." or simply state the fact directly.
3. EXTERNAL KNOWLEDGE FALLBACK: If the answer is NOT in the provided documents, you MUST explicitly state:
   "I am checking my general knowledge base for this answer as it is not in your specific guides." 
   Then provide the answer from your general training.
4. ZERO-HALLUCINATION POLICY: Never make up technical specs. If you don't know, say "I cannot locate that specific information."

Documents:\n${context}`
      : `\n\nYou have no specific documents in context. Answer from your general knowledge. You MUST explicitly state: "I am checking my general knowledge base for this answer."`;

    // Standardize formatting rules for the kiosk interface
    const formattingRules = `\n\nFORMATTING RULES:
- Use **Bold** for UI elements, buttons, and key terms.
- Use lists (bullet or numbered) for steps.
- Keep paragraphs short and readable.`;

    const systemPrompt = `${baseIdentity}${contextPrompt}${formattingRules}`;

    console.log('API: Calling streamText with model claude-3-haiku...');

    const result = streamText({
      model: anthropic('claude-3-haiku-20240307') as any,
      messages,
      system: systemPrompt,
    });

    console.log('API: streamText complete, returning stream...');
    return result.toDataStreamResponse();
  } catch (error: any) {
    console.error('API ERROR:', error);
    console.error('API ERROR stack:', error.stack);
    return new Response(
      JSON.stringify({
        error: error.message || 'Internal Server Error',
        details: error.stack
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
