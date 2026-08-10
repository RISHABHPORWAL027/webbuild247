import React from 'react';
import { ExternalLink } from 'lucide-react';
import Typewriter from '@/components/Typewriter';
import ScrollReveal from '@/components/ScrollReveal';

const phinuraLogo = `${process.env.PUBLIC_URL}/phinura.png`;
const renvikLogo = `${process.env.PUBLIC_URL}/renvik.webp`;
const nrkSteelLogo = `${process.env.PUBLIC_URL}/nrksteel.avif`;

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
      url: 'http://assistlyai.co.in/',
      category: 'SaaS',
      image: 'https://customer-assets.emergentagent.com/job_quick-launch-109/artifacts/4i0dl5q4_image.png'
    },
    {
      title: 'Phinura',
      description: 'Advisor and investment platform',
      url: 'https://www.phinura.com/',
      category: 'Financial',
      image: phinuraLogo
    },
    {
      title: 'Renvik Services',
      description: 'Industrial engineering solutions',
      url: 'https://www.renvikservices.com/',
      category: 'Industrial',
      image: renvikLogo
    },
    {
      title: 'Nrk Steel',
      description: 'Steel fabrication and architecture studio',
      url: 'https://cozy-corner-studio-20.vercel.app/',
      category: 'Creative',
      image: nrkSteelLogo
    }
  ];

  const reelProjects = [...projects, ...projects];

  return (
    <section id="portfolio" data-testid="portfolio-section" className="py-20 lg:py-28 bg-white overflow-hidden border-t border-slate-100">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-280px * 9 - 2rem * 9)); }
        }
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-[#0A346C] uppercase tracking-wider mb-3">
            Our Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-4 font-display">
            <Typewriter text="Projects We're Proud Of" />
          </h2>
          <p className="text-lg text-[#4A5568]">
            Real websites we've built for real businesses. Each project delivered with quality and care.
          </p>
        </div>
      </div>

      {/* Auto-Scrollable Single Line Reel */}
      <ScrollReveal delay="100ms">
        <div className="relative w-full marquee-container overflow-hidden py-4">
          <div
            className="flex gap-8 marquee-content"
            style={{
              width: 'max-content',
              animation: 'marquee 30s linear infinite'
            }}
          >
            {reelProjects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-[280px] shrink-0"
                data-testid={`portfolio-${index}`}
              >
                <div className="bg-[#F6F6F6] rounded-xl overflow-hidden hover:shadow-xl transition-all border border-gray-100 hover:border-[#0A346C]/20 h-full flex flex-col justify-between">
                  {/* Project Preview */}
                  <div className="aspect-[4/3] bg-white border-b border-gray-200 flex items-center justify-center relative overflow-hidden p-4">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    ) : (
                      <div className="text-center text-[#0A346C] p-4">
                        <div className="w-12 h-12 mx-auto mb-2 bg-[#0A346C]/10 rounded-xl flex items-center justify-center">
                          <span className="text-xl font-bold">{project.title[0]}</span>
                        </div>
                        <p className="text-sm font-semibold">{project.title}</p>
                      </div>
                    )}
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#0A346C]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center text-white p-3">
                        <ExternalLink size={20} className="mx-auto mb-1" />
                        <p className="text-xs font-bold tracking-wider">VISIT SITE</p>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-4 text-left">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-bold text-[#1A1A2E] text-sm truncate group-hover:text-[#0A346C] transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-[10px] bg-[#0A346C]/10 text-[#0A346C] font-semibold px-2 py-0.5 rounded-full shrink-0">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-xs text-[#718096] line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default PortfolioSection;
