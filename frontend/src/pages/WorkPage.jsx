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

  // Bento grid layout - define which projects should be large
  const getBentoSize = (index) => {
    // Make 1st and 4th project larger (2x2), others normal
    if (index === 0 || index === 3) {
      return 'md:col-span-2 md:row-span-2';
    }
    return 'md:col-span-1 md:row-span-1';
  };

  const getAspectRatio = (index) => {
    if (index === 0 || index === 3) {
      return 'aspect-[4/3]';
    }
    return 'aspect-[4/3]';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Name that moves to corner on scroll */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <h1 className="text-7xl md:text-9xl font-light tracking-tight mb-8 text-white">
          Anirudh
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl">
          Interaction Designer crafting meaningful digital experiences
        </p>
      </section>

      {/* Bento Grid - Google Material Design Style */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-auto gap-4 md:gap-6">
          {projectList.map((project, index) => (
            <div
              key={project.id}
              draggable
              onDragStart={(e) => handleDragStart(e, project.id)}
              onDragOver={(e) => handleDragOver(e, project.id)}
              onDragEnd={handleDragEnd}
              onClick={() => handleProjectClick(project)}
              className={`group cursor-move transition-all duration-300 project-card ${
                draggingId === project.id ? 'opacity-50 scale-95' : 'opacity-100'
              } ${getBentoSize(index)}`}
            >
              {/* Project Card with Material Design Corner Radius */}
              <div 
                className="relative overflow-hidden bg-zinc-900 border border-zinc-800 h-full elevation-1 hover:elevation-3 transition-all duration-300"
                style={{ borderRadius: '24px' }}
              >
                {/* Project Thumbnail */}
                <div className={`relative overflow-hidden ${getAspectRatio(index)}`}>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    draggable="false"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Project
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium tracking-tight text-white group-hover:text-zinc-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-zinc-500">{project.year}</span>
                  </div>
                  <p className="text-sm text-zinc-400">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Drag Hint */}
        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-600 italic">Drag thumbnails to rearrange</p>
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
