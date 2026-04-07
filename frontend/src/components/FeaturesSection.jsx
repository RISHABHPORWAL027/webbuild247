import React from 'react';
import { Globe, Smartphone, Monitor, Zap, Search, Shield, Palette, Settings } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    { icon: Globe, title: 'Fully Functional', description: 'Complete website with all features you need' },
    { icon: Smartphone, title: 'Mobile Responsive', description: 'Perfect display on all phone sizes' },
    { icon: Monitor, title: 'Cross-Browser', description: 'Works on Chrome, Safari, Firefox & more' },
    { icon: Zap, title: 'Fast Loading', description: 'Optimized for speed and performance' },
    { icon: Search, title: 'SEO Optimized', description: 'Built to rank higher on Google' },
    { icon: Shield, title: 'Secure & Reliable', description: 'SSL security and reliable hosting' },
    { icon: Palette, title: 'Custom Design', description: 'Unique design matching your brand' },
    { icon: Settings, title: 'Easy to Manage', description: 'Simple admin panel for updates' },
  ];

  return (
    <section data-testid="features-section" className="py-20 lg:py-28 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-[#0A346C] uppercase tracking-wider mb-3">
            What's Included
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-4">
            Everything You Need to Succeed Online
          </h2>
          <p className="text-lg text-[#4A5568]">
            Every website we build comes packed with features to help your business grow.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-xl text-center hover:shadow-lg transition-shadow border border-gray-100 group"
              data-testid={`feature-${index}`}
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-[#F6F6F6] group-hover:bg-[#0A346C] rounded-xl flex items-center justify-center transition-colors">
                <feature.icon size={28} className="text-[#0A346C] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base font-semibold text-[#1A1A2E] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#718096]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
