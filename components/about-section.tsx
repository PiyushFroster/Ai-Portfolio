'use client';

import { motion } from '@/components/ui/motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Telescope, Lightbulb, Code2, Cpu, GraduationCap } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mb-6 rounded-full"></div>
          <p className="max-w-2xl text-muted-foreground">
            I&#39;m a passionate student developer on a journey to explore the vast world of programming.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg"
                alt="Piyush Froster"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 backdrop-blur-[2px]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 border-4 border-white/50 rounded-2xl"></div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 md:-right-12 p-4 bg-card shadow-lg rounded-lg"
            >
              <GraduationCap className="w-8 h-8 text-primary" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -top-6 -left-6 md:-left-12 p-4 bg-card shadow-lg rounded-lg"
            >
              <Code2 className="w-8 h-8 text-primary" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Hello, I&#39;m Piyush!</h3>
            <p className="text-muted-foreground">
              I&#39;m currently a student passionate about programming and technology. I enjoy solving
              complex problems and building applications that make a difference.
            </p>
            <p className="text-muted-foreground">
              My journey in programming started with C++, and I&#39;ve since expanded into full-stack
              development. I&#39;m currently learning Python to broaden my skill set even further.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <Card className="overflow-hidden group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4 group-hover:bg-primary/20 transition-colors">
                    <Telescope className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Constant Learner</h4>
                  <p className="text-sm text-muted-foreground">
                    Always exploring new technologies and methodologies
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4 group-hover:bg-primary/20 transition-colors">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Problem Solver</h4>
                  <p className="text-sm text-muted-foreground">
                    Enjoy tackling complex challenges with elegant solutions
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4 group-hover:bg-primary/20 transition-colors">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Clean Code</h4>
                  <p className="text-sm text-muted-foreground">
                    Strive for maintainable, efficient, and elegant code
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4 group-hover:bg-primary/20 transition-colors">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Tech Enthusiast</h4>
                  <p className="text-sm text-muted-foreground">
                    Passionate about all things tech and innovation
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}