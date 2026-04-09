import React from 'react';
import { ExternalLink } from 'lucide-react';

const witmatesLogo = `${process.env.PUBLIC_URL}/witmates_logo.webp`;

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Ayekart',
      description: 'Agricultural supply chain platform',
      url: 'https://ayekart.com/',
      category: 'Business',
      image: 'https://customer-assets.emergentagent.com/job_quick-launch-109/artifacts/nyaejq15_image.png'
    },
    {
      title: 'Vyan Villa',
      description: 'Luxury villa booking website',
      url: 'https://vyanvilla.com/',
      category: 'Hospitality',
      image: 'https://customer-assets.emergentagent.com/job_quick-launch-109/artifacts/742pwu9g_image.png'
    },
    {
      title: 'Uplers Platform',
      description: 'Professional talent hiring platform',
      url: 'https://platform.uplers.com/',
      category: 'SaaS',
      image: 'https://customer-assets.emergentagent.com/job_quick-launch-109/artifacts/ymt1veio_image.png'
    },
    {
      title: 'Mobibulls Media',
      description: 'Digital marketing agency website',
      url: 'https://mobibullsmedia.com/',
      category: 'Agency',
      image: 'https://customer-assets.emergentagent.com/job_quick-launch-109/artifacts/ew5v4sdx_image.png'
    },
    {
      title: 'ARC Robotics',
      description: 'Robotics company portfolio',
      url: 'https://www.arcrobotics.in/',
      category: 'Technology',
      image: 'https://customer-assets.emergentagent.com/job_quick-launch-109/artifacts/8m7nruys_image.png'
    },
    {
      title: 'Assitly AI',
      description: 'AI assistant platform UI',
      url: 'https://assitly-ai-ui-mspi.vercel.app/#',
      category: 'SaaS',
      image: 'https://customer-assets.emergentagent.com/job_quick-launch-109/artifacts/4i0dl5q4_image.png'
    },
    {
      title: 'Witmates',
      description: 'Recruitment and staffing website',
      url: 'https://www.witmates.com/',
      category: 'Business',
      image: witmatesLogo
    }
  ];

  return (
    <section id="portfolio" data-testid="portfolio-section" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-[#0A346C] uppercase tracking-wider mb-3">
            Our Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-4">
            Projects We're Proud Of
          </h2>
          <p className="text-lg text-[#4A5568]">
            Real websites we've built for real businesses. Each project delivered with quality and care.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              data-testid={`portfolio-${index}`}
            >
              <div className="bg-[#F6F6F6] rounded-xl overflow-hidden hover:shadow-xl transition-all border border-gray-100 hover:border-[#0A346C]/20">
                {/* Project Preview */}
                <div className="aspect-video bg-white border-b border-gray-200 flex items-center justify-center relative overflow-hidden p-4">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <div className="text-center text-[#0A346C] p-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-[#0A346C]/10 rounded-xl flex items-center justify-center">
                        <span className="text-2xl font-bold">{project.title[0]}</span>
                      </div>
                      <p className="text-lg font-semibold">{project.title}</p>
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#0A346C]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-center text-white">
                      <ExternalLink size={32} className="mx-auto mb-2" />
                      <p className="font-medium">Visit Website</p>
                    </div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-[#1A1A2E] group-hover:text-[#0A346C] transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-[#0A346C]/10 text-[#0A346C] text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-[#4A5568]">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
