"use client";
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Twitter, Terminal, Database, Cpu, Globe, Code, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const [text, setText] = useState('');
  const fullText = "> initiating_sequence... user: Fazza | status: online";

  // Typing effect for Hero
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-green-400 font-mono selection:bg-green-900 selection:text-white overflow-x-hidden">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Responsive Header */}
        <nav className="py-8 flex flex-col md:flex-row justify-between items-center border-b border-green-900/50 mb-12 md:mb-20 gap-6 md:gap-0">
          <h1 className="text-2xl font-bold tracking-tighter animate-pulse">
            FAZZA<span className="text-white">_DEV</span>
          </h1>
          <div className="flex gap-4 md:gap-6 text-xs md:text-sm">
            <a href="#projects" className="hover:text-white hover:shadow-[0_0_10px_rgba(0,255,65,0.5)] transition-all">/VENTURES</a>
            <a href="#stack" className="hover:text-white hover:shadow-[0_0_10px_rgba(0,255,65,0.5)] transition-all">/STACK</a>
            <a href="#contact" className="hover:text-white hover:shadow-[0_0_10px_rgba(0,255,65,0.5)] transition-all">/CONTACT</a>
          </div>
        </nav>

        {/* Founder Hero Section */}
        <section className="mb-24 md:mb-32 pt-4 md:pt-10">
          <div className="border border-green-800 bg-black/80 p-6 md:p-10 rounded-lg shadow-[0_0_30px_rgba(0,255,65,0.1)] backdrop-blur-sm">
            <div className="flex gap-2 mb-6 border-b border-green-900 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            <h2 className="text-3xl md:text-6xl font-bold mb-6 text-white min-h-[80px] md:min-h-auto">
              {text}<span className="animate-pulse">_</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8 leading-relaxed">
              Fullstack Architect & Automation Engineer. <br/>
              Building <span className="text-white font-bold">vertical SaaS</span> and <span className="text-white font-bold">automation infrastructure</span>.
              <br/>
              <span className="text-sm text-green-600 mt-4 block">
                // Currently building PromptVault with Python, Next.js, and Docker.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-green-600 text-black font-bold rounded hover:bg-green-500 transition-all shadow-[0_0_20px_rgba(0,255,65,0.3)] text-center"
              >
                VIEW BUILD LOG
              </a>
              <a 
                href="https://github.com/unrealGuy2" 
                target="_blank"
                className="px-6 py-3 border border-green-600 text-green-400 font-bold rounded hover:bg-green-900/20 transition-all flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" /> CHECK CODE
              </a>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="stack" className="mb-32">
          <h3 className="text-2xl text-white mb-8 flex items-center gap-2">
            <Terminal className="w-6 h-6" /> 
            <span className="border-b border-green-500">SYSTEM_CAPABILITIES</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Fullstack Card */}
            <div className="p-6 border border-green-900/50 bg-green-900/5 hover:bg-green-900/10 transition-all rounded hover:shadow-[0_0_20px_rgba(0,255,65,0.2)]">
              <h4 className="text-xl text-white mb-4 flex items-center gap-2"><Globe className="w-5 h-5" /> FULLSTACK</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-green-500"/> <span><span className="text-green-500">Frontend:</span> Next.js (App Router), TypeScript, Tailwind</span></li>
                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-green-500"/> <span><span className="text-green-500">Backend:</span> Python (FastAPI/Django), Node.js</span></li>
                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-green-500"/> <span><span className="text-green-500">Database:</span> Supabase (PostgreSQL), Flat File</span></li>
              </ul>
            </div>

            {/* Automation Card */}
            <div className="p-6 border border-green-900/50 bg-green-900/5 hover:bg-green-900/10 transition-all rounded hover:shadow-[0_0_20px_rgba(0,255,65,0.2)]">
              <h4 className="text-xl text-white mb-4 flex items-center gap-2"><Cpu className="w-5 h-5" /> AUTOMATION</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-green-500"/> <span><span className="text-green-500">Workflows:</span> n8n Automation</span></li>
                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-green-500"/> <span><span className="text-green-500">Scripting:</span> Python, Bash</span></li>
                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-green-500"/> <span><span className="text-green-500">Bots:</span> Selenium, Docker</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section - YC Optimized */}
        <section id="projects" className="mb-32">
          <h3 className="text-2xl text-white mb-8 flex items-center gap-2">
            <Code className="w-6 h-6" /> 
            <span className="border-b border-green-500">CURRENT_VENTURE</span>
          </h3>

          {/* PRIMARY FOCUS: PromptVault */}
          <div className="mb-16 p-6 md:p-8 border border-green-500/50 bg-[#0a0a0a] rounded-lg relative overflow-hidden group">
            {/* Glowing Background Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-bold text-black bg-green-500 rounded">
                  YC PITCH
                </div>
                <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">PromptVault</h4>
                <p className="text-lg md:text-xl text-gray-300 mb-6">
                  The marketplace infrastructure for the AI economy. <br className="hidden md:block"/>
                  Allowing Prompt Engineers to <span className="text-white border-b border-green-500/50">secure, share, and monetize</span> their intellectual property.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Built with <strong>Next.js</strong> for global scale & SEO</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span><strong>Python</strong> backend for prompt verification logic</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Secure <strong>Auth Integration</strong> for vendor payouts</span>
                  </div>
                </div>

                <button className="px-5 py-2 border border-green-500/50 text-green-400 rounded hover:bg-green-500 hover:text-black transition-colors text-sm font-bold flex items-center gap-2">
                  REQUEST ACCESS <Globe className="w-4 h-4" />
                </button>
              </div>
              
              {/* Visual Placeholder */}
              <div className="hidden lg:flex w-1/3 h-64 border border-green-900/50 bg-black/50 items-center justify-center rounded bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-50 hover:opacity-100 transition-all">
              </div>
            </div>
          </div>

          {/* ENGINEERING LOG: Previous Builds */}
          <h3 className="text-xl text-gray-500 mb-6 flex items-center gap-2">
            <Database className="w-5 h-5" /> 
            <span className="border-b border-gray-800">PREVIOUS_ENGINEERING_LOG</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* GeoLearn */}
            <div className="p-6 border border-gray-800 bg-[#0a0a0a] hover:border-green-900 transition-colors rounded">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-bold text-white">GeoLearn</h4>
                <span className="text-xs text-gray-500 border border-gray-800 px-2 py-1 rounded">EDUTECH</span>
              </div>
              <p className="text-gray-400 text-sm mb-4 min-h-[40px]">
                Departmental resource hub handling secure file distribution.
              </p>
              <div className="text-xs text-green-700 font-mono pt-4 border-t border-gray-900">
                Next.js, FastAPI, Supabase
              </div>
            </div>

            {/* Zeeluxe */}
            <div className="p-6 border border-gray-800 bg-[#0a0a0a] hover:border-green-900 transition-colors rounded">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-bold text-white">Zeeluxe Styles</h4>
                <span className="text-xs text-gray-500 border border-gray-800 px-2 py-1 rounded">E-COMMERCE</span>
              </div>
              <p className="text-gray-400 text-sm mb-4 min-h-[40px]">
                High-performance brand store with custom "Brain" (Context API) logic.
              </p>
              <div className="text-xs text-green-700 font-mono pt-4 border-t border-gray-900">
                Next.js, TypeScript, Flat-File DB
              </div>
            </div>
          </div>
        </section>

        {/* Responsive Footer */}
        <footer id="contact" className="pb-20 border-t border-green-900/30 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white">Let's Build.</h2>
              <p className="text-gray-500 text-sm mt-2">Open for collaborations and automation contracts.</p>
            </div>
            
            <div className="flex gap-4 md:gap-6">
              <a href="https://github.com/unrealGuy2" target="_blank" className="p-3 md:p-2 border border-green-900 rounded hover:bg-green-500 hover:text-black transition-all hover:shadow-[0_0_15px_rgba(0,255,65,0.8)]">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/abdulsalaam-sulaiman-46a5b7394" target="_blank" className="p-3 md:p-2 border border-green-900 rounded hover:bg-green-500 hover:text-black transition-all hover:shadow-[0_0_15px_rgba(0,255,65,0.8)]">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/typicalsalaam" target="_blank" className="p-3 md:p-2 border border-green-900 rounded hover:bg-green-500 hover:text-black transition-all hover:shadow-[0_0_15px_rgba(0,255,65,0.8)]">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/typicalabdulsalaam" target="_blank" className="p-3 md:p-2 border border-green-900 rounded hover:bg-green-500 hover:text-black transition-all hover:shadow-[0_0_15px_rgba(0,255,65,0.8)]">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-700 text-xs font-mono">
            &copy; {new Date().getFullYear()} FAZZA. SYSTEM_ID: 0x4F5A
          </div>
        </footer>

      </div>
    </div>
  );
}