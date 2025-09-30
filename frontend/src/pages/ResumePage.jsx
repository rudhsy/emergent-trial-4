import React from 'react';
import { resumeContent } from '../data/mockData';
import { Download } from 'lucide-react';
import { Button } from '../components/ui/button';

const ResumePage = () => {
  const handleDownload = () => {
    // TODO: Replace with your actual PDF path
    const link = document.createElement('a');
    link.href = resumeContent.pdfUrl;
    link.download = 'Anirudh_A_Resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h1 className="text-6xl md:text-8xl font-light tracking-tight text-white">
            Resume
          </h1>
          <button
            onClick={handleDownload}
            className="bg-white text-black hover:bg-zinc-200 transition-colors px-6 py-3 flex items-center space-x-2 font-medium elevation-2"
            style={{ borderRadius: '20px' }}
          >
            <Download size={18} />
            <span>Download PDF</span>
          </button>
        </div>
      </section>

      {/* Resume Content */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 pb-32">
        <div className="space-y-16">
          {resumeContent.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-8">
              {/* Section Title */}
              <h2 className="text-sm uppercase tracking-wider text-zinc-500 pb-4 border-b border-zinc-800">
                {section.title}
              </h2>

              {/* Section Items */}
              <div className="space-y-10">
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="bg-zinc-900/30 p-8 elevation-1 space-y-4"
                    style={{ borderRadius: '24px' }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-medium tracking-tight text-white">
                          {item.role || item.degree}
                        </h3>
                        <p className="text-zinc-400">{item.company || item.institution}</p>
                      </div>
                      <span className="text-sm text-zinc-500 md:text-right whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-zinc-300 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* PDF Embed Section */}
        <div className="mt-16 pt-16 border-t border-zinc-800">
          <h2 className="text-sm uppercase tracking-wider text-zinc-500 mb-6">View Full Resume</h2>
          <div 
            className="bg-zinc-900 border border-zinc-800 overflow-hidden elevation-2" 
            style={{ height: '800px', borderRadius: '24px' }}
          >
            {/* TODO: Replace with your actual PDF path */}
            <iframe
              src={resumeContent.pdfUrl}
              title="Resume PDF"
              className="w-full h-full"
              frameBorder="0"
            >
              <p className="p-8 text-center text-zinc-400">
                Your browser does not support PDF viewing.
                <a href={resumeContent.pdfUrl} className="text-white underline ml-2">
                  Download the PDF
                </a>
              </p>
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
