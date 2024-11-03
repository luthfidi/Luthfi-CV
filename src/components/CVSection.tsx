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
  <div className="bg-white rounded-xl shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="font-bold text-xl mb-2 text-primary">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-100 px-2 py-1 rounded-md text-sm text-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
