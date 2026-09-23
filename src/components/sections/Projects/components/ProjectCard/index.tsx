import { motion } from "framer-motion";
import { Project } from "@/data/projects/types";
import { useProjectsContent } from "@/hooks/projects";
import ProjectPlaceholder from "./ProjectPlaceholder";
import ProjectTechnologies from "./ProjectTechnologies";
import { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { buttons } = useProjectsContent();
  const isEven = index % 2 === 0;
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
            className="text-earth-brown/80 font-al mb-6 line-clamp-3 
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
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-earth-dark text-earth-light rounded-lg 
                       hover:bg-earth-brown transition-all duration-300 hover:scale-105
                       hover:shadow-lg group/btn"
              >
                <FaGithub className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-12" />
                <span className="relative font-al">
                  {buttons.github}
                  <span
                    className="absolute inset-x-0 -bottom-1 h-px bg-earth-light/0 transition-all duration-300 
                               group-hover/btn:bg-earth-light/50"
                  ></span>
                </span>
              </a>
            ) : (
              <div
                className="flex items-center gap-2 px-4 py-2 bg-earth-sand/5 text-earth-brown/80 rounded-lg 
                         border border-earth-sand/20 cursor-not-allowed font-al group/private"
              >
                <FaGithub className="w-4 h-4 text-earth-dark/50" />
                <span className="font-al relative">
                  Private
                  <span className="absolute inset-x-0 -bottom-px h-[1px] bg-earth-sand/20"></span>
                </span>
              </div>
            )}

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

      {/* Project Image with Refined Frosted Glass Elements */}
      <div
        className={`relative aspect-[16/8] rounded-2xl shadow-md group-hover:shadow-xl z-10
                  transition-all duration-500 ${!isEven ? "md:order-1" : ""}`}
        style={{ zIndex: 5 }} // Ensure this stays below navbar but above other content
      >
        {/* Container for image and frosted elements that allows elements to extend outside */}
        <div className="relative w-full h-full">
          {/* Show Project Image if available, fallback to placeholder if error occurs */}
          {!imageError && project.image ? (
            <>
              {/* Image container with overflow hidden */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center transition-all duration-700"
                  style={{
                    filter: isHovered ? "none" : "brightness(0.9)",
                    transition: "all 0.7s ease-in-out",
                  }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                  onError={() => setImageError(true)}
                />

                {/* Beautiful gradient overlay that matches the earthy theme - with increased opacity and translucent film */}
                <div
                  className="absolute inset-0 transition-all duration-700 ease-in-out pointer-events-none"
                  style={{
                    opacity: isHovered ? 0.3 : 0.9,
                    background:
                      "linear-gradient(135deg, rgba(187, 165, 143, 0.98) 0%, rgba(255, 249, 240, 0.25) 50%, rgba(34, 48, 48, 0.98) 100%)",
                    mixBlendMode: "overlay",
                  }}
                />

                {/* Project Number in center, similar to ProjectPlaceholder */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0.15 }}
                    animate={{
                      opacity: isHovered ? 0 : 0.15,
                    }}
                    transition={{ duration: 0.7 }}
                    className="flex items-center justify-center"
                  >
                    <span
                      className="text-[160px] font-gemola text-earth-sand select-none"
                      style={{ opacity: 1 }}
                    >
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                  </motion.div>
                </div>

                {/* Decorative circles like in ProjectPlaceholder */}
                <motion.div
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ opacity: isHovered ? 0.03 : 0.1 }}
                  transition={{ duration: 0.7 }}
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 800 500"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <g
                      className="animate-[spin_30s_linear_infinite]"
                      style={{ transformOrigin: "center" }}
                    >
                      <circle
                        cx="400"
                        cy="250"
                        r="120"
                        stroke="#BBA58F"
                        strokeWidth="0.5"
                        opacity="0.1"
                        fill="none"
                      />
                      <circle
                        cx="400"
                        cy="250"
                        r="80"
                        stroke="#BBA58F"
                        strokeWidth="0.5"
                        opacity="0.1"
                        fill="none"
                        className="animate-[spin_20s_linear_infinite]"
                      />
                    </g>
                  </svg>
                </motion.div>
              </div>

              {/* Refined frosted elements - fewer, smaller, and more complementary */}
              <motion.div
                className="absolute -top-6 -left-6 w-28 h-28 bg-earth-cream/20 backdrop-blur-sm rounded-full border border-earth-light/10 shadow-lg"
                style={{ zIndex: isHovered ? -1 : 6 }}
                animate={{
                  x: isHovered ? -12 : 0,
                  y: isHovered ? -12 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute left-1/2 top-1/2 w-1 h-1 bg-earth-sand/40 rounded-full transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-earth-sand/20"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.7, 0.2, 0.7],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  />
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-earth-sand/15 backdrop-blur-md rounded-2xl border-l border-t border-earth-light/15 shadow-lg overflow-hidden"
                style={{ zIndex: isHovered ? -1 : 6 }}
                animate={{
                  x: isHovered ? 10 : 0,
                  y: isHovered ? 10 : 0,
                  rotate: isHovered ? 10 : 0,
                }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="absolute top-1/2 left-1/2 w-full h-[1px] bg-earth-light/40 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    scaleX: [1, 0.7, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-earth-dark/5 to-earth-sand/10 opacity-30" />
              </motion.div>

              {/* Side accent - small triangle */}
              {isEven ? (
                <motion.div
                  className="absolute top-1/3 -right-5 w-16 h-16 bg-earth-light/20 backdrop-blur-[2px] shadow-sm"
                  style={{
                    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                    zIndex: isHovered ? -1 : 5,
                  }}
                  animate={{
                    x: isHovered ? 12 : 0,
                    rotate: isHovered ? 15 : 0,
                  }}
                  transition={{ duration: 0.7 }}
                />
              ) : (
                <motion.div
                  className="absolute top-1/3 -left-5 w-16 h-16 bg-earth-light/20 backdrop-blur-[2px] shadow-sm"
                  style={{
                    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                    zIndex: isHovered ? -1 : 5,
                  }}
                  animate={{
                    x: isHovered ? -12 : 0,
                    rotate: isHovered ? -15 : 0,
                  }}
                  transition={{ duration: 0.7 }}
                />
              )}
            </>
          ) : (
            <ProjectPlaceholder index={index} />
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
