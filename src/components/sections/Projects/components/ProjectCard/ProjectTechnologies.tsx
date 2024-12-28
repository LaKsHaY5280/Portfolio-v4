import { motion } from "framer-motion";

interface ProjectTechnologiesProps {
  technologies: string[];
}

const ProjectTechnologies = ({ technologies }: ProjectTechnologiesProps) => {
  return (
    <motion.div
      className="flex flex-wrap gap-2 mb-6"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
    >
      {technologies.slice(0, 4).map((tech, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * idx }}
          className="px-3 py-1 text-xs font-al bg-earth-dark/5 text-earth-brown rounded-full 
                   hover:bg-earth-dark/10 transition-all duration-300 hover:scale-105
                   border border-earth-dark/5 hover:border-earth-sand/20"
        >
          {tech}
        </motion.span>
      ))}
      {technologies.length > 4 && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="group/more relative px-3 py-1 text-xs font-al text-earth-brown/70 
                   bg-earth-dark/5 rounded-full border border-earth-dark/5 
                   hover:border-earth-sand/20 hover:bg-earth-dark/10 
                   transition-all duration-300 cursor-help"
        >
          <span className="relative">
            +{technologies.length - 4} more
            <span
              className="absolute inset-x-0 -bottom-0.5 h-px bg-earth-sand/30 
                         transition-all duration-300 group-hover/more:w-full"
            ></span>
          </span>

          {/* Tooltip */}
          <div
            className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full 
                       opacity-0 group-hover/more:opacity-100 transition-all duration-300
                       pointer-events-none min-w-max"
          >
            <div
              className="bg-earth-dark/90 backdrop-blur-sm text-earth-light px-3 py-2 
                         rounded-lg shadow-lg border border-earth-light/10 mb-2"
            >
              <div className="flex flex-wrap gap-2">
                {technologies.slice(4).map((tech, idx) => (
                  <span key={idx} className="text-earth-light/80">
                    {tech}
                    {idx < technologies.length - 5 && "•"}
                  </span>
                ))}
              </div>
            </div>
            {/* Tooltip Arrow */}
            <div
              className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 
                         bg-earth-dark/90 rotate-45 border-r border-b border-earth-light/10"
            ></div>
          </div>
        </motion.span>
      )}
    </motion.div>
  );
};

export default ProjectTechnologies;
