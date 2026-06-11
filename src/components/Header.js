/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Terminal, Code, Award, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { path: '/', label: 'Home', icon: <Terminal className="w-4 h-4" /> },
    { path: '/about', label: 'About Me', icon: <Code className="w-4 h-4" /> },
    { path: '/projects', label: 'Projects', icon: <Award className="w-4 h-4" /> },
    { path: '/contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0B0E14]/90 backdrop-blur-md border-b border-[#30363d] px-4 py-3 md:px-8">
      {/* HCI COMMENT: Heuristic #8 (Aesthetic & Minimalist Design) - Clean layout with balanced spacing and high contrast */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo and branding / Title */}
        <Link 
          to="/" 
          id="nav-home-logo"
          className="flex items-center gap-2 text-xl font-display font-bold text-white tracking-tight hover:text-[#00D1FF] transition-colors"
          aria-label="Janindu Wijenayaka Portfolio Home"
        >
          <span className="text-[#00D1FF] font-mono">&lt;</span>
          <span>Janindu</span>
          <span className="text-[#00D1FF] font-mono">/&gt;</span>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Desktop Navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              id={`nav-item-${item.label.toLowerCase().replace(' ', '-')}`}
              className={({ isActive }) => `
                relative flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md tracking-wide transition-all duration-200
                ${isActive 
                  ? 'text-[#00D1FF] bg-[#00D1FF]/10 shadow-sm border border-[#00D1FF]/30' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/40'
                }
              `}
            >
              {item.icon}
              <span>{item.label}</span>
              {/* HCI COMMENT: Heuristic #1 (Visibility of System Status) - Elegant sliding transition indicator mapping active tab */}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#00D1FF] rounded-md"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Routing Menu Panel */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
          id="mobile-menu"
          className="md:hidden mt-3 p-4 bg-[#161B22] border border-[#30363d] rounded-lg shadow-2xl flex flex-col gap-2"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              id={`mobile-nav-${item.label.toLowerCase().replace(' ', '-')}`}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-md text-base font-medium transition-colors
                ${isActive 
                  ? 'text-[#00D1FF] bg-[#00D1FF]/10 border-l-4 border-[#00D1FF]' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-850'
                }
              `}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </motion.div>
      )}
    </header>
  );
}
