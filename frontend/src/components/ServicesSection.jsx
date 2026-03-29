import React from 'react';
import { Building2, Briefcase, Layout, ShoppingCart, RefreshCw, Gauge, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: 'Business Websites',
      description: 'Professional websites that represent your brand and convert visitors into customers.'
    },
    {
      icon: Briefcase,
      title: 'Portfolio Websites',
      description: 'Showcase your work beautifully with modern, responsive portfolio designs.'
    },
    {
      icon: Layout,
      title: 'Landing Pages',
      description: 'High-converting landing pages designed to capture leads and drive sales.'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Stores',
      description: 'Start selling online with a basic but powerful e-commerce solution.'
    },
    {
      icon: RefreshCw,
      title: 'Website Redesign',
      description: 'Transform your outdated website into a modern, high-performing site.'
    },
    {
      icon: Gauge,
      title: 'Speed Optimization',
      description: 'Make your existing website faster and improve user experience.'
    }
  ];

  return (
    <section id="services" data-testid="services-section" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] uppercase font-mono text-[#FFD700] mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            What We Build
          </h2>
          <p className="text-base text-[#A1A1AA] max-w-2xl mx-auto">
            From simple landing pages to full business websites, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-6 bg-[#0a0a0a] border border-white/10 card-hover cursor-pointer"
              data-testid={`service-${index}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white/5 border border-white/10 group-hover:border-[#FFD700]/30 transition-colors">
                  <service.icon size={24} className="text-[#FFD700]" />
                </div>
                <ArrowUpRight size={20} className="text-white/30 group-hover:text-[#FFD700] transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-[#A1A1AA]">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-[#A1A1AA] mb-4">Not sure what you need?</p>
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 rounded-none"
            onClick={() => window.open('https://wa.me/917771834791?text=Hi, I need help choosing the right service for my project.', '_blank')}
            data-testid="services-contact-btn"
          >
            Let's Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
