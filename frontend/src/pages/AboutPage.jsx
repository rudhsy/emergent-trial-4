import React from 'react';
import { aboutContent, resumeContent } from '../data/mockData';
import { Mail, ExternalLink, Briefcase, GraduationCap } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16">
        <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-8 text-white">
          About
        </h1>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            {/* Bio Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-light tracking-tight mb-4 text-white">{aboutContent.name}</h2>
                <p className="text-xl text-zinc-400 mb-2">{aboutContent.title}</p>
                <p className="text-zinc-500">{aboutContent.experience} of experience</p>
              </div>

              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-zinc-300 leading-relaxed text-lg">
                  {aboutContent.bio}
                </p>
              </div>
            </div>

            {/* Experience Section */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-6">
                <Briefcase size={24} className="text-zinc-400" />
                <h3 className="text-2xl font-light tracking-tight text-white">Experience</h3>
              </div>
              
              <div className="space-y-6">
                {resumeContent.sections
                  .find(s => s.title === 'Experience')?.items.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-zinc-900/30 p-6 elevation-1 space-y-3"
                    style={{ borderRadius: '24px' }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h4 className="text-lg font-medium tracking-tight text-white">
                          {item.role}
                        </h4>
                        <p className="text-zinc-400">{item.company}</p>
                      </div>
                      <span className="text-sm text-zinc-500 md:text-right whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-zinc-300 leading-relaxed text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-6">
                <GraduationCap size={24} className="text-zinc-400" />
                <h3 className="text-2xl font-light tracking-tight text-white">Education</h3>
              </div>
              
              <div className="space-y-6">
                {resumeContent.sections
                  .find(s => s.title === 'Education')?.items.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-zinc-900/30 p-6 elevation-1 space-y-3"
                    style={{ borderRadius: '24px' }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h4 className="text-lg font-medium tracking-tight text-white">
                          {item.degree}
                        </h4>
                        <p className="text-zinc-400">{item.institution}</p>
                      </div>
                      <span className="text-sm text-zinc-500 md:text-right whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-zinc-300 leading-relaxed text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div 
              className="pt-8 bg-zinc-900/30 p-8 elevation-1"
              style={{ borderRadius: '24px' }}
            >
              <h3 className="text-sm uppercase tracking-wider text-zinc-500 mb-6">Contact</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${aboutContent.email}`}
                  className="flex items-center space-x-3 text-zinc-300 hover:text-white transition-colors group"
                >
                  <Mail size={20} className="text-zinc-400 group-hover:text-white transition-colors" />
                  <span>{aboutContent.email}</span>
                </a>
                <a
                  href={aboutContent.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-zinc-300 hover:text-white transition-colors group"
                >
                  <ExternalLink size={20} className="text-zinc-400 group-hover:text-white transition-colors" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={aboutContent.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-zinc-300 hover:text-white transition-colors group"
                >
                  <ExternalLink size={20} className="text-zinc-400 group-hover:text-white transition-colors" />
                  <span>Behance</span>
                </a>
              </div>
            </div>
          </div>

          {/* Skills Sidebar */}
          <div>
            <div 
              className="bg-zinc-900/30 p-8 elevation-1 sticky top-32"
              style={{ borderRadius: '24px' }}
            >
              <h3 className="text-sm uppercase tracking-wider text-zinc-500 mb-6">Skills</h3>
              <div className="space-y-3">
                {aboutContent.skills.map((skill, index) => (
                  <div key={index} className="text-zinc-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
