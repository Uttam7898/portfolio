'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export function Resume() {
  const resumeDetails = {
    title: "Uttam Kumar's Resume",
    description: 'Full-Stack Developer - AI and Cloud',
    fileType: 'PDF',
    lastUpdated: '2026',
    fileSize: 'Resume PDF',
    downloadUrl: '/uttam-kumar-sirmour-resume.pdf',
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeDetails.downloadUrl;
    link.download = 'Uttam_Kumar_Sirmour_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mx-auto w-full py-8 font-sans">
      <motion.div onClick={handleDownload} className="group relative cursor-pointer overflow-hidden rounded-xl bg-accent p-5 transition-all duration-300" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.01 }}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-foreground">{resumeDetails.title}</h3>
            <p className="text-sm text-muted-foreground">{resumeDetails.description}</p>
            <div className="mt-1 flex text-xs text-muted-foreground"><span>{resumeDetails.fileType}</span><span className="mx-2">-</span><span>Updated {resumeDetails.lastUpdated}</span><span className="mx-2">-</span><span>{resumeDetails.fileSize}</span></div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-primary-foreground group-hover:bg-black/80"><Download className="h-5 w-5" /></div>
        </div>
      </motion.div>
    </div>
  );
}

export default Resume;
