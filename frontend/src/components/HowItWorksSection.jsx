import React from 'react';
import { MessageSquare, Code2, CheckCircle, Rocket } from 'lucide-react';
import Typewriter from '@/components/Typewriter';
import ScrollReveal from '@/components/ScrollReveal';

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
    <section id="process" data-testid="how-it-works-section" className="py-20 lg:py-28 bg-[#F6F6F6] overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-[#0A346C] uppercase tracking-wider mb-3">
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-4 font-display">
            <Typewriter text="Simple 4-Step Process" />
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
              {/* Connector Line with Animation */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[3px] bg-slate-200 overflow-hidden z-0">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-[#0A346C] origin-left animate-pulse" 
                    style={{ 
                      animationDelay: `${index * 300}ms`,
                      animationDuration: '2s',
                      width: '100%'
                    }} 
                  />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#0A346C]" />
                </div>
              )}
              
              <ScrollReveal delay={`${index * 300}ms`} className="relative z-10">
                <div className="text-center">
                  {/* Number Badge */}
                  <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6">
                    <div className="absolute inset-0 bg-[#0A346C]/10 rounded-full animate-ping opacity-25" style={{ animationDelay: `${index * 300}ms`, animationDuration: '3s' }} />
                    <div className="absolute inset-0 bg-[#0A346C]/10 rounded-full" />
                    <div className="relative w-16 h-16 bg-[#0A346C] rounded-full flex items-center justify-center shadow-lg shadow-indigo-900/10">
                      <step.icon size={28} className="text-white" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-8 h-8 bg-white border-2 border-[#0A346C] rounded-full flex items-center justify-center text-sm font-bold text-[#0A346C] shadow-sm">
                      {step.number}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#1A1A2E] mb-3 font-display">{step.title}</h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed px-2">{step.description}</p>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
