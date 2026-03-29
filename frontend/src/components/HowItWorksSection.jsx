import React from 'react';
import { MessageSquare, Code2, CheckCircle, Rocket } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Share Your Idea',
      description: 'Tell us about your business and what you need. We listen and understand your vision.'
    },
    {
      number: '02',
      icon: Code2,
      title: 'We Build Fast',
      description: 'Our team combines AI tools with expert coding to build your website in 2-5 days.'
    },
    {
      number: '03',
      icon: CheckCircle,
      title: 'You Review',
      description: 'Review your website and give feedback. We implement changes quickly.'
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Go Live',
      description: 'Your website launches with free domain included. Start growing online!'
    }
  ];

  return (
    <section data-testid="how-it-works-section" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] uppercase font-mono text-[#FFD700] mb-4">
            Simple Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            How It Works
          </h2>
          <p className="text-base text-[#A1A1AA] max-w-2xl mx-auto">
            Getting your website is easy. Here's our simple 4-step process.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative p-8 process-step ${
                index < steps.length - 1 ? 'border-r-0 lg:border-r border-white/10' : ''
              } border-b lg:border-b-0 border-white/10`}
              data-testid={`step-${index}`}
            >
              {/* Step Number */}
              <span className="font-mono text-5xl font-bold text-white/5 absolute top-4 right-4">
                {step.number}
              </span>
              
              {/* Icon */}
              <div className="p-4 bg-[#FFD700]/10 border border-[#FFD700]/30 inline-flex mb-6">
                <step.icon size={28} className="text-[#FFD700]" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
