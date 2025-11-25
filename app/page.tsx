"use client";
import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight, Mail, Rocket, Terminal, Layers, Globe, Building2, Briefcase } from 'lucide-react';

export default function Portfolio() {
  
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">FAZZA<span className="text-gray-500">.DEV</span></h1>
          <div className="flex gap-6 items-center">
            <div className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
               <a href="#projects" className="hover:text-white transition-colors">Ventures</a>
               <a href="#experience" className="hover:text-white transition-colors">Experience</a>
               <a href="#about" className="hover:text-white transition-colors">About</a>
            </div>
            <a href="mailto:darksoftwareguy84@gmail.com" className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-all flex items-center gap-2">
              <Mail className="w-4 h-4" /> Get in touch
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        
        {/* Hero Section */}
        <section className="mb-24 relative">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/20 border border-green-900/50 text-green-400 text-xs font-medium mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for YC Winter 2026
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-1">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
                Fullstack Architect <br /> 
                <span className="text-gray-500">& Automation Engineer.</span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-2xl mb-10">
                I build vertical SaaS platforms and automation infrastructure. <br/>
                Currently scaling <span className="text-white font-semibold underline decoration-white/20 underline-offset-4">PromptVault</span> — the marketplace for the AI economy.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/unrealGuy2" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-[#111] border border-white/10 rounded-lg hover:bg-[#222] transition-all group">
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/abdulsalaam-sulaiman-46a5b7394" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-[#111] border border-white/10 rounded-lg hover:bg-[#222] transition-all group">
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* DUAL PROFILE PIC STACK (UPDATED ANIMATION) */}
            <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 group cursor-pointer z-0">
               
               {/* Pic 2 (Behind - Moves FAR Right on Hover) */}
               <div className="absolute inset-0 rounded-full border-2 border-white/10 overflow-hidden transform translate-x-2 translate-y-2 group-hover:translate-x-24 group-hover:rotate-12 transition-all duration-500 ease-out z-0">
                 <Image src="/images/profilepic2.jpg" alt="Fazza Alt" fill className="object-cover" />
                 {/* Dark overlay that vanishes on hover */}
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
               </div>

               {/* Pic 1 (Front - Moves Left on Hover) */}
               <div className="absolute inset-0 rounded-full border-2 border-white/10 overflow-hidden z-20 bg-[#0A0A0A] transform group-hover:-translate-x-12 transition-all duration-500 ease-out shadow-2xl">
                 <Image src="/images/profilepic1.jpg" alt="Fazza Main" fill className="object-cover" />
               </div>

               {/* Decorative Glow */}
               <div className="absolute -inset-10 bg-green-500/20 rounded-full blur-2xl -z-10 opacity-40 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </section>

        {/* Marquee Skills */}
        <div className="w-full overflow-hidden border-y border-white/5 bg-[#050505] py-6 mb-32 relative">
           <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10"></div>
           <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10"></div>
           
           <div className="flex animate-scroll whitespace-nowrap gap-12 text-gray-500 font-medium text-sm uppercase tracking-widest">
             {[
               "Next.js 14", "Python", "FastAPI", "Docker", "Selenium", "n8n Automation", "TypeScript", "Tailwind", "Supabase", "PostgreSQL",
               "Next.js 14", "Python", "FastAPI", "Docker", "Selenium", "n8n Automation", "TypeScript", "Tailwind", "Supabase", "PostgreSQL"
             ].map((skill, i) => (
               <span key={i} className="flex items-center gap-2">
                 <span className="w-1 h-1 bg-gray-700 rounded-full"></span> {skill}
               </span>
             ))}
           </div>
        </div>

        {/* Projects Grid */}
        <section id="projects" className="mb-32">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Selected Works</h2>
              <p className="text-gray-400">Engineering logs & deployed products.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Project 1: PromptVault */}
            <div className="md:col-span-2 group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden min-h-[450px]">
              <div className="absolute inset-0 z-0">
                 <Image src="/images/promptvault1.png" alt="PromptVault Dashboard" fill className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"/>
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              </div>
              <div className="absolute top-6 right-6 z-20">
                <div className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold rounded-full">Coming Soon</div>
              </div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-3"><span className="px-3 py-1 bg-green-500 text-black text-xs font-bold rounded-full uppercase tracking-wider">YC Pitch</span></div>
                  <h3 className="text-3xl font-bold mb-3">PromptVault</h3>
                  <p className="text-gray-300 text-lg mb-6 max-w-md">A secure marketplace infrastructure for Prompt Engineers to monetize IP. Built with Python & Next.js.</p>
                  <div className="flex flex-wrap gap-2">
                     <span className="text-xs text-white bg-white/10 backdrop-blur-md px-2 py-1 rounded border border-white/10">Next.js</span>
                     <span className="text-xs text-white bg-white/10 backdrop-blur-md px-2 py-1 rounded border border-white/10">Python</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: Zeeluxe */}
            <a href="https://zeeluxe-store.vercel.app/" target="_blank" className="md:col-span-1 group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden min-h-[450px] block hover:border-white/20 transition-all cursor-pointer">
              <div className="absolute inset-0 z-0">
                 <Image src="/images/zeeluxe.jpg" alt="Zeeluxe Store" fill className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"/>
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
              </div>
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="mb-auto">
                   <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-6 border border-blue-500/30"><Globe className="w-6 h-6 text-blue-400" /></div>
                   <h3 className="text-xl font-bold mb-2">Zeeluxe Styles</h3>
                   <p className="text-gray-400 text-sm leading-relaxed">Headless e-commerce engine. 10x faster loads using edge caching.</p>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center">
                    <span className="text-xs text-gray-500">E-COMMERCE</span>
                    <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                </div>
              </div>
            </a>

            {/* Project 3: H.F Automations */}
            <a href="https://hf-automations.vercel.app" target="_blank" className="md:col-span-1 group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden min-h-[350px] block hover:border-white/20 transition-all cursor-pointer">
               <div className="absolute inset-0 z-0">
                 <Image src="/images/hfautomations.jpg" alt="H.F Automations Website" fill className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"/>
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
              </div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                 <div className="w-10 h-10 bg-purple-500/20 backdrop-blur-md rounded flex items-center justify-center mb-4">
                    <Building2 className="w-5 h-5 text-purple-400" />
                 </div>
                 <h3 className="text-xl font-bold mb-2">H.F Automations</h3>
                 <p className="text-gray-400 text-sm mb-4">My official agency website showcasing corporate automation solutions.</p>
                 <div className="flex gap-2 text-xs text-gray-500">
                    <span>#Agency</span><span>#Next.js</span>
                    <span className="ml-auto block md:hidden"><ArrowUpRight className="w-4 h-4 inline" /></span>
                 </div>
              </div>
            </a>

            {/* Project 4: GeoLearn */}
            <a href="https://geolearn-frontend.vercel.app" target="_blank" className="md:col-span-1 group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden min-h-[350px] block hover:border-white/20 transition-all cursor-pointer">
              <div className="absolute inset-0 z-0">
                 <Image src="/images/geolearn.jpg" alt="GeoLearn App" fill className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"/>
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
              </div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                 <div className="w-10 h-10 bg-green-500/20 backdrop-blur-md rounded flex items-center justify-center mb-4">
                    <Layers className="w-5 h-5 text-green-400" />
                 </div>
                 <h3 className="text-xl font-bold mb-2">GeoLearn</h3>
                 <p className="text-gray-400 text-sm mb-4">Departmental resource hub.</p>
                 <div className="flex gap-2 text-xs text-gray-500">
                    <span>#EdTech</span><span>#FastAPI</span>
                    <span className="ml-auto block md:hidden"><ArrowUpRight className="w-4 h-4 inline" /></span>
                 </div>
              </div>
            </a>

            {/* Project 5: Automation Scripts */}
            <a href="https://github.com/unrealGuy2" target="_blank" className="md:col-span-1 group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:bg-[#151515] transition-all min-h-[350px] block cursor-pointer">
               <div className="p-8 h-full flex flex-col justify-end">
                 <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                   <Terminal className="w-5 h-5 text-yellow-500" /> Bots & Scripts
                 </h3>
                 <p className="text-gray-400 text-sm mb-4">
                   Custom n8n workflows and Selenium bots for process automation.
                 </p>
                 <div className="flex gap-2 flex-wrap">
                   <div className="px-2 py-1 bg-yellow-900/20 text-yellow-500 text-xs rounded border border-yellow-900/30">Docker</div>
                   <div className="px-2 py-1 bg-yellow-900/20 text-yellow-500 text-xs rounded border border-yellow-900/30">Selenium</div>
                 </div>
               </div>
            </a>

          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section id="experience" className="mb-32">
          <div className="flex items-center gap-2 mb-10">
            <Briefcase className="w-6 h-6 text-green-500" />
            <h2 className="text-2xl font-bold">Work Experience</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-white/5 bg-[#111] rounded-2xl hover:border-white/10 transition-all">
               <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">H.F Automations</h3>
                    <p className="text-gray-500 text-xs">Sep 2025 - Present</p>
                  </div>
                  <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded border border-purple-500/20">Founder</span>
               </div>
               <p className="text-gray-400 text-sm">Lead Engineer. Building custom automation solutions for corporate clients.</p>
            </div>

            <div className="p-6 border border-white/5 bg-[#111] rounded-2xl hover:border-white/10 transition-all">
               <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">Yarnhub</h3>
                    <p className="text-gray-500 text-xs">Aug 2025 - Present</p>
                  </div>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded border border-blue-500/20">Contract</span>
               </div>
               <p className="text-gray-400 text-sm">Automation Engineer. Designing n8n workflows for community management systems.</p>
            </div>

            <div className="p-6 border border-white/5 bg-[#111] rounded-2xl hover:border-white/10 transition-all">
               <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">Envaire OY</h3>
                    <p className="text-gray-500 text-xs">Sep 2024 - Present</p>
                  </div>
                  <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded border border-green-500/20">Freelance</span>
               </div>
               <p className="text-gray-400 text-sm">Backend Developer. Handling API architecture and server-side logic.</p>
            </div>

            <div className="p-6 border border-white/5 bg-[#111] rounded-2xl hover:border-white/10 transition-all">
               <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">PromptVault</h3>
                    <p className="text-gray-500 text-xs">July 2025 - Present</p>
                  </div>
                  <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 text-xs rounded border border-yellow-500/20">Founder</span>
               </div>
               <p className="text-gray-400 text-sm">Building the marketplace infrastructure for the AI economy.</p>
            </div>
          </div>
        </section>

        {/* About / Contact */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="p-8 bg-[#111] rounded-2xl border border-white/5">
              <h3 className="text-lg font-bold mb-4">About Me</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                I'm Fazza, a 19-year-old Fullstack Architect and Automation Engineer based in Nigeria. With <span className="text-white font-bold">6+ years</span> of experience since starting my journey in 2019, I specialize in building vertical SaaS platforms, cloud infrastructure on AWS, and custom robotics solutions.
              </p>
              <div className="flex gap-4">
                <a href="https://x.com/typicalsalaam" target="_blank" className="text-gray-400 hover:text-white"><Twitter className="w-5 h-5"/></a>
                <a href="https://www.instagram.com/typicalabdulsalaam" target="_blank" className="text-gray-400 hover:text-white"><Instagram className="w-5 h-5"/></a>
              </div>
           </div>

           <div className="p-8 bg-gradient-to-br from-green-900/20 to-[#111] rounded-2xl border border-white/5 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold mb-2">Have an idea?</h3>
              <p className="text-gray-400 text-sm mb-6">I am open for collaborations and YC-style sprints.</p>
              <a href="mailto:darksoftwareguy84@gmail.com" className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                <Rocket className="w-4 h-4" /> Start Building
              </a>
           </div>
        </section>

        <footer className="mt-20 pt-10 border-t border-white/5 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} FAZZA. Built with Next.js & Tailwind.</p>
        </footer>

      </div>
    </div>
  );
}