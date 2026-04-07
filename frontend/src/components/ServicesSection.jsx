import React from 'react';
import { Building2, Briefcase, Layout, ShoppingCart, RefreshCw, Gauge, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: 'Business Websites',
      description: 'Professional websites that establish credibility and generate leads for your business.'
    },
    {
      icon: Briefcase,
      title: 'Portfolio Websites',
      description: 'Showcase your work beautifully and attract more clients with stunning portfolios.'
    },
    {
      icon: Layout,
      title: 'Landing Pages',
      description: 'High-converting landing pages designed to capture leads and boost sales.'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Stores',
      description: 'Start selling online with a user-friendly store that drives conversions.'
    },
    {
      icon: RefreshCw,
      title: 'Website Redesign',
      description: 'Transform your outdated website into a modern, high-performing asset.'
    },
    {
      icon: Gauge,
      title: 'Speed Optimization',
      description: 'Make your existing website faster and improve user experience.'
    }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/917771834791?text=Hi, I need help choosing the right service for my project.', '_blank');
  };

  return (
    <section id="services" data-testid="services-section" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-[#0A346C] uppercase tracking-wider mb-3">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-4">
            Solutions for Every Business Need
          </h2>
          <p className="text-lg text-[#4A5568]">
            From simple landing pages to full e-commerce stores, we build websites that deliver results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-[#F6F6F6] hover:bg-white rounded-xl hover:shadow-xl transition-all border border-transparent hover:border-gray-200 cursor-pointer"
              data-testid={`service-${index}`}
            >
              <div className="w-14 h-14 bg-[#0A346C] group-hover:bg-[#3A5A85] rounded-xl flex items-center justify-center mb-6 transition-colors">
                <service.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A2E] mb-3">{service.title}</h3>
              <p className="text-[#4A5568] mb-4 leading-relaxed">{service.description}</p>
              <div className="flex items-center text-[#0A346C] font-medium group-hover:gap-2 transition-all">
                <span>Learn more</span>
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-[#0A346C] to-[#3A5A85] rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-3">Not Sure Which Service You Need?</h3>
          <p className="text-white/90 mb-6">Let's discuss your project and find the perfect solution for your business.</p>
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0A346C] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            data-testid="services-contact-btn"
          >
            Get Free Consultation
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
