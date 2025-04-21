'use client';

import { motion } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, Github, Linkedin, ExternalLink } from 'lucide-react';
import TypewriterComponent from '@/components/ui/typewriter';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center hero-gradient">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[5%] w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 pt-16 pb-24 flex flex-col items-center justify-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center mb-6"
        >
          <div className="relative flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-primary/10 animate-float">
            <Code className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
          Piyush Froster
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 h-12 flex justify-center"
        >
          <TypewriterComponent 
            words={[
              "Student Developer",
              "C++ Enthusiast",
              "Full Stack Explorer",
              "Python Learner"
            ]}
          />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="max-w-lg text-muted-foreground mb-8"
        >
          Transforming ideas into code and exploring the vast tech universe. 
          Currently working on exciting projects and expanding my skill set.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <Button 
            onClick={() => scrollToSection('#projects')}
            className="group"
          >
            View Projects
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            variant="outline" 
            onClick={() => scrollToSection('#contact')}
          >
            Get In Touch
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex justify-center gap-4 mb-16"
        >
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/iampiyushfroster" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
        </motion.div>
        
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 1.2 }}
  className="absolute bottom-8 left-0 right-0 mx-auto w-fit" // Changed positioning
>
  <Button
    variant="ghost"
    size="icon"
    className="animate-bounce"
    onClick={() => scrollToSection('#about')}
  >
    <ArrowDown className="h-5 w-5" />
    <span className="sr-only">Scroll Down</span>
  </Button>
</motion.div>
