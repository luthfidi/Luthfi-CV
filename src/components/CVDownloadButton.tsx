import React from 'react';
import { FileText } from 'lucide-react';

const CVDownloadButton: React.FC = () => {
  const handleDownload = () => {
    // Buka PDF di tab baru
    window.open('./assets/Luthfi-Hadi-CV.pdf', '_blank');
  };

  return (
    <div className="flex justify-center mb-4">
      <button 
        onClick={handleDownload}
        className="flex items-center justify-center gap-2 px-4 py-2 
        bg-primary text-primary-foreground rounded-lg 
        hover:bg-primary/90 transition-colors 
        shadow-md hover:shadow-lg focus:outline-none 
        focus:ring-2 focus:ring-primary/50"
      >
        <FileText className="w-5 h-5" />
        <span className="font-medium text-sm">Download Full CV (PDF)</span>
      </button>
    </div>
  );
};

export default CVDownloadButton;