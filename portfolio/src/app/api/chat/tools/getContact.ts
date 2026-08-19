import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description: 'Returns Uttam Kumar Sirmour\'s contact details.',
  parameters: z.any().nullable().optional(),
  execute: async () =>
    'Email: soniuttamkumar747@gmail.com. Phone: 7974010596. GitHub: https://github.com/Uttam7898. LinkedIn: https://www.linkedin.com/in/uttam-kumar-sirmour-5aa93a298.',
});
