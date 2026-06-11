/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#010409] border-t border-[#30363d] py-8 px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Branding & HCI Details */}
        <div className="text-center md:text-left">
          <p className="text-sm font-display text-white font-medium">
            Janindu Wijenayaka
          </p>
          <p className="text-xs text-slate-550 mt-1">
            Undergraduate in National Diploma in Technology (NDT) - IT Specialization
          </p>
          <p className="text-xs text-slate-600 mt-0.5">
            Designed in accordance with Human-Computer Interaction (HCI) Principles.
          </p>
        </div>

        {/* Social connections */}
        {/* HCI COMMENT: Heuristic #4 (Consistency and standards) - Industry-standard placement of social links in footer */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/janinduwijenayaka-rgb"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-github"
            className="p-2 text-slate-400 hover:text-[#00D1FF] hover:bg-slate-900 rounded-full transition-all focus:ring-2 focus:ring-[#00D1FF]"
            aria-label="Janindu's GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/janindu-wijenayaka-150aa435b"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-linkedin"
            className="p-2 text-slate-400 hover:text-[#00D1FF] hover:bg-slate-900 rounded-full transition-all focus:ring-2 focus:ring-[#00D1FF]"
            aria-label="Janindu's LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:janinduwijenayaka@gmail.com"
            id="footer-email"
            className="p-2 text-slate-400 hover:text-[#00D1FF] hover:bg-slate-900 rounded-full transition-all focus:ring-2 focus:ring-[#00D1FF]"
            aria-label="Send Email to Janindu"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright attribution */}
        <div className="text-xs text-slate-500 text-center md:text-right">
          <p>&copy; {currentYear} Janindu Wijenayaka. All rights reserved.</p>
          <p className="mt-1 flex items-center justify-center md:justify-end gap-1 text-slate-600">
            <span>Built for academic compilation</span> 
            <ExternalLink className="w-3 h-3" />
          </p>
        </div>
        
      </div>
    </footer>
  );
}
