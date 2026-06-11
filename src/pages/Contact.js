/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, ShieldAlert, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // HCI COMMENT: Heuristic #5 (Error Prevention) - Check values on change to correct format inline
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Dynamic error clearing to improve usability
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name so I can address you.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format (e.g., name@domain.com).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please type a brief message summarizing your inquiry.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // HCI COMMENT: Heuristic #1 (Visibility of System Status) - Set sending state and simulate request latency
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <main id="contact-page-container" className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
      {/* Dynamic graphic glow */}
      <div className="hero-glow" />

      {/* Title */}
      <section className="space-y-4 mb-12" id="contact-header">
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Get In <span className="text-[#00D1FF]">Touch</span>
        </h1>
        <p className="text-[#8B949E] max-w-2xl text-base sm:text-lg leading-relaxed">
          If you are interested in discussing internship roles, reviewing my coursework, or asking about my project implementations, contact me below.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Side: Contact Information Cards */}
        {/* HCI COMMENT: User-Centered Design - Quick static links allow recruiters to skip the contact form entirely */}
        <section className="lg:col-span-5 flex flex-col justify-between gap-6" aria-label="Direct Contact Channels">
          
          <div className="space-y-6">
            
            {/* Direct Email Card */}
            <article className="flex items-start gap-4 p-6 bg-[#161B22] border border-[#30363d] rounded-xl hover:border-[#00D1FF]/40 transition-colors" id="direct-email-card">
              <div className="p-3 bg-[#010409] rounded-lg text-[#00D1FF] border border-[#30363d]">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h2 className="text-sm font-semibold text-slate-300">Email Address</h2>
                <a 
                  href="mailto:janinduwijenayaka@gmail.com"
                  id="direct-email-anchor"
                  className="text-base text-white hover:text-[#00D1FF] font-medium transition-colors break-all"
                >
                  janinduwijenayaka@gmail.com
                </a>
                <p className="text-xs text-[#8B949E]">I respond to academic inquiries within 24 hours.</p>
              </div>
            </article>

            {/* Direct Phone Card */}
            <article className="flex items-start gap-4 p-6 bg-[#161B22] border border-[#30363d] rounded-xl hover:border-[#00D1FF]/40 transition-colors" id="direct-phone-card">
              <div className="p-3 bg-[#010409] rounded-lg text-[#00D1FF] border border-[#30363d]">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h2 className="text-sm font-semibold text-slate-300">Mobile Phone</h2>
                <span id="direct-phone-label" className="text-base text-white font-medium block">
                  +94 78 594 6682 <span className="text-xs text-[#8B949E] font-normal">(Placeholder)</span>
                </span>
                <p className="text-xs text-[#8B949E]">Available during standard GMT+5:30 school hours.</p>
              </div>
            </article>

            {/* Social profiles card */}
            <article className="p-6 bg-[#161B22] border border-[#30363d] rounded-xl space-y-4" aria-label="Social Portals">
              <h2 className="text-sm font-semibold text-slate-300 flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-[#00D1FF]" />
                <span>Alternate Portals</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.linkedin.com/in/janindu-wijenayaka-150aa435b"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-linkedin-link"
                  className="flex items-center gap-2 p-3 bg-[#010409] hover:bg-[#00D1FF]/10 border border-[#30363d] rounded-lg text-sm text-slate-300 hover:text-[#00D1FF] hover:border-[#00D1FF]/35 transition-all font-medium"
                >
                  <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/sample-janindu"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-github-link"
                  className="flex items-center gap-2 p-3 bg-[#010409] hover:bg-[#00D1FF]/10 border border-[#30363d] rounded-lg text-sm text-slate-300 hover:text-[#00D1FF] hover:border-[#00D1FF]/35 transition-all font-medium"
                >
                  <Github className="w-4 h-4 text-white" />
                  <span>GitHub</span>
                </a>
              </div>
            </article>

          </div>

          <div className="bg-[#161B22]/40 border border-[#30363d]/60 p-4 rounded-xl text-[11px] text-[#8B949E] leading-normal flex items-start gap-2.5">
            <span className="mt-0.5 text-[#00D1FF]">ℹ</span>
            <span>
              <strong>HCI Note:</strong> This form employs strict, validation client-side checks and handles feedback responses inline to minimize cognitive processing effort (Heuristic #10).
            </span>
          </div>

        </section>

        {/* Right Side: Interactive Feedback Form */}
        <section className="lg:col-span-7" aria-labelledby="form-section-title">
          <div className="bg-[#161B22] border border-[#30363d] p-6 sm:p-8 rounded-2xl shadow-xl space-y-6 h-full flex flex-col justify-center">
            
            {/* SUCCESS STATE CARD */}
            {/* HCI COMMENT: Heuristic #1 (Visibility of system status) - Displays highly visible confirmation message on success */}
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                id="contact-success-panel"
                className="text-center py-12 space-y-6 flex flex-col items-center justify-center"
              >
                <div className="p-4 bg-emerald-950/30 border border-emerald-800/20 text-emerald-400 rounded-full animate-bounce">
                  <CheckCircle2 className="w-14 h-14" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-display font-bold text-white">Message Shared Successfully!</h2>
                  <p className="text-sm text-[#8B949E] max-w-md">
                    Thank you, recruiter. Janindu has received your feedback. The simulated request success state mock completed properly.
                  </p>
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  id="contact-reset-btn"
                  className="px-6 py-2.5 bg-[#010409] hover:bg-slate-900 border border-[#30363d] text-[#8B949E] rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  Clear & Write Another
                </button>
              </motion.div>
            ) : (
              // ACTIVE FEEDBACK FORM VIEW
              <form onSubmit={handleSubmit} className="space-y-5" noValidate id="portfolio-contact-form">
                <h2 id="form-section-title" className="text-base font-display font-medium text-slate-200 border-b border-[#30363d] pb-3 flex items-center justify-between">
                  <span>Send an Instant Message</span>
                  <span className="text-[10px] font-mono text-slate-500">Form validation active</span>
                </h2>

                {/* Input Name field */}
                {/* HCI COMMENT: Heuristic #5 (Error prevention) - Text fields are structured with clear prompt indicators and focus states */}
                <div className="space-y-1.5" id="form-group-name">
                  <label htmlFor="name-input" className="block text-xs font-semibold text-slate-300">
                    Your Name <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name-input"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`
                      w-full px-4 py-3 bg-[#010409] border text-white rounded-lg text-sm transition-all focus:outline-none focus:ring-1
                      ${errors.name 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                        : 'border-[#30363d] focus:border-[#00D1FF] focus:ring-[#00D1FF]/20'
                      }
                    `}
                    placeholder="E.g., Janindu Wijenayaka"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-input-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-input-error" className="text-xs text-red-400 flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Input Email field */}
                <div className="space-y-1.5" id="form-group-email">
                  <label htmlFor="email-input" className="block text-xs font-semibold text-slate-300">
                    Your Email Address <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email-input"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`
                      w-full px-4 py-3 bg-[#010409] border text-white rounded-lg text-sm transition-all focus:outline-none focus:ring-1
                      ${errors.email 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                        : 'border-[#30363d] focus:border-[#00D1FF] focus:ring-[#00D1FF]/20'
                      }
                    `}
                    placeholder="janindu.wijenayaka@gmail.com"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-input-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-input-error" className="text-xs text-red-400 flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Input Message field */}
                <div className="space-y-1.5" id="form-group-message">
                  <label htmlFor="message-input" className="block text-xs font-semibold text-slate-300">
                    Your Message <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message-input"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`
                      w-full px-4 py-3 bg-[#010409] border text-white rounded-lg text-sm transition-all resize-none focus:outline-none focus:ring-1
                      ${errors.message 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                        : 'border-[#30363d] focus:border-[#00D1FF] focus:ring-[#00D1FF]/20'
                      }
                    `}
                    placeholder="Hello Janindu, let's schedule an interview for our upcoming IT internship slot..."
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-input-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-input-error" className="text-xs text-red-400 flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button with visual state changes */}
                {/* HCI COMMENT: Heuristic #1 (Visibility of system status) - Disabled style matches active sending loading sequence */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className={`
                    w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-black font-bold transition-all relative
                    ${isSubmitting 
                      ? 'bg-[#00D1FF]/50 text-black/50 cursor-not-allowed' 
                      : 'bg-[#00D1FF] hover:brightness-110 shadow-md hover:shadow-[#00D1FF]/10 active:scale-98 cursor-pointer'
                    }
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Simulating Server Dispatch...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Form Entry</span>
                      <Send className="w-4 h-4 text-black" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </section>

      </div>
    </main>
  );
}
