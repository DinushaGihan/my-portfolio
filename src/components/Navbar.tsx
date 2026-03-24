"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Expertise", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
  { name: "Insights", href: "#insights" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-4 bg-white/70 backdrop-blur-md shadow-sm border-b border-slate-200" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        
        <a href="#" className="font-stencil text-xl tracking-tighter text-slate-900">
          DG.
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Call to Action */}
        <a 
          href="#contact" 
          className="md:hidden p-2 px-4 bg-blue-600 text-white text-xs font-bold rounded-full"
        >
          Hire Me
        </a>
      </div>
    </motion.nav>
  );
}