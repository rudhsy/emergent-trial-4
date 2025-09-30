import React, { useState } from 'react';
import { projects } from '../data/mockData';
import ProjectDetailDrawer from '../components/ProjectDetailDrawer';

const WorkPage = () => {
  const [projectList, setProjectList] = useState(projects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [draggingId, setDraggingId] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Hero Section - Centered name that fades on scroll */}
      <section className={`max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 transition-all duration-500 ${scrolled ? 'opacity-0 -translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <div className="text-center">
          <h1 className="text-7xl md:text-9xl font-light tracking-tight mb-8 text-white">
            ANIRUDH
          </h1>
          <p className="text-xl text-zinc-400">
            Interaction Designer crafting meaningful digital experiences
          </p>
        </div>
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
              className={`group cursor-pointer transition-all duration-400 project-card ${
                draggingId === project.id ? 'opacity-50' : 'opacity-100'
              } ${getBentoSize(index)}`}
              style={{ transitionProperty: 'opacity, transform, grid-column, grid-row' }}
            >
              {/* Project Card with Material Design Corner Radius */}
              <div 
                className="relative overflow-hidden bg-zinc-900 border border-zinc-800 h-full elevation-1 hover:elevation-3 transition-all duration-300"
                style={{ borderRadius: '24px' }}
              >
                {/* Project Thumbnail - Plain Image */}
                <div className={`relative overflow-hidden ${getAspectRatio(index)}`}>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    draggable="false"
                  />
                  
                  {/* Overlay Gradient for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Info - Slides up from bottom on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <div className="flex items-end justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium tracking-tight text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-zinc-300">{project.category}</p>
                    </div>
                    <span className="text-xs text-zinc-400 ml-4">{project.year}</span>
                  </div>
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
