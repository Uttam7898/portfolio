import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'Returns a concise personal introduction of Uttam Kumar Sirmour.',
  parameters: z.any().nullable().optional(),
  execute: async () => {
    return {
      presentation:
        "I'm Uttam Kumar Sirmour, a final-year B.Tech student and full-stack developer. I build AI-powered web applications with React, Node.js, Python, databases, cloud deployment, and Groq LLMs.",
    };
  },
});
