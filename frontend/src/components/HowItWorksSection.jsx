import React from 'react';
import { MessageSquare, Code2, CheckCircle, Rocket } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Share Your Vision',
      description: 'Tell us about your business, goals, and what you envision for your website. We listen carefully to understand your needs.'
    },
    {
      number: '02',
      icon: Code2,
      title: 'We Design & Build',
      description: 'Our expert team creates a custom design and builds your website using modern, fast-loading technologies.'
    },
    {
      number: '03',
      icon: CheckCircle,
      title: 'Review & Refine',
      description: 'You review the website and provide feedback. We make revisions until you are completely satisfied.'
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Launch & Grow',
      description: 'Your website goes live with free domain included. We provide support to help you succeed online.'
    }
  ];

  return (
    <section data-testid="how-it-works-section" className="py-20 lg:py-28 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-[#0A346C] uppercase tracking-wider mb-3">
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-lg text-[#4A5568]">
            Getting your website is easy. Here's how we work together to bring your vision to life.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative"
              data-testid={`step-${index}`}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[2px] bg-[#E2E8F0]">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#0A346C]" />
                </div>
              )}
              
              <div className="text-center">
                {/* Number Badge */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6">
                  <div className="absolute inset-0 bg-[#0A346C]/10 rounded-full" />
                  <div className="relative w-16 h-16 bg-[#0A346C] rounded-full flex items-center justify-center">
                    <step.icon size={28} className="text-white" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-8 h-8 bg-white border-2 border-[#0A346C] rounded-full flex items-center justify-center text-sm font-bold text-[#0A346C]">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-[#1A1A2E] mb-3">{step.title}</h3>
                <p className="text-[#4A5568] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
