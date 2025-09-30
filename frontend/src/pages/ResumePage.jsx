import React from 'react';
import { resumeContent } from '../data/mockData';
import { Download } from 'lucide-react';

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
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col items-center text-center gap-6 mb-12">
          <h1 className="text-6xl md:text-8xl font-light tracking-tight text-white">
            Resume
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Download or view my complete resume
          </p>
          <button
            onClick={handleDownload}
            className="bg-white text-black hover:bg-zinc-200 transition-colors px-8 py-4 flex items-center space-x-3 font-medium elevation-2 mt-4"
            style={{ borderRadius: '20px' }}
          >
            <Download size={20} />
            <span>Download Resume PDF</span>
          </button>
        </div>
      </section>

      {/* PDF Embed Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 pb-32">
        <div 
          className="bg-zinc-900 border border-zinc-800 overflow-hidden elevation-2" 
          style={{ height: '1000px', borderRadius: '24px' }}
        >
          {/* TODO: Replace with your actual PDF path */}
          <iframe
            src={resumeContent.pdfUrl}
            title="Resume PDF"
            className="w-full h-full"
            frameBorder="0"
          >
            <div className="p-8 text-center">
              <p className="text-zinc-400 mb-4">
                Your browser does not support PDF viewing.
              </p>
              <button
                onClick={handleDownload}
                className="text-white underline hover:text-zinc-300 transition-colors"
              >
                Download the PDF instead
              </button>
            </div>
          </iframe>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
