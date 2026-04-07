import React from 'react';
import { Zap, Target, Shield, TrendingUp } from 'lucide-react';

const AIBenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast Development',
      description: 'Our streamlined process and modern tools enable us to deliver your website in record time without compromising quality.',
      highlight: '3x Faster'
    },
    {
      icon: Target,
      title: 'Pixel-Perfect Design',
      description: 'Every element is carefully crafted to ensure your website looks professional and represents your brand perfectly.',
      highlight: '100% Custom'
    },
    {
      icon: Shield,
      title: 'Bug-Free Delivery',
      description: 'Rigorous testing and quality checks ensure your website works flawlessly across all devices and browsers.',
      highlight: 'Zero Errors'
    },
    {
      icon: TrendingUp,
      title: 'Business Growth Focus',
      description: 'We build websites that are optimized for conversions, helping you turn visitors into loyal customers.',
      highlight: 'ROI Focused'
    }
  ];

  return (
    <section data-testid="ai-benefits-section" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-[#0A346C] uppercase tracking-wider mb-3">
            Our Approach
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-4">
            How We Deliver Excellence
          </h2>
          <p className="text-lg text-[#4A5568]">
            We've perfected our development process to deliver exceptional results faster and more affordably than traditional agencies.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex gap-6 p-6 bg-[#F6F6F6] rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-200"
              data-testid={`ai-benefit-${index}`}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-[#0A346C] rounded-xl flex items-center justify-center">
                  <benefit.icon size={28} className="text-white" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-[#1A1A2E]">{benefit.title}</h3>
                  <span className="px-3 py-1 bg-[#0A346C]/10 text-[#0A346C] text-xs font-semibold rounded-full">
                    {benefit.highlight}
                  </span>
                </div>
                <p className="text-[#4A5568] leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIBenefitsSection;
