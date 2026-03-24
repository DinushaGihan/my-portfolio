"use client";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi"; 
import { FaWhatsapp } from "react-icons/fa";    

export default function Contact() {
  const contactLinks = [
    { 
      id: 1, 
      icon: <FaWhatsapp size={24} />, 
      label: "WhatsApp", 
      href: "https://wa.me/94776070471", 
      color: "hover:text-green-400"
    },
    { 
      id: 2, 
      icon: <FiPhone size={24} />, 
      label: "Call Me", 
      href: "tel:+94776070471", 
      color: "hover:text-yellow-400"
    },
    { 
      id: 3, 
      icon: <FiMail size={24} />, 
      label: "Email", 
      href: "mailto:dinushagihan644@gmail.com", 
      color: "hover:text-blue-300"
    },
    { 
      id: 4, 
      icon: <FiLinkedin size={24} />, 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/gihan-dasanayaka-085842232", 
      color: "hover:text-blue-300"
    },
    { 
      id: 5, 
      icon: <FiGithub size={24} />, 
      label: "GitHub", 
      href: "https://github.com/DinushaGihan", 
      color: "hover:text-blue-300"
    },
  ];

  return (
    <section id="contact" className="py-20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-slate-900 rounded-[3rem] p-12 text-center text-white shadow-2xl"
      >
        <h2 className="text-4xl font-extrabold mb-4">Let&apos;s connect.</h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          I&apos;m currently open to new opportunities and collaborations. Reach out via any of the channels below!
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {contactLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`flex flex-col items-center gap-3 transition-colors ${link.color}`}
            >
              <div className="p-5 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10 shadow-xl">
                {link.icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                {link.label}
              </span>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-slate-600 text-sm">
          <p>© 2026 Dinusha Gihan. All rights reserved.</p>
        </div>
      </motion.div>
    </section>
  );
}