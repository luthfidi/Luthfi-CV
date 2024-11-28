import React from 'react';
import { ExternalLink } from 'lucide-react';

const PortfolioButton: React.FC = () => {
  const handleOpenPortfolio = () => {
    window.open('https://luthfidi.github.io/Luthfi-Portfolio-Website/index-en#about', '_blank');
  };

  return (
    <div className="flex justify-center mb-4">
      <button 
        onClick={handleOpenPortfolio}
        className="flex items-center justify-center gap-2 px-4 py-2 
        bg-primary text-primary-foreground rounded-lg 
        hover:bg-primary/90 transition-colors 
        shadow-md hover:shadow-lg focus:outline-none 
        focus:ring-2 focus:ring-primary/50"
      >
        <ExternalLink className="w-5 h-5" />
        <span className="font-medium text-sm">Portfolio Website</span>
      </button>
    </div>
  );
};

export default PortfolioButton;