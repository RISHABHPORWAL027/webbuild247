import React from 'react';
import { Globe, Smartphone, Monitor, Cpu, Zap, Search, Shield, Palette } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    { icon: Globe, title: 'Fully Functional Website', description: 'Complete online solution' },
    { icon: Smartphone, title: 'Mobile-Friendly', description: 'Perfect on all phones' },
    { icon: Monitor, title: 'All Devices', description: 'Laptop & tablet ready' },
    { icon: Cpu, title: 'AI-Optimized', description: 'Smart performance' },
    { icon: Zap, title: 'Fast Loading', description: 'Lightning speed' },
    { icon: Search, title: 'SEO-Friendly', description: 'Rank on Google' },
    { icon: Shield, title: 'Secure & Reliable', description: 'Protected hosting' },
    { icon: Palette, title: 'Modern Design', description: 'Clean aesthetics' },
  ];

  return (
    <section data-testid="features-section" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] uppercase font-mono text-[#FFD700] mb-4">
            What You Get
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Complete Online Solution
          </h2>
          <p className="text-base text-[#A1A1AA] max-w-2xl mx-auto">
            We don't just build a website — we build everything you need to succeed online.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#0a0a0a] p-6 md:p-8 flex flex-col items-center text-center card-hover"
              data-testid={`feature-${index}`}
            >
              <div className="p-4 mb-4 bg-white/5 border border-white/10">
                <feature.icon size={28} className="text-[#FFD700]" />
              </div>
              <h3 className="text-base font-semibold text-white mb-1">{feature.title}</h3>
              <p className="text-sm text-[#A1A1AA]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
