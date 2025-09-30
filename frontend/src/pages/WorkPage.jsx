import React, { useState } from 'react';
import { projects } from '../data/mockData';
import ProjectDetailDrawer from '../components/ProjectDetailDrawer';

const WorkPage = () => {
  const [projectList, setProjectList] = useState(projects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [draggingId, setDraggingId] = useState(null);

  const handleDragStart = (e, id) => {
    setDraggingId(id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e, id) => {
    e.preventDefault();
    if (draggingId === id) return;

    const draggedIndex = projectList.findIndex(p => p.id === draggingId);
    const targetIndex = projectList.findIndex(p => p.id === id);

    if (draggedIndex !== -1 && targetIndex !== -1) {
      const newList = [...projectList];
      const [removed] = newList.splice(draggedIndex, 1);
      newList.splice(targetIndex, 0, removed);
      setProjectList(newList);
    }
  };

  const handleDragEnd = () => {
    setDraggingId(null);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDrawer = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
          Selected Work
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          A collection of interaction design projects focusing on user experience and digital innovation.
        </p>
      </section>

      {/* Projects Grid - Draggable */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projectList.map((project) => (
            <div
              key={project.id}
              draggable
              onDragStart={(e) => handleDragStart(e, project.id)}
              onDragOver={(e) => handleDragOver(e, project.id)}
              onDragEnd={handleDragEnd}
              onClick={() => handleProjectClick(project)}
              className={`group cursor-move transition-all duration-300 ${
                draggingId === project.id ? 'opacity-50 scale-95' : 'opacity-100'
              }`}
            >
              {/* Project Thumbnail */}
              <div className="relative overflow-hidden bg-gray-100 aspect-[4/3] mb-4">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  draggable="false"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Project
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium tracking-tight group-hover:opacity-60 transition-opacity">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <p className="text-sm text-gray-600">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Drag Hint */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400 italic">Drag thumbnails to rearrange</p>
        </div>
      </section>

      {/* Project Detail Drawer */}
      <ProjectDetailDrawer
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={handleCloseDrawer}
      />
    </div>
  );
};

export default WorkPage;
