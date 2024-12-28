import { motion } from "framer-motion";
import { Project } from "@/data/projects/types";
import { useProjectsContent } from "@/hooks/projects";
import ProjectPlaceholder from "./ProjectPlaceholder";
import ProjectTechnologies from "./ProjectTechnologies";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { buttons } = useProjectsContent();
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
    >
      {/* Project Info */}
      <div
        className={`relative p-6 md:p-8 bg-earth-dark/5 rounded-2xl border border-earth-dark/5 
                  hover:border-earth-sand/20 transition-all duration-300
                  group-hover:bg-earth-dark/10 group-hover:shadow-lg ${
                    !isEven ? "md:order-2" : ""
                  }`}
      >
        {/* Project Number */}
        <div
          className="absolute -left-4 top-6 text-7xl font-gemola text-earth-dark/10 select-none
                      transition-all duration-300 group-hover:text-earth-dark/20 group-hover:-translate-x-2"
        >
          {(index + 1).toString().padStart(2, "0")}
        </div>

        {/* Content */}
        <div className="relative ml-12 md:ml-16">
          {/* Header */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-earth-brown/70 text-sm font-al inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-earth-sand/50"></span>
              {project.category} • {project.year}
            </span>
            <h3
              className="text-2xl md:text-3xl font-gemola text-earth-dark group-hover:text-earth-brown 
                       transition-colors duration-300 relative"
            >
              {project.title}
              <span
                className="absolute -bottom-2 left-0 w-0 h-0.5 bg-earth-sand/30 
                           transition-all duration-300 group-hover:w-1/4"
              ></span>
            </h3>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-earth-brown/80 font-al mb-6 line-clamp-3 group-hover:line-clamp-none 
                     transition-all duration-300 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {project.description}
          </motion.p>

          {/* Technologies */}
          <ProjectTechnologies technologies={project.technologies} />

          {/* Links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-earth-dark text-earth-light rounded-lg 
                       hover:bg-earth-brown transition-all duration-300 hover:scale-105
                       hover:shadow-lg group/btn"
            >
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-12"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
              </svg>
              <span className="relative font-al">
                {buttons.github}
                <span
                  className="absolute inset-x-0 -bottom-1 h-px bg-earth-light/0 transition-all duration-300 
                             group-hover/btn:bg-earth-light/50"
                ></span>
              </span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-earth-dark text-earth-dark rounded-lg 
                         hover:bg-earth-dark hover:text-earth-light transition-all duration-300 hover:scale-105
                         hover:shadow-lg group/btn"
              >
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <span className="relative font-al">
                  {buttons.live}
                  <span
                    className="absolute inset-x-0 -bottom-1 h-px bg-earth-dark/0 transition-all duration-300 
                               group-hover/btn:bg-earth-light/50"
                  ></span>
                </span>
              </a>
            )}
          </motion.div>
        </div>
      </div>

      {/* Project Image/Demo */}
      <div
        className={`relative aspect-[16/10] overflow-hidden rounded-2xl group-hover:shadow-xl
                  transition-all duration-500 ${!isEven ? "md:order-1" : ""}`}
      >
        <div
          className="relative w-full h-full bg-earth-dark/10 transition-all duration-500 
                     group-hover:bg-earth-dark/15"
        >
          <ProjectPlaceholder index={index} />
          {/* Hover Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-earth-dark/20 to-transparent opacity-0 
                       group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
