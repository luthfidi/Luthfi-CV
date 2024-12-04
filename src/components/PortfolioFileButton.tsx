import React from 'react';
import { FileSpreadsheet } from 'lucide-react';

const PortfolioFileButton: React.FC = () => {
  const handleDownload = () => {
    window.open('Luthfi-Hadi-Portfolio.pdf', '_blank');
  };

  return (
    <button 
      onClick={handleDownload}
      className="flex items-center justify-center gap-2 px-4 py-2 
      bg-primary text-primary-foreground rounded-lg 
      hover:bg-primary/90 transition-colors 
      shadow-md hover:shadow-lg focus:outline-none 
      focus:ring-2 focus:ring-primary/50 text-xs w-auto"
    >
      <FileSpreadsheet className="w-5 h-5" />
      <span className="font-medium">Portfolio (PDF)</span>
    </button>
  );
};

export default PortfolioFileButton;