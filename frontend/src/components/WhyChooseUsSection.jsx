import React from 'react';
import { Zap, Bot, DollarSign, Smartphone, RefreshCw, Heart } from 'lucide-react';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Zap,
      title: 'Super Fast Delivery',
      description: 'Get your website ready in just 2-5 days, not weeks or months.'
    },
    {
      icon: Bot,
      title: 'AI + Expert Developers',
      description: 'Best of both worlds: AI efficiency with human expertise and creativity.'
    },
    {
      icon: DollarSign,
      title: 'Low Cost, High Quality',
      description: 'Professional results at affordable prices. No hidden fees.'
    },
    {
      icon: Smartphone,
      title: 'Works on All Devices',
      description: 'Mobile, tablet, laptop, iOS — your site looks perfect everywhere.'
    },
    {
      icon: RefreshCw,
      title: 'Quick Changes & Support',
      description: 'Need updates? We implement changes quickly with ongoing support.'
    },
    {
      icon: Heart,
      title: 'Beginner-Friendly',
      description: 'No tech knowledge needed. We guide you through every step.'
    }
  ];

  return (
    <section data-testid="why-choose-us-section" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] uppercase font-mono text-[#FFD700] mb-4">
            Why Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-base text-[#A1A1AA] max-w-2xl mx-auto">
            We're not just another web agency. Here's what makes us different.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group p-6 border border-white/10 bg-[#050505] card-hover relative overflow-hidden"
              data-testid={`reason-${index}`}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[#FFD700]/10 border border-[#FFD700]/20">
                    <reason.icon size={22} className="text-[#FFD700]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
                </div>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Non-technical users banner */}
        <div className="mt-16 p-8 border border-white/10 bg-[#050505] text-center">
          <h3 className="text-xl font-semibold text-white mb-3">For Non-Technical Users</h3>
          <p className="text-[#A1A1AA] max-w-2xl mx-auto">
            Don't worry if you don't understand technology — we handle everything for you.
            <br />
            <span className="text-white">You just share your idea. We build, design, and launch your website.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
