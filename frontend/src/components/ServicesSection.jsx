import React from 'react';
import { ArrowRight } from 'lucide-react';
import Typewriter from '@/components/Typewriter';
import ScrollReveal from '@/components/ScrollReveal';

const ServicesSection = () => {
  const services = [
    {
      title: 'Business Applications',
      description: 'Professional high-speed websites designed to establish authority and drive premium lead acquisitions.',
      color: 'border-indigo-500/20 text-indigo-400',
      mockup: (
        <div className="w-full bg-[#03050c] border border-white/5 rounded-xl p-3 text-[10px] text-gray-400 font-sans">
          <div className="flex items-center justify-between mb-2 pb-1 border-b border-white/5">
            <span className="font-bold text-white text-[9px]">DASHBOARD PLATFORM</span>
            <span className="text-[8px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded font-mono">v1.2.0</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="p-1.5 bg-white/5 rounded border border-white/5">
              <p className="text-[8px] text-gray-500">Users</p>
              <p className="text-xs font-bold text-white">12,492</p>
            </div>
            <div className="p-1.5 bg-white/5 rounded border border-white/5">
              <p className="text-[8px] text-gray-500">Revenue</p>
              <p className="text-xs font-bold text-emerald-400">+₹84.2k</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Immersive Portfolios',
      description: 'Stunning visual portfolios engineered to present your products and work under the finest digital aesthetic.',
      color: 'border-cyan-500/20 text-cyan-400',
      mockup: (
        <div className="w-full bg-[#03050c] border border-white/5 rounded-xl p-3 text-[10px] text-gray-400 font-sans">
          <div className="flex items-center justify-between mb-2 pb-1 border-b border-white/5">
            <span className="font-bold text-white text-[9px]">GALLERY MOCKUP</span>
            <span className="text-cyan-400 text-[8px] font-mono">Masonry</span>
          </div>
          <div className="grid grid-cols-3 gap-1 h-12">
            <div className="bg-gradient-to-br from-indigo-500 to-cyan-500 rounded" />
            <div className="bg-gradient-to-tr from-cyan-500 to-emerald-400 rounded h-10" />
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded h-8" />
          </div>
        </div>
      )
    },
    {
      title: 'High-Converting Landing Pages',
      description: 'Laser-focused sales layouts optimized to capture metrics, convert visitors, and maximize click rates.',
      color: 'border-violet-500/20 text-violet-400',
      mockup: (
        <div className="w-full bg-[#03050c] border border-white/5 rounded-xl p-3 text-[10px] text-gray-400 font-sans">
          <div className="flex items-center justify-between mb-2 pb-1 border-b border-white/5">
            <span className="font-bold text-white text-[9px]">HERO INTERFACE</span>
            <span className="text-purple-400 text-[8px] font-mono">Conversion</span>
          </div>
          <div className="space-y-1">
            <div className="h-2 w-3/4 bg-white/10 rounded" />
            <div className="h-1.5 w-1/2 bg-white/5 rounded" />
            <div className="h-4 w-1/3 bg-indigo-600 rounded flex items-center justify-center text-[7px] text-white font-bold">
              CTA Button
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Dynamic E-commerce Stores',
      description: 'Immersive, fast-checkout stores built to handle transactions smoothly and maximize conversion value.',
      color: 'border-emerald-500/20 text-emerald-400',
      mockup: (
        <div className="w-full bg-[#03050c] border border-white/5 rounded-xl p-3 text-[10px] text-gray-400 font-sans">
          <div className="flex items-center justify-between mb-2 pb-1 border-b border-white/5">
            <span className="font-bold text-white text-[9px]">PRODUCT GRID</span>
            <span className="text-emerald-400 text-[8px] font-mono">Checkout</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/10 rounded border border-white/5 flex items-center justify-center text-[8px]">🛒</div>
            <div>
              <p className="text-[8px] font-bold text-white">Minimal Sneakers</p>
              <p className="text-[8px] text-emerald-400 font-bold">₹7,999</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Modern Architecture Revamp',
      description: 'Upgrade outdated legacy web setups into high-speed React applications built for modern SEO guidelines.',
      color: 'border-amber-500/20 text-amber-400',
      mockup: (
        <div className="w-full bg-[#03050c] border border-white/5 rounded-xl p-3 text-[10px] text-gray-400 font-mono">
          <div className="flex items-center justify-between mb-1 pb-1 border-b border-white/5 text-gray-500 text-[8px]">
            <span>CODE EDITOR</span>
            <span>index.js</span>
          </div>
          <p className="text-indigo-400">import <span className="text-white">React</span> from <span className="text-emerald-400">'react'</span></p>
          <p className="text-cyan-400">const <span className="text-white">App</span> = () =&gt; &#123; ... &#125;</p>
        </div>
      )
    },
    {
      title: 'Speed & SEO Optimization',
      description: 'Optimize page-load scripts, compress assets, and align metrics for high Core Web Vitals performance.',
      color: 'border-rose-500/20 text-rose-400',
      mockup: (
        <div className="w-full bg-[#03050c] border border-white/5 rounded-xl p-3 text-[10px] text-gray-400 font-sans">
          <div className="flex items-center justify-between mb-2 pb-1 border-b border-white/5">
            <span className="font-bold text-white text-[9px]">SPEED METRICS</span>
            <span className="text-rose-400 text-[8px] font-mono">Lighthouse</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-[8px]">
              <p className="text-white font-bold">✓ Indexing Passed</p>
              <p className="text-gray-500">Keywords Mapped: 94</p>
            </div>
            <div className="text-lg font-black text-emerald-400 font-display">100/100</div>
          </div>
        </div>
      )
    }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/917771834791?text=Hi, I need help choosing the right service for my project.', '_blank');
  };

  return (
    <section id="services" data-testid="services-section" className="relative py-24 lg:py-32 bg-[#0a1c3e] overflow-hidden border-t border-white/[0.04]">
      {/* Background decoration orbs */}
      <div className="absolute top-1/3 left-[-10%] w-[350px] h-[350px] bg-indigo-600/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-[-10%] w-[350px] h-[350px] bg-cyan-600/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-[0.25em] mb-3">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-display text-left sm:text-center">
            <Typewriter text="High-Performance Digital Offerings" />
          </h2>
          <p className="text-base text-gray-400 leading-relaxed text-left sm:text-center">
            From single-page marketing funnels to full custom database stores, we build applications that execute flawlessly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={`${(index + 1) * 100}ms`}>
              <div 
                className="group p-8 rounded-2xl bg-white/[0.01] border border-white/[0.06] hover:bg-white/[0.03] hover:border-indigo-500/20 hover:shadow-indigo-500/10 transition-all duration-300 shadow-2xl flex flex-col justify-between h-full text-left"
                data-testid={`service-${index}`}
              >
                <div>
                  <h3 className="text-lg font-bold text-white mb-3 font-display">{service.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-6">{service.description}</p>
                </div>
                <div className="mt-auto">
                  {service.mockup}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Card */}
        <ScrollReveal delay="100ms">
          <div className="relative mt-16 p-8 sm:p-12 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl overflow-hidden shadow-2xl">
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left max-w-xl">
                <h3 className="text-2xl font-bold text-white font-display mb-3">Custom Application Design</h3>
                <p className="text-sm text-gray-400 leading-relaxed">Let's blueprint your project, review technical requirements, and construct the ultimate deployment roadmap.</p>
              </div>
              <button
                onClick={handleWhatsApp}
                className="inline-flex h-12 items-center gap-2 px-6 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-500 transition-all hover:shadow-lg hover:shadow-indigo-600/30 shrink-0 text-sm"
                data-testid="services-contact-btn"
              >
                Get Free Consultation
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
