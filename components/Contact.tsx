'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=abhisheksandeepnere@gmail.com', '_blank');
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'abhisheksandeepnere@gmail.com',
      href: 'mailto:abhisheksandeepnere@gmail.com',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/abhisheknere',
      href: 'https://www.linkedin.com/in/abhisheknere'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 7057476490',
      href: 'tel:+917057476490'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Kopargaon, Maharashtra, India',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 relative scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your next project to life? Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborations. Whether you have a specific project in mind or just want 
                to chat about technology, I'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="text-blue-400">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <a
                        href={info.href}
                        className="text-white hover:text-blue-400 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20"
              >
                <h4 className="font-semibold mb-2 text-white">Quick Response</h4>
                <p className="text-gray-300 text-sm">
                  I typically respond to all messages within 24 hours. For urgent matters, 
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Connect Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <div className="glass-card p-8 rounded-2xl w-full h-full flex flex-col items-center justify-center space-y-4 hover:bg-blue-500/10 transition-colors duration-300 border-2 border-blue-500/30">
              <Mail className="w-12 h-12 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
              <p className="text-gray-300 text-center">Click the button below to send me an email and let's start a conversation!</p>
              <button 
                onClick={handleEmailClick}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                aria-label="Send email to abhisheksandeepnere@gmail.com"


              >
                Send Email

              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;