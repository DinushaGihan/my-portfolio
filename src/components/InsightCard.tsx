"use client";
import { motion } from "framer-motion";
import { FiArrowRight, FiBookOpen } from "react-icons/fi";

interface InsightProps {
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
}

export default function InsightCard({ title, description, date, readTime, link }: InsightProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 10 }}
      className="group block p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-blue-500 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4 text-slate-400 text-xs font-semibold uppercase tracking-widest">
        <FiBookOpen className="text-blue-500" />
        <span>{date}</span>
        <span>•</span>
        <span>{readTime}</span>
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      
      <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
        {description}
      </p>

      <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
        Read Article <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
      </div>
    </motion.a>
  );
}