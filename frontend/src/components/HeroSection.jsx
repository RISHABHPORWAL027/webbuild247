import React from 'react';
import { ArrowRight, Zap, Clock, Gift, MessageCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = ({ scrollToContact }) => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/917771834791?text=Hi, I am interested in getting a website built.', '_blank');
  };

  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '2-5', label: 'Days Turnaround' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  const features = [
    'AI-Powered Development',
    'Free 1-Year Domain',
    'Mobile Responsive',
    'SEO Optimized',
  ];

  return (
    <section 
      data-testid="hero-section"
      className="relative min-h-screen pt-20 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[#050505]">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#FFD700]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-[#FFD700]/5 rounded-full blur-[100px]" />
        
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #FFD700 1px, transparent 1px),
              linear-gradient(to bottom, #FFD700 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Main Content - Bento Grid Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="grid grid-cols-12 gap-4 md:gap-6 min-h-[80vh] items-center">
          
          {/* Main Hero Content - Large Card */}
          <div className="col-span-12 lg:col-span-7 row-span-2">
            <div className="h-full p-8 md:p-12 border border-white/10 bg-gradient-to-br from-[#0a0a0a] to-[#050505] relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/10 blur-3xl" />
              
              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD700]/10 border border-[#FFD700]/30 mb-8">
                  <Zap size={14} className="text-[#FFD700]" />
                  <span className="text-xs font-mono tracking-wider text-[#FFD700]">AI + EXPERT DEVELOPERS</span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.1] mb-6">
                  Your Website
                  <br />
                  <span className="relative">
                    <span className="text-[#FFD700]">Ready in 5 Days</span>
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                      <path d="M2 10C50 4 150 2 298 6" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
                    </svg>
                  </span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-[#A1A1AA] max-w-lg mb-8 leading-relaxed">
                  Stop waiting months. We combine <span className="text-white">AI precision</span> with <span className="text-white">expert craftsmanship</span> to launch your business online — fast.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={scrollToContact}
                    size="lg"
                    className="bg-[#FFD700] text-black font-bold hover:bg-[#FFF0A0] rounded-none px-8 py-6 text-base group"
                    data-testid="hero-get-started-btn"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                  <Button
                    onClick={handleWhatsApp}
                    variant="outline"
                    size="lg"
                    className="border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 rounded-none px-8 py-6 text-base"
                    data-testid="hero-whatsapp-btn"
                  >
                    <MessageCircle className="mr-2" size={18} />
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-5">
            <div className="h-full p-6 md:p-8 border border-white/10 bg-[#0a0a0a]">
              <p className="text-xs font-mono text-[#FFD700] mb-6 tracking-wider">// OUR TRACK RECORD</p>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</p>
                    <p className="text-xs text-[#A1A1AA]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Checklist Card */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-5">
            <div className="h-full p-6 md:p-8 border border-[#FFD700]/30 bg-gradient-to-br from-[#FFD700]/5 to-transparent">
              <p className="text-xs font-mono text-[#FFD700] mb-6 tracking-wider">// WHAT'S INCLUDED</p>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#FFD700] flex-shrink-0" />
                    <span className="text-sm text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Delivery Badge - Small Card */}
          <div className="col-span-6 lg:col-span-2">
            <div className="h-full p-6 border border-white/10 bg-[#0a0a0a] flex flex-col items-center justify-center text-center">
              <Clock size={28} className="text-[#FFD700] mb-3" />
              <p className="text-2xl font-black text-white">2-5</p>
              <p className="text-xs text-[#A1A1AA]">Days Delivery</p>
            </div>
          </div>

          {/* Free Domain Badge */}
          <div className="col-span-6 lg:col-span-3">
            <div className="h-full p-6 border border-white/10 bg-[#0a0a0a] flex items-center gap-4">
              <div className="p-3 bg-[#FFD700]/10 border border-[#FFD700]/30">
                <Gift size={24} className="text-[#FFD700]" />
              </div>
              <div>
                <p className="text-lg font-bold text-white">Free Domain</p>
                <p className="text-xs text-[#A1A1AA]">1 Year Included</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-[#A1A1AA] tracking-wider">SCROLL</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#FFD700] to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
