import React from 'react';
import { Target, Users, Rocket } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Rocket,
      title: 'Fast & Modern',
      description: 'Websites built with cutting-edge technology for speed and performance.'
    },
    {
      icon: Users,
      title: 'Simple Process',
      description: 'No technical knowledge needed. We handle everything for you.'
    },
    {
      icon: Target,
      title: 'High Quality, Low Cost',
      description: 'Professional results without breaking your budget.'
    }
  ];

  return (
    <section id="about" data-testid="about-section" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Image Column */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#FFD700]/10 blur-3xl" />
              <img
                src="https://images.pexels.com/photos/5496459/pexels-photo-5496459.jpeg"
                alt="Developer coding"
                className="relative w-full aspect-square object-cover border border-white/10"
                data-testid="about-image"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="col-span-12 lg:col-span-7">
            <p className="text-xs tracking-[0.2em] uppercase font-mono text-[#FFD700] mb-4">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              We Build Your Online Presence
              <br />
              <span className="text-[#A1A1AA]">Without The Stress</span>
            </h2>
            <p className="text-base leading-relaxed text-[#A1A1AA] mb-8">
              We help businesses, startups, and individuals create their online presence quickly and affordably. 
              By combining AI tools with expert developers, we reduce time, cost, and errors — so you get a 
              professional website faster than traditional agencies.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="p-5 bg-[#0a0a0a] border border-white/10 card-hover"
                  data-testid={`about-value-${index}`}
                >
                  <value.icon size={24} className="text-[#FFD700] mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-[#A1A1AA]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
