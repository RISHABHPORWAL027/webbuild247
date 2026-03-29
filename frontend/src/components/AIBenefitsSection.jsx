import React from 'react';
import { Zap, Target, Bug, DollarSign } from 'lucide-react';

const AIBenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Speed Up Creation',
      description: 'AI accelerates the development process, delivering results in days not weeks.',
      metric: '3x Faster'
    },
    {
      icon: Target,
      title: 'Improve Accuracy',
      description: 'AI-assisted design ensures pixel-perfect layouts and consistent styling.',
      metric: '99% Precision'
    },
    {
      icon: Bug,
      title: 'Reduce Errors',
      description: 'Automated testing and AI review catches bugs before they reach production.',
      metric: '80% Less Bugs'
    },
    {
      icon: DollarSign,
      title: 'Lower Cost',
      description: 'Efficient AI workflows mean significant savings passed directly to you.',
      metric: '50% Savings'
    }
  ];

  return (
    <section data-testid="ai-benefits-section" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1677212004257-103cfa6b59d0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYWJzdHJhY3QlMjBkYXJrfGVufDB8fHx8MTc3NDgxMzA2Mnww&ixlib=rb-4.1.0&q=85')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-[#050505]/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] uppercase font-mono text-[#FFD700] mb-4">
            AI-Powered Development
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            How AI Helps You
          </h2>
          <p className="text-base text-[#A1A1AA] max-w-2xl mx-auto">
            We leverage cutting-edge AI to deliver better websites in less time and budget.
          </p>
        </div>

        {/* Benefits Grid - Terminal Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="terminal-card p-6 card-hover"
              data-testid={`ai-benefit-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FFD700]/10 border border-[#FFD700]/30">
                  <benefit.icon size={24} className="text-[#FFD700]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                    <span className="font-mono text-sm text-[#FFD700]">{benefit.metric}</span>
                  </div>
                  <p className="text-sm text-[#A1A1AA]">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Result Banner */}
        <div className="mt-12 p-6 bg-[#FFD700]/5 border border-[#FFD700]/20 text-center">
          <p className="font-mono text-sm text-[#FFD700] mb-2">// RESULT</p>
          <p className="text-xl text-white font-semibold">
            Better website • Less time • Lower budget
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIBenefitsSection;
