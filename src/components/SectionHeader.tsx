import React from "react";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  icon: LucideIcon;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, icon: Icon }) => (
  <div className="flex items-center mb-4 border-b-2 border-primary pb-2">
    <Icon className="mr-3 text-primary" size={24} />
    <h2 className="text-2xl font-semibold text-primary">{title}</h2>
  </div>
);

export default SectionHeader;
