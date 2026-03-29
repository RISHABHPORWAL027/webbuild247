import React from 'react';
import { ExternalLink } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Ayekart',
      description: 'Agricultural supply chain platform',
      url: 'https://ayekart.com/',
      image: 'https://images.unsplash.com/photo-1762330463863-a6a399beb5ba?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwdWl8ZW58MHx8fHwxNzc0ODEzMDU2fDA&ixlib=rb-4.1.0&q=85',
      span: 'col-span-12 md:col-span-8'
    },
    {
      title: 'Vyan Villa',
      description: 'Luxury villa booking website',
      url: 'https://vyanvilla.com/',
      image: 'https://images.pexels.com/photos/5082577/pexels-photo-5082577.jpeg',
      span: 'col-span-12 md:col-span-4'
    },
    {
      title: 'Uplers Platform',
      description: 'Professional talent hiring platform',
      url: 'https://platform.uplers.com/',
      image: 'https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg',
      span: 'col-span-12 md:col-span-4'
    },
    {
      title: 'Mobibulls Media',
      description: 'Digital marketing agency website',
      url: 'https://mobibullsmedia.com/',
      image: 'https://images.pexels.com/photos/5496459/pexels-photo-5496459.jpeg',
      span: 'col-span-12 md:col-span-8'
    },
    {
      title: 'ARC Robotics',
      description: 'Robotics company portfolio',
      url: 'https://www.arcrobotics.in/',
      image: 'https://images.unsplash.com/photo-1677212004257-103cfa6b59d0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYWJzdHJhY3QlMjBkYXJrfGVufDB8fHx8MTc3NDgxMzA2Mnww&ixlib=rb-4.1.0&q=85',
      span: 'col-span-12 md:col-span-6'
    },
    {
      title: 'Assitly AI',
      description: 'AI assistant platform UI',
      url: 'https://assitly-ai-ui-mspi.vercel.app/#',
      image: 'https://images.unsplash.com/photo-1762279389042-9439bfb6c155?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMHRlY2glMjBiYWNrZ3JvdW5kJTIwZGFya3xlbnwwfHx8fDE3NzQ4MTMwNjF8MA&ixlib=rb-4.1.0&q=85',
      span: 'col-span-12 md:col-span-6'
    }
  ];

  return (
    <section id="portfolio" data-testid="portfolio-section" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] uppercase font-mono text-[#FFD700] mb-4">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Recent Projects
          </h2>
          <p className="text-base text-[#A1A1AA] max-w-2xl mx-auto">
            See what we've built for our clients. Each project is delivered fast with quality.
          </p>
        </div>

        {/* Portfolio Grid - Tetris Style */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${project.span} group portfolio-item relative overflow-hidden border border-white/10 card-hover`}
              data-testid={`portfolio-${index}`}
            >
              {/* Image */}
              <div className="aspect-[16/10] w-full relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
              </div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-[#FFD700] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#A1A1AA]">{project.description}</p>
                  </div>
                  <div className="p-2 bg-white/10 border border-white/20 group-hover:bg-[#FFD700] group-hover:border-[#FFD700] transition-all">
                    <ExternalLink size={18} className="text-white group-hover:text-black transition-colors" />
                  </div>
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
