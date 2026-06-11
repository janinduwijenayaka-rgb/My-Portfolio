/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Briefcase, GraduationCap, Layout } from 'lucide-react';

export default function About() {
  const webSkills = [
    { name: 'React.js', rating: '85%' },
    { name: 'JavaScript (ES6+)', rating: '80%' },
    { name: 'PHP', rating: '75%' },
    { name: 'MySQL', rating: '75%' },
    { name: 'HTML5 & CSS3', rating: '90%' },
    { name: 'Tailwind CSS', rating: '85%' },
  ];


  return (
    <main id="about-page-container" className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <div className="bottom-glow" />

      {/* Header title */}
      <section className="space-y-4 mb-12" id="about-header">
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          About <span className="text-[#00D1FF]">Me</span>
        </h1>
        <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
          Get to know my academic background, technical skills, and career aspiration details.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Side: Biography, Education and Career Aspirations */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Biography Block */}
          {/* HCI COMMENT: Heuristic #8 (Aesthetic & Minimalist Design) - Solid contrast background, spacious margins, clear layout split */}
          <article className="bg-[#161B22] border border-[#30363d] rounded-2xl p-6 md:p-8 space-y-4 shadow-xl">
            <h2 className="text-xl font-display font-semibold text-white flex items-center gap-2 border-b border-[#30363d] pb-3">
              <GraduationCap className="w-5 h-5 text-[#00D1FF]" />
              <span>Educational Background</span>
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-mono text-[#00D1FF]">Currently Pursuing</p>
                <h3 className="text-lg font-bold text-white mt-0.5">National Diploma in Technology (NDT)</h3>
                <p className="text-sm text-slate-300">Specialize in Information Technology</p>
                <p className="text-xs text-slate-500 mt-1">Institute of Technology, University of Moratuwa</p>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Aspiring Full-Stack Developer seeking an internship to apply my IT foundation. I am passionate about continuous learning, writing clean code, and building secure, scalable web applications that seamlessly integrate responsive front-ends.
              </p>
            </div>
          </article>

          {/* Career Aspirations Block */}
          {/* HCI COMMENT: User-Centered Design - Clear statements addressing the recruiter's inquiry for internship suitability */}
          <article className="bg-[#161B22] border border-[#30363d] rounded-2xl p-6 md:p-8 space-y-4 shadow-xl">
            <h2 className="text-xl font-display font-semibold text-white flex items-center gap-2 border-b border-[#30363d] pb-3">
              <Briefcase className="w-5 h-5 text-[#00D1FF]" />
              <span>Career Aspirations</span>
            </h2>
            <p className="text-sm leading-relaxed text-[#8B949E]">
              Aspiring <strong>Full-Stack Software Engineer</strong> with a passion for building scalable and user-friendly web applications. Seeking opportunities to enhance my skills in frontend and backend development, collaborate with experienced teams, and create innovative solutions that deliver real-world impact.
            </p>
          </article>
          
        </div>

        {/* Right Side: Detailed Skills Matrix */}
        {/* HCI COMMENT: Heuristic #4 (Consistency and Standards) - Skills are organized into clean consistent matrices with visual bar level representations */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Web Technologies Skills Card */}
          <section className="bg-[#161B22] border border-[#30363d] rounded-2xl p-6 md:p-8 space-y-6 shadow-xl" aria-label="Web Technologies Skills">
            <h2 className="text-xl font-display font-semibold text-white flex items-center gap-2 border-b border-[#30363d] pb-3">
              <Layout className="w-5 h-5 text-[#00D1FF]" />
              <span>Web Technologies</span>
            </h2>
            
            <div className="space-y-4">
              {webSkills.map((skill) => (
                <div key={skill.name} className="space-y-1.5" id={`skill-bar-${skill.name.toLowerCase().replace('.', '')}`}>
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-200">{skill.name}</span>
                    <span className="text-[#00D1FF] font-mono">{skill.rating}</span>
                  </div>
                  {/* Accessibility: Visual and screen-reader accessible gauge representing skill level */}
                  <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden" role="progressbar" aria-valuenow={parseInt(skill.rating)} aria-valuemin={0} aria-valuemax={100} aria-label={`${skill.name} Proficiency rating: ${skill.rating}`}>
                    <div 
                      className="bg-[#00D1FF] h-full rounded-full" 
                      style={{ width: skill.rating }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>


        </div>

      </div>
    </main>
  );
}
