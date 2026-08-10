
import { tool } from "ai";
import { z } from "zod";


export const getProjects = tool({
  description:
    'Returns Uttam Kumar Sirmour\'s two portfolio projects.',
  parameters: z.any().nullable().optional(),
  execute: async () => {
    return 'Uttam currently has two projects: CodeLens AI, an AI-powered code reviewer, and AI Interview Report Generator, a full-stack AI reporting application.';
  },
});
