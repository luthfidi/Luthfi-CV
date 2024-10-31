import React from "react";

interface SkillSectionProps {
  skills: {
    [category: string]: string[] | { name: string; level?: string }[];
  };
}

const SkillSection: React.FC<SkillSectionProps> = ({ skills }) => (
  <div className="grid md:grid-cols-3 gap-4">
    {Object.entries(skills).map(([category, items]) => (
      <div key={category} className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-bold mb-2 capitalize text-secondary">
          {category
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
        </h3>
        <ul className="list-disc list-inside text-sm">
          {items.map((item, index) => (
            <li key={index}>
              {typeof item === "object"
                ? `${item.name} (${item.level || ""})`
                : item}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default SkillSection;
