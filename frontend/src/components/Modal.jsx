import React, { useState, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show only once per user session
    const hasShown = sessionStorage.getItem('devyug_latest_work_shown');
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('devyug_latest_work_shown', 'true');
      }, 1500); // delay popup for a smooth entry
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleVisit = () => {
    window.open('https://www.renvikservices.com/', '_blank');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all duration-300 scale-100 p-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Tag */}
        <span className="inline-block px-3 py-1 bg-[#0A346C]/10 text-[#0A346C] text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
          Latest Custom Deployment 🚀
        </span>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-2 font-display">
          Renvik Services
        </h3>
        
        {/* Description */}
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          We recently designed and deployed a high-speed corporate platform built for Renvik Services. Optimized for conversions, fluid viewports, and modern SEO structures.
        </p>

        {/* Image Mockup */}
        <div className="aspect-video bg-gray-50 border border-gray-200 rounded-xl overflow-hidden mb-6 flex items-center justify-center p-4">
          <img 
            src={`${process.env.PUBLIC_URL}/renvik.webp`} 
            alt="Renvik Services Platform" 
            className="max-h-full max-w-full object-contain rounded-md shadow-sm"
          />
        </div>

        {/* CTAs */}
        <div className="flex gap-3 justify-end">
          <Button
            variant="outline"
            onClick={handleClose}
            className="border-gray-200 text-gray-600 hover:bg-gray-50 rounded-xl h-11"
          >
            Close
          </Button>
          <Button
            onClick={handleVisit}
            className="bg-[#0A346C] hover:bg-[#0D4080] text-white rounded-xl h-11 shadow-lg shadow-[#0A346C]/20"
          >
            Visit Live Production
            <ExternalLink size={14} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
