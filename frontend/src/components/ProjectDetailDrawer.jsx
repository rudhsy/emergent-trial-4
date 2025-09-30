import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

const ProjectDetailDrawer = ({ project, isOpen, onClose }) => {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-500 z-50 ${
          isOpen ? 'opacity-60' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Full Screen Drawer */}
      <div
        className={`fixed inset-0 bg-[#0f0f10] z-50 transition-transform duration-700 ease-in-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Close Button - Floating with Material Design styling */}
        <button
          onClick={onClose}
          className="fixed top-6 right-6 z-10 p-3 bg-zinc-900/80 backdrop-blur-glass border border-zinc-800 elevation-2 hover:bg-zinc-800 transition-colors"
          style={{ borderRadius: '20px' }}
          aria-label="Close"
        >
          <X size={24} className="text-white" />
        </button>

        {/* Content - Full Screen Scrollable */}
        <div className="h-full overflow-y-auto">
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-24">
            {/* Project Header */}
            <div className="mb-16">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-white">
                    {project.title}
                  </h2>
                  <p className="text-xl text-zinc-400 mb-3">{project.category}</p>
                  <p className="text-zinc-500">{project.year}</p>
                </div>
              </div>
              <p className="text-xl text-zinc-300 leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>

            {/* Project Images - Behance Reel Style with Material Design Corner Radius */}
            <div className="space-y-8 mb-16">
              {project.images.map((image, index) => (
                <div 
                  key={index} 
                  className="w-full overflow-hidden elevation-2"
                  style={{ borderRadius: '24px' }}
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>

            {/* View on Behance Link */}
            <div className="pt-12 border-t border-zinc-800">
              <a
                href={project.behanceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 text-white hover:text-zinc-300 transition-colors group"
              >
                <span className="text-lg">View full project on Behance</span>
                <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailDrawer;
