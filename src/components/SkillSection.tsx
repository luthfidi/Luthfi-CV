import React from "react";

interface SkillSectionProps {
  skills: {
    [category: string]: string[] | { name: string; level?: string }[];
  };
}

const SkillSection: React.FC<SkillSectionProps> = ({ skills }) => (
  <div className="grid gap-6">
    {Object.entries(skills).map(([category, items]) => (
      <div key={category} className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="font-bold mb-4 text-lg text-primary">{category}:</h3>
        <div className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <span
              key={index}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
            >
              {typeof item === "object" ? item.name : item}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default SkillSection;
