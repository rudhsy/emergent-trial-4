import React, { useEffect, useState } from 'react';
import { X, ArrowLeft, ExternalLink } from 'lucide-react';

const ProjectDetailDrawer = ({ project, isOpen, onClose }) => {
  const [showBottomBar, setShowBottomBar] = useState(false);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setShowBottomBar(false);
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

      {/* Full Screen Drawer - Simple slide from bottom animation */}
      <div
        className={`fixed inset-0 bg-[#0f0f10] z-50 transition-transform duration-500 ease-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Top Navigation Bar - Close Button Only */}
        <div className="fixed top-0 right-0 z-10 px-6 py-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-3 bg-zinc-900/80 backdrop-blur-glass border border-zinc-800 elevation-2 hover:bg-zinc-800 transition-colors"
            style={{ borderRadius: '20px' }}
            aria-label="Close"
          >
            <X size={24} className="text-white" />
          </button>
        </div>

        {/* Content - Full Screen Scrollable */}
        <div 
          className="h-full overflow-y-auto"
          onMouseMove={(e) => {
            // Show bottom bar when mouse is near bottom
            const windowHeight = window.innerHeight;
            if (e.clientY > windowHeight - 100) {
              setShowBottomBar(true);
            } else {
              setShowBottomBar(false);
            }
          }}
        >
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-24 pb-32">
            {/* Project Header */}
            <div className="mb-16">
              <div className="mb-6">
                {/* Back Button + Project Title */}
                <div className="flex items-center gap-4 mb-6">
                  <button
                    onClick={onClose}
                    className="p-3 bg-zinc-900/80 backdrop-blur-glass border border-zinc-800 elevation-2 hover:bg-zinc-800 transition-colors flex-shrink-0"
                    style={{ borderRadius: '20px' }}
                    aria-label="Back"
                  >
                    <ArrowLeft size={24} className="text-white" />
                  </button>
                  <h2 className="text-5xl md:text-6xl font-light tracking-tight text-white">
                    {project.title}
                  </h2>
                </div>
                <p className="text-xl text-zinc-400 mb-3">{project.category}</p>
                <p className="text-zinc-500">{project.year}</p>
              </div>
              <p className="text-xl text-zinc-300 leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>

            {/* Project Images - Full Width without Bento Grid */}
            <div className="space-y-8 mb-16">
              {project.images.map((image, index) => (
                <div key={index} className="w-full">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-auto object-cover"
                    style={{ borderRadius: '24px' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Menu Bar - Slides up on hover */}
        <div
          className={`fixed bottom-0 left-0 right-0 z-20 transition-transform duration-500 ease-out ${
            showBottomBar ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="bg-zinc-900/95 backdrop-blur-glass border-t border-zinc-800 px-6 md:px-12 py-6">
            <div className="max-w-5xl mx-auto flex items-center justify-center">
              <a
                href={project.behanceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 text-white hover:text-zinc-300 transition-colors group px-6 py-3 bg-zinc-800 hover:bg-zinc-700 transition-all"
                style={{ borderRadius: '20px' }}
              >
                <span className="text-base font-medium">View on Behance</span>
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
