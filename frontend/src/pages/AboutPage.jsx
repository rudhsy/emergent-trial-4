import React from 'react';
import { aboutContent } from '../data/mockData';
import { Mail, ExternalLink } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
          About
        </h1>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-light tracking-tight mb-4">{aboutContent.name}</h2>
              <p className="text-xl text-gray-600 mb-2">{aboutContent.title}</p>
              <p className="text-gray-500">{aboutContent.experience} of experience</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {aboutContent.bio}
              </p>
            </div>

            {/* Contact */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Contact</h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${aboutContent.email}`}
                  className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors group"
                >
                  <Mail size={18} className="text-gray-400 group-hover:text-black transition-colors" />
                  <span>{aboutContent.email}</span>
                </a>
                <a
                  href={aboutContent.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors group"
                >
                  <ExternalLink size={18} className="text-gray-400 group-hover:text-black transition-colors" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={aboutContent.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors group"
                >
                  <ExternalLink size={18} className="text-gray-400 group-hover:text-black transition-colors" />
                  <span>Behance</span>
                </a>
              </div>
            </div>
          </div>

          {/* Skills Sidebar */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-6">Skills</h3>
            <div className="space-y-3">
              {aboutContent.skills.map((skill, index) => (
                <div key={index} className="text-gray-700">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
