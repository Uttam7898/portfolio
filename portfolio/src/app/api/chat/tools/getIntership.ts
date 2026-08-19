import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description: 'Summarises Uttam Kumar Sirmour\'s work experience and career profile.',
  parameters: z.any().nullable().optional(),
  execute: async () => `Uttam Kumar Sirmour is a final-year B.Tech student graduating in 2026 and a full-stack developer with two remote internships. At Unlox (2024), he contributed to React and Node.js development, code reviews, GitHub Actions CI/CD, and AWS S3/EC2 deployment. At Yugayatra RetailOPC Pvt. Ltd. (2024), he worked on a 10-minute food-delivery app with Python, Node.js, React, PostgreSQL, and MySQL, including LLM-powered menu recommendations and AWS deployment. Contact: soniuttamkumar747@gmail.com.`,
});
