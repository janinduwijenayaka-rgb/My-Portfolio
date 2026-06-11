/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';

// HCI COMMENT: Heuristic #4 (Consistency and Standards) - Custom scroll-to-top component ensuring standard viewport state on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  
  // Instantly scrolls back to top when routing occurs to align user mental model
  window.scrollTo(0, 0);
  return null;
}

// Wrapper to enable polished entering animations for each page component
function PageTransitionWrapper({ children }) {
  const location = useLocation();
  
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="flex-1"
    >
      {children}
    </motion.div>
  );
}

function MainAppRoutes() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Scroll to Top helper */}
      <ScrollToTop />

      {/* Global standard Header Navigation */}
      <Header />

      {/* Core routed pages structured with accessible and semantic <main> containers */}
      <div className="flex-1 flex flex-col">
        <Routes>
          <Route 
            path="/" 
            element={
              <PageTransitionWrapper>
                <Home />
              </PageTransitionWrapper>
            } 
          />
          <Route 
            path="/about" 
            element={
              <PageTransitionWrapper>
                <About />
              </PageTransitionWrapper>
            } 
          />
          <Route 
            path="/projects" 
            element={
              <PageTransitionWrapper>
                <Projects />
              </PageTransitionWrapper>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <PageTransitionWrapper>
                <Contact />
              </PageTransitionWrapper>
            } 
          />
        </Routes>
      </div>

      {/* Global standard Footer layout */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <MainAppRoutes />
    </HashRouter>
  );
}
