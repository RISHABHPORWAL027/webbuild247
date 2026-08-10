import React from 'react';
import { Zap, Target, Shield, TrendingUp } from 'lucide-react';
import Typewriter from '@/components/Typewriter';
import ScrollReveal from '@/components/ScrollReveal';

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
    <section data-testid="ai-benefits-section" className="py-20 lg:py-28 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-[#0A346C] uppercase tracking-wider mb-3">
            Our Approach
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-4">
            <Typewriter text="How We Deliver Excellence" />
          </h2>
          <p className="text-lg text-[#4A5568]">
            We've perfected our development process to deliver exceptional results faster and more affordably than traditional agencies.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={`${(index + 1) * 100}ms`}>
              <div 
                className="flex items-start gap-4 p-6 bg-[#F6F6F6] rounded-xl hover:shadow-md transition-shadow duration-300 border border-gray-100 text-left h-full"
                data-testid={`ai-benefit-${index}`}
              >
                <div className="w-12 h-12 rounded-lg bg-[#0A346C] flex items-center justify-center shrink-0">
                  <benefit.icon className="text-white" size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-[#1A1A2E]">{benefit.title}</h3>
                    <span className="text-xs bg-[#0A346C]/10 text-[#0A346C] font-semibold px-2.5 py-0.5 rounded-full">
                      {benefit.highlight}
                    </span>
                  </div>
                  <p className="text-sm text-[#4A5568] leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIBenefitsSection;
