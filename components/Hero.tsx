import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:mix-blend-overlay dark:bg-primary-500/10"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:mix-blend-overlay dark:bg-purple-500/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary-600 uppercase bg-primary-100 dark:bg-primary-900/30 dark:text-primary-400 rounded-full"
            >
              Available for work
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400">
                AhmadRufai
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed">
              A <strong>Frontend Engineer</strong> and <strong>Full-Stack Developer</strong> transforming complex problems into elegant, accessible, and high-performance digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/projects"
                className="px-8 py-3.5 text-base font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group"
              >
                View Projects 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href={SOCIAL_LINKS.cv}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3.5 text-base font-semibold text-slate-700 dark:text-white border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" /> Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Decorative circle behind image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 dark:opacity-40 animate-pulse"></div>
                <img 
                  src="https://picsum.photos/600/600?grayscale" 
                  alt="AhmadRufai Yakubu Ozovehe" 
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white dark:border-slate-800"
                />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
