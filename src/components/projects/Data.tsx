import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const PROJECT_CONTENT = [
  {
    title: 'CodeLens AI',
    description:
      'An AI-powered code reviewer that turns submitted code into structured, readable feedback. I designed the prompts, built the React and Node.js application, and independently solved routing, CORS, and API integration issues.',
    techStack: ['React', 'Node.js', 'Vite', 'Python', 'Groq API', 'Llama 3.3'],
    date: '2025',
    links: [{ name: 'GitHub', url: 'https://github.com/Uttam7898/ai-code-reviewer' }],
  },
  {
    title: 'AI Interview Report Generator',
    description:
      'A full-stack application that generates structured AI interview reports. It includes JWT authentication, file uploads, PDF generation, and few-shot prompting, with deployment through Vercel CI/CD and AWS.',
    techStack: ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'JWT', 'Puppeteer', 'Multer', 'Groq API', 'Llama 3.3'],
    date: '2025',
    links: [],
  },
];

type Project = (typeof PROJECT_CONTENT)[number];

const ProjectContent = ({ project }: { project: Project }) => (
  <div className="space-y-10">
    <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
      <div className="space-y-6">
        <div className="text-sm text-neutral-500 dark:text-neutral-400">{project.date}</div>
        <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">{project.description}</p>
        <div className="pt-4">
          <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => <span key={tech} className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">{tech}</span>)}
          </div>
        </div>
      </div>
    </div>
    {project.links.length > 0 && (
      <div className="mb-24">
        <div className="mb-4 flex items-center gap-2 px-6"><h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">Links</h3><Link className="text-muted-foreground w-4" /></div>
        <Separator className="my-4" />
        <div className="space-y-3">
          {project.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-xl bg-[#F5F5F7] p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"><span className="font-light capitalize">{link.name}</span><ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>)}
        </div>
      </div>
    )}
  </div>
);

export const data = PROJECT_CONTENT.map((project) => ({
  category: 'AI Application',
  title: project.title,
  src: project.title === 'CodeLens AI' ? '/codelens-preview.png' : '/interview-report-preview.png',
  content: <ProjectContent project={project} />,
}));
