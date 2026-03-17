import Hero from "@/components/Hero";
import StackCard from "@/components/StackCard";
import ProjectCard from "@/components/ProjectCard"; // Make sure this is created!
import { SiHtml5, SiCss, SiTailwindcss, SiReact, SiNextdotjs, SiJavascript, SiExpress, SiDocker } from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. Who I Am Section */}
      <Hero />

      <div className="max-w-6xl mx-auto px-6 pb-20 space-y-32">
        
        {/* 2. Tech Stack Section */}
        <section id="tech-stack">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Technical Expertise</h2>
            <p className="text-slate-500 mt-2">Specialized in modern web technologies and decentralized systems.</p>
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
              <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
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
              githubLink="https://github.com/DinushaGihan/aqua-trace" // Replace with actual link
              demoLink="#" image={""}            />
            
            {/* We can add placeholders for Project 2 and 3 here */}
          </div>
        </section>

      </div>
    </main>
  );
}