import React from 'react';
import { X, ExternalLink } from 'lucide-react';

const ProjectDetailDrawer = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-500 z-40 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed inset-x-0 bottom-0 bg-white z-50 transition-transform duration-700 ease-in-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ height: '90vh', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 md:top-8 md:right-8 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X size={24} className="text-black" />
        </button>

        {/* Content */}
        <div className="h-full overflow-y-auto">
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-16">
            {/* Project Header */}
            <div className="mb-12">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
                    {project.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-2">{project.category}</p>
                  <p className="text-gray-500">{project.year}</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>

            {/* Project Images - Behance Reel Style */}
            <div className="space-y-8 mb-12">
              {project.images.map((image, index) => (
                <div key={index} className="w-full">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>

            {/* View on Behance Link */}
            <div className="pt-8 border-t border-gray-200">
              <a
                href={project.behanceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-black hover:opacity-60 transition-opacity"
              >
                <span className="text-lg">View full project on Behance</span>
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailDrawer;
