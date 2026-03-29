import React from 'react';
import { ArrowRight, Zap, Clock, Gift, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = ({ scrollToContact }) => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/917771834791?text=Hi, I am interested in getting a website built.', '_blank');
  };

  const badges = [
    { icon: Clock, text: '2-5 Day Delivery' },
    { icon: Gift, text: 'Free Domain' },
    { icon: Zap, text: 'AI-Powered' },
  ];

  return (
    <section 
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1762279389042-9439bfb6c155?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMHRlY2glMjBiYWNrZ3JvdW5kJTIwZGFya3xlbnwwfHx8fDE3NzQ4MTMwNjF8MA&ixlib=rb-4.1.0&q=85')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-[#050505]/70" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            {/* Overline */}
            <p className="text-xs tracking-[0.2em] uppercase font-mono text-[#FFD700] mb-6 animate-fade-in-up opacity-0 stagger-1">
              AI + Expert Development
            </p>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.05] mb-6 animate-fade-in-up opacity-0 stagger-2">
              Build Your Website
              <br />
              <span className="text-gradient">In Just 2-5 Days</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-[#A1A1AA] max-w-xl mb-8 animate-fade-in-up opacity-0 stagger-3">
              Fast, affordable, and powered by modern technology. 
              We combine AI tools with expert developers to deliver high-quality websites quickly.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up opacity-0 stagger-4">
              {badges.map((badge, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-sm"
                >
                  <badge.icon size={16} className="text-[#FFD700]" />
                  <span className="text-white">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up opacity-0 stagger-5">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-[#FFD700] text-black font-bold hover:bg-[#FFF0A0] rounded-none px-8 py-6 text-base btn-shine animate-pulse-glow"
                data-testid="hero-get-started-btn"
              >
                Get Started
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 rounded-none px-8 py-6 text-base"
                data-testid="hero-whatsapp-btn"
              >
                <MessageCircle className="mr-2" size={18} />
                WhatsApp Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#FFD700] to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
