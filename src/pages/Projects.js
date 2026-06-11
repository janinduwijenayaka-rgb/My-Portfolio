/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, ExternalLink, HelpCircle, MonitorCheck, Cpu } from 'lucide-react';
import eventMgmtImg from '../assets/images/project_event_mgmt_1781025014062.png';
import robotImg from '../assets/images/project_robot_1781025031551.png';
import careerSystemImg from '../assets/images/project_career_system_1781025050001.png';

export default function Projects() {
  const projectsData = [
    {
      id: 'student-event-management-system',
      title: 'Task Flow',
      description: 'A responsive task management web application that helps users organize daily tasks efficiently. Features task creation, priority management, category organization, due date tracking, and workflow progression from To Do to In Progress and Done. Built using HTML, CSS, and JavaScript with localStorage for persistent data management.',
      technologies: ['React', 'MySQL', 'PHP', 'Tailwind CSS'],
      githubUrl: 'https://github.com/janinduwijenayaka-rgb/taskflow.git',
      imageUrl: eventMgmtImg,
      hciPrinciples: [
        'Heuristic #5 (Error Prevention): Custom forms confirm date/time booking availability ahead of registration submissions.',
        'Heuristic #1 (Visibility of System Status): Real-time registration trackers show the current attendee capacity levels.'
      ]
    },
    {
      id: 'pid-line-following-robot',
      title: 'Asset Management System',
      description: 'A modern ERP asset management application built with Go and Vue.js, providing asset registration, tracking, filtering, and disposal management through a user-friendly dashboard',
      technologies: ['Arduino', 'C++', 'L298N Motor Driver', 'IR Reflectance Sensor Array'],
      githubUrl: 'https://github.com/NirMAN-15/ERP-Asset-Management-module.git',
      imageUrl: robotImg,
      hciPrinciples: [
        'Natural Mapping: The physical placement of the 5-IR sensors is mapped proportionally to the steering coefficient parameters.',
        'Immediate Feedback Loop: Multi-colored diagnostic status LEDs represent active sensor signals for easy diagnostic parsing.'
      ]
    },
    {
      id: 'it-career-path-suggestion-system',
      title: 'Vehicle-Rental-System',
      description: 'A modern vehicle rental management application developed to simplify vehicle reservations, rental tracking, and fleet management while providing a seamless user experience for customers and administrators.',
      technologies: ['React.js', 'Data-driven Logic', 'D3.js Visualization', 'HCI Decision Matrix'],
      githubUrl: 'https://github.com/Nilanga7/Vehicle-Rental-System.git',
      imageUrl: careerSystemImg,
      hciPrinciples: [
        'Heuristic #8 (Aesthetic & Minimalist Design): Reduces user stress by hiding secondary telemetry tables, keeping the focus on recommendations.',
        'Mental Models: Uses a standard skill assessment test that mimics common standard technical certifications.'
      ]
    }
  ];

  return (
    <main id="projects-page-container" className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
      
      {/* Background ambient decorative glow */}
      <div className="hero-glow" />

      {/* Header section */}
      <section className="space-y-4 mb-12" id="projects-header">
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          My <span className="text-[#00D1FF]">Project</span>
        </h1>
        <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
          Explore a curated selection of systems I built during my NDT IT studies, highlighting 
          programming skills, electronics design, and integrated HCI principles.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8" aria-label="Interactive Project Cards">
        {projectsData.map((project) => (
          <article 
            key={project.id}
            id={`project-card-${project.id}`}
            className="flex flex-col h-full bg-[#161B22] border border-[#30363d] hover:border-[#00D1FF] rounded-2xl overflow-hidden shadow-xl hover:shadow-[#00D1FF]/5 transition-all duration-300 group"
          >
            {/* Project Image Frame */}
            {/* HCI COMMENT: Heuristic #8 (Aesthetic & Minimalist Design) - Clean visual preview box with sleek modern cover animations */}
            <div className="relative aspect-[4/3] bg-[#010409] overflow-hidden border-b border-[#30363d]">
              <img
                src={project.imageUrl}
                alt={`Interactive UI/UX mockup display of ${project.title}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#010409]/90 backdrop-blur-md rounded-md border border-[#30363d] text-[10px] font-mono text-[#00D1FF] flex items-center gap-1.5 shadow-md">
                {project.id.includes('robot') ? <Cpu className="w-3.5 h-3.5" /> : <MonitorCheck className="w-3.5 h-3.5" />}
                <span>{project.id.includes('robot') ? 'IoT / Hardware' : 'Web Application'}</span>
              </div>
            </div>

            {/* Project Content Box */}
            <div className="flex-1 p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                
                {/* Title */}
                <h2 className="text-lg font-display font-bold text-[#F0F6FC] group-hover:text-[#00D1FF] transition-colors leading-tight">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#8B949E] leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies pills */}
                {/* HCI COMMENT: Heuristic #4 (Consistency and Standards) - Technology list pills use consistent taxonomy across cards */}
                <div className="flex flex-wrap gap-1.5" aria-label="Programming Technologies utilized">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-[#010409] border border-[#30363d] text-[10px] font-mono text-[#8B949E] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* HCI & Assignment details box */}
              {/* HCI COMMENT: Academic Context - Inline notes linking this project directly back to Janindu's academic user experience report */}
              <div className="mt-4 pt-4 border-t border-[#30363d] space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-[#00D1FF] font-mono font-medium">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Applied HCI Evaluation:</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1">
                  {project.hciPrinciples.map((principle, index) => (
                    <li key={index} className="text-[11px] text-slate-500 leading-normal">
                      {principle}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links Footer Row */}
              <div className="pt-4 border-t border-[#30363d] flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`project-github-link-${project.id}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-350 hover:text-white hover:underline transition-all duration-150 py-1"
                  aria-label={`View ${project.title} GitHub Source Code`}
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                
                <span 
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500 cursor-help" 
                  title="Placeholder project workspace repository link on sample host"
                >
                  <span>Sample Repo</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>

            </div>
          </article>
        ))}
      </section>

    </main>
  );
}
