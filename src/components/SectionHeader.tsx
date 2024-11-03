import React from "react";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  icon: LucideIcon;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, icon: Icon }) => (
  <div className="flex items-center mb-3 border-b border-primary pb-2">
    <Icon className="mr-2 text-primary" size={20} />
    <h2 className="text-lg font-semibold text-primary">{title}</h2>
  </div>
);

export default SectionHeader;
