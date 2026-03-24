import Hero from "@/components/Hero";
import StackCard from "@/components/StackCard";
import ProjectCard from "@/components/ProjectCard"; 
import { SiHtml5, SiCss, SiTailwindcss, SiReact, SiNextdotjs, SiJavascript, SiExpress, SiDocker } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import InsightCard from "@/components/InsightCard";
import Contact from "@/components/Contact";
import AnimatedHeading from "@/components/AnimatedHeading";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. Who I Am Section */}
      <Hero />

      <div className="max-w-6xl mx-auto px-6 pb-20 space-y-32">
        
        {/* 2. Tech Stack Section */}
        <section id="tech-stack">
          <div className="text-center mb-12">
            <div className="text-center mb-12">
            <AnimatedHeading>Technical Expertise</AnimatedHeading>
            <p className="text-slate-500 mt-2">Specialized in modern web technologies and decentralized systems.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StackCard 
              title="Frontend"
              summary="Crafting seamless user experiences through code and creativity."
              techList={[
                { name: "HTML", Icon: SiHtml5 },
                { name: "CSS", Icon: SiCss },
                { name: "Tailwind", Icon: SiTailwindcss },
                { name: "React", Icon: SiReact },
                { name: "Next.js", Icon: SiNextdotjs }
              ]}
            />
            <StackCard 
              title="Backend"
              summary="Building the Engine, Empowering Websites with Robust Functionality."
              techList={[
                { name: "JavaScript", Icon: SiJavascript },
                { name: "Express", Icon: SiExpress },
                { name: "Java", Icon: FaJava }
              ]}
            />
            <StackCard 
              title="Cloud & DevOps"
              summary="Deploying, Scaling, and Managing Applications with Modern Infrastructure."
              techList={[
                { name: "Docker", Icon: SiDocker }
              ]}
            />
          </div>
        </section>

        {/* 3. My Projects Section */}
        <section id="projects">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-center mb-12">
              <AnimatedHeading>Featured Projects</AnimatedHeading>
              </div>
              <p className="text-slate-500 mt-2">A selection of my recent software engineering works.</p>
            </div>
            <div className="h-[1px] flex-grow bg-slate-200 mx-8 hidden md:block mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1: AquaTrace */}
            <ProjectCard 
              title="AquaTrace: Blockchain Supply Chain"
              description="A decentralized traceability system using Hyperledger Fabric. Implements smart contracts to ensure data integrity and transparency in seafood logistics."
              tags={["Hyperledger", "Node.js", "Blockchain", "Smart Contracts"]}
              githubLink="https://github.com/Group-Synthron/Module-02.git" 
              demoLink="https://www.linkedin.com/posts/gihan-dasanayaka-085842232_traditional-supply-chains-and-their-activity-7383452265795371008-qGHB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADolEeUBdzPSVzldyozi8yY37_yjnW0NqHc" 
              image={"/projects/blockchain.jpg"}            
            />
            
            {/* Project 2: MedConnect */}
            <ProjectCard 
              title="MedConnect: Healthcare Suite"
              description="A Flutter-based mobile app featuring a secure SOS system, real-time appointment booking, and role-based interfaces for patients and doctors."
              tags={["Flutter", "Dart", "REST API", "Dio"]}
              githubLink="https://github.com/DinushaGihan/iedu.git" 
              demoLink="https://www.linkedin.com/in/gihan-dasanayaka-085842232/"
              image="/projects/sos_2.jpg" 
            />
          </div>
        </section>

        <section id="insights">
          <div className="mb-12">
            <div className="text-center mb-12">
            <AnimatedHeading>My Insights</AnimatedHeading>
            </div>
            <p className="text-slate-500 mt-2">Sharing my thoughts on technology, research, and engineering.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InsightCard 
              title="Bioinformatics for Beginners"
              description="Bioinformatics is a fascinating field that blends biology, computer science, and mathematics to analyze and interpret the explosion of data produced by genomic sequencing."
              date="July 2023" 
              readTime="3 min read"
              link="https://medium.com/@dinushagihan644/bioinformatics-for-beginners-610f2da4095a" 
            />
            
            {/* Placeholder for future articles */}
            <div className="border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center p-8">
              <p className="text-slate-400 italic text-sm text-center">
                New article coming soon: &quot;Scalable Infrastructure with Docker&quot;
              </p>
            </div>
          </div>
        </section>

        <Contact />

      </div>
    </main>
  );
}