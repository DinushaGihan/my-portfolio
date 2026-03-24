"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const roles = ["Software Engineer", "Mobile Developer", "Web Developer"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      <div className="overflow-hidden h-14 mb-4"> {/* overflow-hidden keeps the slide contained */}
        <AnimatePresence mode="wait">
          <motion.div
            key={roles[index]}
            initial={{ y: 40, opacity: 0 }}   // Starts below and invisible
            animate={{ y: 0, opacity: 1 }}    // Slides up to center
            exit={{ y: -40, opacity: 0 }}     // Slides up and out
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-4xl font-bold text-blue-600"
          >
            {roles[index]}
          </motion.div>
        </AnimatePresence>
      </div>

      <h1 className="text-5xl font-extrabold text-slate-800 mb-8 font-stencil tracking-tight">
        Meet DINUSHA GIHAN
      </h1>
      
      <p className="max-w-2xl text-lg text-slate-600 leading-relaxed">
        A passionate and driven <strong>Software Engineer</strong> with an Honors degree in 
        <strong> Information Technology</strong> from the <strong>University of Moratuwa </strong>
        with industrial experience in Full stack software development. I&apos;m capable of learning and adapting to new technologies quickly.
      </p>
    </section>
  );
}


