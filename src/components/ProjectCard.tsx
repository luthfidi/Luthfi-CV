import React from "react";

interface ProjectProps {
  title: string;
  image: string;
  description: string;
  techStack: string[];
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  image,
  description,
  techStack,
}) => (
  <div className="card-soft overflow-hidden">
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
);

export default ProjectCard;
