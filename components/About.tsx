'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Cpu, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Full-Stack Development',
      description: 'Proficient in modern web technologies including React, Next.js, Node.js, Express.js, and cloud platforms.'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'AI & Machine Learning',
      description: 'Experience with TensorFlow, PyTorch, and developing intelligent applications.'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation Focus',
      description: 'Passionate about exploring cutting-edge technologies and implementing creative solutions.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaborative Approach',
      description: 'Strong communication skills and experience working in agile development teams.'
    }
  ];

  return (
    <section id="about" className="py-20 relative scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about the intersection of artificial intelligence and software development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">My Journey</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a dedicated AI & Software Developer with a passion for creating intelligent, 
                scalable solutions. My journey began with traditional web development, but I quickly 
                became fascinated by the potential of artificial intelligence to transform how we 
                interact with technology.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Today, I specialize in developing full-stack applications that leverage AI capabilities, 
                from natural language processing to computer vision. I believe in writing clean, 
                maintainable code and creating user experiences that are both powerful and intuitive.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest research in machine learning, 
                contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="glass-card p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-blue-400 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-white">{feature.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;