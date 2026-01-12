import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Work Experience</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">My professional journey and key achievements.</p>
        </motion.div>

        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3 top-0 bg-primary-100 dark:bg-primary-900/50 p-1.5 rounded-full border border-primary-200 dark:border-primary-800">
                <Briefcase className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              </div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.role}</h3>
                  <p className="text-primary-600 font-medium">{job.company}</p>
                </div>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                  {job.period}
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-dark-card rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow">
                <ul className="space-y-3 mb-6">
                  {job.description.map((desc, i) => (
                    <li key={i} className="text-slate-600 dark:text-slate-300 flex items-start">
                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Key Impact:</h4>
                  <div className="flex flex-wrap gap-3">
                    {job.metrics.map((metric, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium text-green-700 bg-green-50 dark:bg-green-900/20 dark:text-green-300 rounded-md border border-green-100 dark:border-green-800">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
