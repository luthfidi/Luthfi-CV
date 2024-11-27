import React from "react";

interface ProjectProps {
  title: string;
  image: string;
  description: string;
  techStack: string[];
  link?: string; // Tambahkan properti link opsional
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  image,
  description,
  techStack,
  link = "#", // Default link jika tidak disediakan
}) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="block transform transition-all duration-300 hover:scale-[1.02] focus:scale-[1.02] hover:shadow-lg focus:shadow-lg"
  >
    <div className="card-soft overflow-hidden cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-36 object-cover border-b border-border"
      />
      <div className="p-3">
        <h3 className="font-medium text-sm section-title mb-1.5">{title}</h3>
        <p className="text-xs text-soft mb-2 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-1">
          {techStack.map((tech, index) => (
            <span key={index} className="badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </a>
);

export default ProjectCard;