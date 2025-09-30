import React from 'react';
import { aboutContent } from '../data/mockData';
import { Mail, ExternalLink } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-8 text-white">
          About
        </h1>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
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

            {/* Contact */}
            <div 
              className="pt-8 mt-8 border-t border-zinc-800 bg-zinc-900/30 p-8 elevation-1"
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
