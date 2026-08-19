'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Presentation() {
  const profile = {
    name: 'UTTAM KUMAR SIRMOUR',
    subtitle: 'Final-year B.Tech student',
    location: 'Bangalore, India',
    description:
      "Hey! I'm Uttam Kumar, a full-stack developer who builds practical AI-powered web applications. I work with React, Node.js, Python, databases, cloud deployment, and Groq LLMs.",
    src: '/uttam-avatar.png',
  };

  return (
    <div className="mx-auto w-full max-w-5xl py-6 font-sans">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl">
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="h-full w-full"
          >
            <Image src={profile.src} alt={profile.name} width={500} height={500} className="h-full w-full object-cover object-center" priority />
          </motion.div>
        </div>
        <div className="flex flex-col">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="from-foreground to-muted-foreground bg-gradient-to-r bg-clip-text text-xl font-semibold text-transparent md:text-3xl">{profile.name}</h1>
            <div className="mt-1 flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
              <p className="text-muted-foreground">{profile.subtitle}</p>
              <div className="bg-border hidden h-1.5 w-1.5 rounded-full md:block" />
              <p className="text-muted-foreground">{profile.location}</p>
            </div>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-foreground mt-6 leading-relaxed">{profile.description}</motion.p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Full-Stack Developer', 'React', 'Node.js', 'Python', 'Groq AI'].map((tag) => <span key={tag} className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">{tag}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
