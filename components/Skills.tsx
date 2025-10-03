'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 85 },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 92 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
      ]
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'TensorFlow', level: 87 },
        { name: 'PyTorch', level: 83 },
        { name: 'OpenAI APIs', level: 90 },
        { name: 'Computer Vision', level: 82 },
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'AWS/Cloud', level: 85 },
        { name: 'Docker', level: 88 },
        { name: 'Git/GitHub', level: 95 },
        { name: 'Vercel/Netlify', level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Skills & Expertise</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern, intelligent applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-400">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-300 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.2, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full shadow-lg"
                        style={{
                          boxShadow: `0 0 10px rgba(59, 130, 246, 0.3)`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">Always Learning</h3>
            <p className="text-gray-300 leading-relaxed">
              Technology evolves rapidly, and I'm committed to continuous learning. Currently exploring 
              advanced topics in Large Language Models, Edge Computing, and the latest frameworks in 
              both AI and web development. I believe that staying curious and adaptable is key to 
              creating innovative solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;