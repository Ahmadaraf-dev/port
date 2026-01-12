import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES, EDUCATION, CERTIFICATIONS } from '../constants';
import { Award, BookOpen } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            About Me
          </motion.h2>
          <motion.div variants={itemVariants} className="prose prose-lg dark:prose-invert mx-auto text-slate-600 dark:text-slate-300">
            <p className="mb-6">
              I am a passionate <strong>Frontend Engineer</strong> with a strong background in building scalable web applications. My professional philosophy centers on the idea that "good code is clean code." I strive to create user interfaces that are not only visually striking but also accessible to everyone and performant on any device.
            </p>
            <p>
              With experience ranging from social impact projects like the <strong>VDM Initiative</strong> to enterprise solutions like <strong>WebCrunch</strong>, I have honed my ability to adapt to diverse requirements and deliver measurable results. I thrive in collaborative environments where innovation and continuous learning are valued.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Technical Proficiency</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">Tools and technologies I use to bring ideas to life.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-slate-200">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-primary-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const EducationAndCerts = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid md:grid-cols-2 gap-12">
           {/* Education */}
           <div>
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="text-primary-600 w-6 h-6" />
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h2>
              </div>
              <div className="space-y-6">
                {EDUCATION.map((edu) => (
                  <motion.div 
                    key={edu.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-dark-card p-6 rounded-xl border-l-4 border-primary-500 shadow-sm"
                  >
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-primary-600 font-medium">{edu.institution}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{edu.year}</p>
                    <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm">{edu.details}</p>
                  </motion.div>
                ))}
              </div>
           </div>

           {/* Certs */}
           <div>
              <div className="flex items-center gap-3 mb-8">
                <Award className="text-primary-600 w-6 h-6" />
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Certifications</h2>
              </div>
              <div className="space-y-6">
                {CERTIFICATIONS.map((cert) => (
                  <motion.div 
                    key={cert.id}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 bg-white dark:bg-dark-card p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800"
                  >
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                       <Award className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{cert.name}</h3>
                      <p className="text-slate-600 dark:text-slate-300">{cert.issuer}</p>
                      <p className="text-sm text-slate-400 mt-1">{cert.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
           </div>
         </div>
       </div>
    </section>
  );
}
