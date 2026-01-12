import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ExternalLink, Github, X } from 'lucide-react';

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white dark:bg-dark-card w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        <div className="relative h-64">
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
            >
                <X className="w-5 h-5" />
            </button>
        </div>
        
        <div className="p-8">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                    <p className="text-primary-600 font-medium">{project.role}</p>
                </div>
                <div className="flex gap-2">
                    {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" rel="noreferrer" className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                            <Github className="w-5 h-5" />
                        </a>
                    )}
                     {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>

            <div className="space-y-6">
                <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">The Problem</h4>
                    <p className="text-slate-700 dark:text-slate-300">{project.problem}</p>
                </div>
                <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">The Solution</h4>
                    <p className="text-slate-700 dark:text-slate-300">{project.solution}</p>
                </div>
                 <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">Key Impact</h4>
                    <p className="text-slate-700 dark:text-slate-300">{project.impact}</p>
                </div>

                <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map(tech => (
                            <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">A selection of recent work and contributions.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden group">
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">Click for details</span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                      <span className="text-xs px-2 py-1 text-slate-400">+ {project.stack.length - 3}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
