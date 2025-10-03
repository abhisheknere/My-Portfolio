'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden scroll-mt-24 md:scroll-mt-28">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[60vw] h-[60vw] max-w-[24rem] max-h-[24rem] bg-blue-500/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-[60vw] h-[60vw] max-w-[24rem] max-h-[24rem] bg-purple-500/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold transform -translate-y-[16px] md:-translate-y-[28px] mb-6 text-left md:text-center"
          >
            {' '}
            <span className="text-gradient">Abhishek Nere</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed"
          >
            AI & Software Developer passionate about creating intelligent solutions
            that bridge the gap between cutting-edge technology and real-world applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-start md:justify-center mb-12"
          >
            <button
              onClick={() => scrollToSection('#projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 pulse-glow"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-start space-x-6 mb-12"
          >
            <a
              href="https://github.com/abhisheknere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhisheknere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=abhisheksandeepnere@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110 inline-flex items-center pointer-events-auto"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('#about')}
            className="text-gray-400 hover:text-white transition-colors duration-300 animate-bounce"
            aria-label="Scroll to About section"
          >
            <ChevronDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;