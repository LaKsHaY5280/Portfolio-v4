interface ProjectPlaceholderProps {
  index: number;
}

const ProjectPlaceholder = ({ index }: ProjectPlaceholderProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
    >
      {/* Background with gradient */}
      <rect
        width="800"
        height="500"
        className="fill-current text-earth-dark opacity-[0.03]"
      />

      {/* Animated Grid Pattern */}
      <pattern
        id={`grid-${index}`}
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
        className="animate-[pulse_4s_ease-in-out_infinite]"
      >
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke="#BBA58F"
          strokeWidth="0.5"
          opacity="0.1"
        />
      </pattern>
      <rect width="800" height="500" fill={`url(#grid-${index})`} />

      {/* Project Number with enhanced styling */}
      <text
        x="400"
        y="250"
        textAnchor="middle"
        dominantBaseline="middle"
        className="font-gemola"
        fill="#BBA58F"
        opacity="0.15"
        fontSize="160"
      >
        {(index + 1).toString().padStart(2, "0")}
      </text>

      {/* Multiple Decorative Circles */}
      <g className="animate-[spin_30s_linear_infinite]">
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
  );
};

export default ProjectPlaceholder;
