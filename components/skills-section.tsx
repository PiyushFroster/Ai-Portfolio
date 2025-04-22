'use client';

import { motion } from '@/components/ui/motion';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeCheck, Cpu, Globe, Database, Server, Code2, Braces } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
    icon?: React.ReactNode;
  }[];
}

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Programming Languages',
      icon: <Code2 className="h-6 w-6" />,
      skills: [
        { name: 'C++', level: 85, icon: <Braces className="h-4 w-4" /> },
        { name: 'JavaScript', level: 75, icon: <Braces className="h-4 w-4" /> },
        { name: 'Python', level: 40, icon: <Braces className="h-4 w-4" /> },
        { name: 'HTML/CSS', level: 80, icon: <Braces className="h-4 w-4" /> },
      ],
    },
    {
      name: 'Front-End',
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: 'React', level: 80 },
        { name: 'Next.js', level: 70 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'TypeScript', level: 65 },
      ],
    },
    {
      name: 'Back-End',
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express', level: 65 },
        { name: 'RESTful APIs', level: 75 },
        { name: 'Authentication', level: 60 },
      ],
    },
    {
      name: 'Databases & Tools',
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: 'MongoDB', level: 60 },
        { name: 'MySQL', level: 65 },
        { name: 'Git', level: 80 },
        { name: 'Docker', level: 50 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden skills-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mb-6 rounded-full"></div>
          <p className="max-w-2xl text-muted-foreground">
            A collection of technologies and tools I&#39;ve worked with.
            Always expanding my knowledge and adding new skills to my toolkit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-md">
                    {category.icon}
                  </div>
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          {skill.icon && skill.icon}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {skill.level >= 80 && (
                            <BadgeCheck className="h-4 w-4 text-primary" />
                          )}
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}