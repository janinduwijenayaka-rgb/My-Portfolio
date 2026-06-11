/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Award } from 'lucide-react';
import profileImg from '../assets/images/profile_placeholder_1781024994198.png';

export default function Home() {
  return (
    <main id="home-page-container" className="relative min-h-[80vh] flex flex-col justify-center px-4 md:px-8 py-12 md:py-20 lg:py-24">
      {/* Background ambient decorative glow */}
      <div className="hero-glow" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left side text column */}
        <section className="lg:col-span-7 space-y-6 text-center lg:text-left" aria-labelledby="hero-title">
          
          {/* HCI COMMENT: Heuristic #10 (Help and documentation) - Badge clarifying the student's primary academic status and internship goals */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#161B22] border border-[#30363d] rounded-full text-xs font-mono text-[#00D1FF]">
            <Terminal className="w-3.5 h-3.5" />
            <span>NDT IT Student • Seeking Internship 2026</span>
          </div>

          <div className="space-y-3">
            <h1 
              id="hero-title"
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-none"
            >
              Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] to-blue-500">Janindu Wijenayaka</span>
            </h1>
            <p className="text-xl sm:text-2xl font-display font-medium text-slate-300">
               Future IT & IoT Professional
            </p>
          </div>

          {/* HCI COMMENT: User-Centered Design (UCD) - A highly scannable introductory pitch focused directly on the recruiter's interest (full-stack web development and IoT hardware engineering) */}
          <p className="text-base sm:text-lg text-[#8B949E] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            I am an undergraduate specializing in Information Technology within the 
            <strong> National Diploma in Technology (NDT)</strong> program. I build user-centered 
            full-stack web applications and interactive hardware/IoT systems. I am seeking an internship 
            opportunity to apply my theoretical concepts, coding proficiency, and user-experience principles 
            to address real-world business requirements.
          </p>

          {/* Core CTAs */}
          {/* HCI COMMENT: Heuristic #3 (User control and freedom) - Prominent, explicit paths of navigation to browse projects or initiate quick contacts with immediate feedback indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Link
              to="/projects"
              id="home-cta-projects"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#00D1FF] text-black font-bold rounded-lg hover:brightness-115 active:scale-95 transition-all shadow-lg hover:shadow-[#00D1FF]/20"
            >
              <span>View My Projects</span>
              <Award className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              id="home-cta-contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#161B22] hover:bg-slate-900/60 border border-[#30363d] hover:border-[#00D1FF] text-white font-medium rounded-lg transition-all active:scale-95"
            >
              <span>Connect with Me</span>
              <ArrowRight className="w-4 h-4 text-[#00D1FF]" />
            </Link>
          </div>

          {/* Core metrics for recruiters */}
          <div className="pt-8 border-t border-[#30363d] flex flex-wrap justify-center lg:justify-start items-center gap-x-8 gap-y-4 text-xs font-mono text-slate-500">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span>Available starting Q3 2026</span>
            </div>
            <div>•</div>
            <div>Full-Stack Capability</div>
            <div>•</div>
            <div>IoT / Arduino Enthusiast</div>
          </div>

        </section>

        {/* Right side Profile Photo column in container layout */}
        {/* HCI COMMENT: Heuristic #8 (Aesthetic & Minimalist Design) - Framed layout with clear focal point. Interactive border effect on profile photo represents modern visual craftsmanship */}
        <section className="lg:col-span-5 flex justify-center" aria-label="Profile Photo Section">
          <div className="relative group">
            
            {/* Glowing active backdrop frame */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#00D1FF] to-blue-500 rounded-2xl opacity-60 blur-md group-hover:opacity-100 transition duration-500"></div>
            
            <div className="relative bg-[#161B22] p-3 rounded-2xl border border-[#30363d]">
              <img
                src={profileImg}
                alt="Portrait avatar of Janindu Wijenayaka, an IT and IoT undergraduate student at NDT"
                id="home-profile-photo"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl bg-slate-900 filter saturate-100 group-hover:scale-[1.02] transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 p-3 bg-slate-950/85 backdrop-blur-sm border border-slate-800 rounded-lg">
                <p className="text-xs font-mono text-[#00D1FF]">Undergraduate Specialization</p>
                <p className="text-sm font-semibold text-white">Information Technology — NDT</p>
              </div>
            </div>
            
          </div>
        </section>

      </div>
    </main>
  );
}
