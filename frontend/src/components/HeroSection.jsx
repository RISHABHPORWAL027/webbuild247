import React from 'react';
import { ArrowRight, CheckCircle, Clock, Shield, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = ({ scrollToContact }) => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/917771834791?text=Hi, I am interested in getting a website built.', '_blank');
  };

  const trustBadges = [
    { icon: Clock, text: '2-5 Days Delivery' },
    { icon: Shield, text: '100% Satisfaction' },
    { icon: Award, text: 'Premium Quality' },
  ];

  const clients = [
    'Ayekart', 'Vyan Villa', 'Uplers', 'Mobibulls', 'ARC Robotics'
  ];

  return (
    <section 
      data-testid="hero-section"
      className="relative pt-20 overflow-hidden bg-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#0A346C 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Trust indicator */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F6F6F6] rounded-full mb-6 animate-fade-in-up opacity-0 stagger-1">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-[#0A346C] border-2 border-white flex items-center justify-center">
                    <span className="text-[8px] text-white font-bold">{['A', 'V', 'U', 'M'][i]}</span>
                  </div>
                ))}
              </div>
              <span className="text-sm text-[#4A5568]">Trusted by <strong className="text-[#0A346C]">50+ businesses</strong></span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A2E] leading-tight mb-6 animate-fade-in-up opacity-0 stagger-2">
              We Build Websites
              <br />
              <span className="text-[#0A346C]">That Grow Your Business</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-[#4A5568] max-w-xl mb-8 leading-relaxed animate-fade-in-up opacity-0 stagger-3">
              Professional website development in just 2-5 days. We combine modern technology with expert craftsmanship to deliver websites that convert visitors into customers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up opacity-0 stagger-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-[#0A346C] text-white hover:bg-[#0D4080] rounded-lg px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                data-testid="hero-get-started-btn"
              >
                Get Free Consultation
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                size="lg"
                className="border-2 border-[#0A346C] text-[#0A346C] hover:bg-[#0A346C] hover:text-white rounded-lg px-8 py-6 text-base font-semibold"
                data-testid="hero-whatsapp-btn"
              >
                Chat on WhatsApp
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 animate-fade-in-up opacity-0 stagger-4">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-[#F6F6F6] flex items-center justify-center">
                    <badge.icon size={20} className="text-[#0A346C]" />
                  </div>
                  <span className="text-sm font-medium text-[#4A5568]">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-[#0A346C] to-[#3A5A85] rounded-2xl p-8 lg:p-10 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-8">Why Choose DevYug?</h3>
                
                <div className="space-y-6">
                  {[
                    { number: '50+', label: 'Projects Delivered' },
                    { number: '2-5', label: 'Days Turnaround' },
                    { number: '100%', label: 'Client Satisfaction' },
                    { number: '24/7', label: 'Support Available' },
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <span className="text-3xl font-bold">{stat.number}</span>
                      <span className="text-white/90">{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* Free Domain Badge */}
                <div className="mt-8 p-4 bg-white rounded-xl text-center">
                  <p className="text-[#0A346C] font-bold text-lg">🎁 Free Domain for 1 Year</p>
                  <p className="text-[#4A5568] text-sm">Upto ₹1000 value • With every website package</p>
                  <p className="text-[#718096] text-xs mt-1">*T&C Apply</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A2E]">Verified Agency</p>
                    <p className="text-sm text-[#4A5568]">Trusted Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clients Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <p className="text-center text-sm text-[#718096] mb-6">TRUSTED BY LEADING BUSINESSES</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {clients.map((client, index) => (
              <span key={index} className="text-lg font-semibold text-[#A0AEC0] hover:text-[#0A346C] transition-colors cursor-default">
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
