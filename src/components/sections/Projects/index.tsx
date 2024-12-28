"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useProjects, useProjectsContent } from "@/hooks/projects";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
  const projects = useProjects();
  const { header, buttons } = useProjectsContent();
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll
    ? projects
    : projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="min-h-screen section-padding bg-gradient-to-b from-earth-light to-earth-cream relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-earth-sand/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-earth-dark/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-24"
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

          {/* Projects Grid */}
          <div className="space-y-32">
            {displayedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Toggle Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative px-8 py-3 overflow-hidden rounded-lg
                       bg-earth-dark/5 hover:bg-earth-dark/10 transition-all duration-300
                       hover:shadow-lg hover:scale-105"
            >
              <span className="relative flex items-center gap-2 font-al text-earth-dark">
                {showAll ? (
                  <>
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                    {buttons.showLess}
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    {buttons.viewAll}
                  </>
                )}
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
