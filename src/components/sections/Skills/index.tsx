"use client";
import { motion } from "framer-motion";
import { useSkills, useSkillsContent } from "@/hooks/skills";
import { SkillCategory } from "@/data/skills/types";
import SkillCard from "./components/SkillCard";

const Skills = () => {
  const skills = useSkills();
  const { header, categories } = useSkillsContent();

  return (
    <section
      id="skills"
      className="min-h-screen section-padding bg-gradient-to-b from-earth-cream to-earth-light relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-earth-sand/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-earth-dark/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <h2 className="text-4xl md:text-5xl font-gemola text-earth-dark mb-4 relative">
                {header.title}
                <span className="absolute -bottom-2 left-1/4 right-1/4 h-px bg-earth-sand/30"></span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg font-al text-earth-brown/80 max-w-2xl mx-auto"
            >
              {header.description}
            </motion.p>
          </div>

          {/* Skills Grid - 2x2 Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map(
              (skillCategory: SkillCategory, categoryIndex: number) => (
                <motion.div
                  key={skillCategory.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="bg-earth-dark/[0.02] backdrop-blur-sm p-8 rounded-3xl border border-earth-dark/5
                          hover:bg-earth-dark/[0.04] transition-all duration-500"
                >
                  <h3 className="text-2xl font-gemola text-earth-dark mb-6 relative">
                    {skillCategory.category}
                    <motion.div
                      className="absolute -bottom-2 left-0 h-0.5 bg-earth-sand/20"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </h3>
                  <div className="grid gap-4">
                    {skillCategory.items.map((skill, index) => (
                      <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
