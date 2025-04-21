'use client';

import { motion } from '@/components/ui/motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Github, ExternalLink, Calendar } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  date: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: 'Algorithm Visualizer',
      description: 'Interactive tool to visualize various sorting and pathfinding algorithms implemented in C++.',
      image: 'https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg',
      technologies: ['C++', 'SFML', 'Algorithms', 'Data Structures'],
      github: 'https://github.com',
      date: 'Jan 2023',
    },
    {
      title: 'Personal Blog',
      description: 'A fully responsive blog built with Next.js and Tailwind CSS, featuring a clean minimalist design.',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Markdown'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      date: 'Apr 2023',
    },
    {
      title: 'Task Management App',
      description: 'A full-stack application for managing tasks and projects with a responsive UI and database integration.',
      image: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      date: 'Jul 2023',
    },
    {
      title: 'Data Analysis Dashboard',
      description: 'Interactive dashboard for visualizing and analyzing data using Python and modern web technologies.',
      image: 'https://images.pexels.com/photos/4665064/pexels-photo-4665064.jpeg',
      technologies: ['Python', 'Pandas', 'Flask', 'D3.js'],
      github: 'https://github.com',
      date: 'Oct 2023',
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden projects-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mb-6 rounded-full"></div>
          <p className="max-w-2xl text-muted-foreground">
            Here are some of the projects I've worked on. Each project reflects my passion
            for learning and exploring different technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10"></div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md">
                    <Calendar className="h-3 w-3" />
                    <span className="text-xs">{project.date}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="h-4 w-4 mr-2" /> Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" /> Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}