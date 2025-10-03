'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Bot, Brain, Code, Zap } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'JarvisAI',
      description:
        'An intelligent AI assistant built with advanced natural language processing capabilities. Features voice recognition, contextual understanding, and seamless integration with various APIs.',
      icon: <Bot className="w-8 h-8" />,
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'OpenAI API'],
      github: 'https://github.com/abhisheknere/jarvisai',
      live: 'https://jarvisai-demo.vercel.app',
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section id="projects" className="py-20 relative scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient transform -translate-y-[6px] md:-translate-y-[10px]">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions that demonstrate my expertise in AI and software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white mr-4`}>
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Github size={20} />
                  <span>Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/abhisheknere"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-lg font-semibold"
          >
            <Github size={24} />
            <span>View All Projects on GitHub</span>
            <ExternalLink size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;