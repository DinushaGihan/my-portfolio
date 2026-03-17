"use client";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image"; // Import Next.js Image component

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  demoLink: string;
  image: string; // New prop for the image path
}

export default function ProjectCard({ title, description, tags, githubLink, demoLink, image }: ProjectProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-7">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 text-sm mb-5 leading-relaxed line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 bg-blue-50 text-blue-600 rounded-lg">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-5 border-t border-slate-100 pt-5">
          <a href={githubLink} className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
            <FiGithub size={18} /> Code
          </a>
          <a href={demoLink} className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
            <FiExternalLink size={18} /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}