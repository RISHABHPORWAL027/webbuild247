import React from 'react';
import { Zap, Users, DollarSign, Smartphone, RefreshCw, Heart, CheckCircle, Shield } from 'lucide-react';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Get your website in 2-5 days, not weeks.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled developers dedicated to your success.'
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Quality websites at competitive rates.'
    },
    {
      icon: Smartphone,
      title: 'All Devices',
      description: 'Perfect on mobile, tablet, and desktop.'
    },
    {
      icon: RefreshCw,
      title: 'Quick Support',
      description: 'Fast responses and easy revisions.'
    },
    {
      icon: Heart,
      title: 'Client-Focused',
      description: 'Your satisfaction is our priority.'
    }
  ];

  return (
    <section data-testid="why-choose-us-section" className="py-20 lg:py-28 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-[#0A346C] uppercase tracking-wider mb-3">
              Why DevYug
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-6 leading-tight">
              Why Businesses Choose
              <br />
              <span className="text-[#0A346C]">DevYug Solutions</span>
            </h2>
            <p className="text-lg text-[#4A5568] mb-8 leading-relaxed">
              We're not just another web development agency. We combine speed, quality, and affordability to deliver exceptional results for businesses of all sizes.
            </p>

            {/* Reasons Grid */}
            <div className="grid grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg"
                  data-testid={`reason-${index}`}
                >
                  <div className="w-10 h-10 bg-[#0A346C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <reason.icon size={20} className="text-[#0A346C]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A2E] text-sm">{reason.title}</h4>
                    <p className="text-xs text-[#718096]">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-[#1A1A2E] mb-6">For Non-Technical Users</h3>
            <p className="text-[#4A5568] mb-6 leading-relaxed">
              Don't worry if you're not tech-savvy. We handle everything from start to finish. You just share your idea, and we take care of the rest.
            </p>
            
            <div className="space-y-4">
              {[
                'No technical knowledge required',
                'We guide you through every step',
                'Simple approval process',
                'Easy-to-use admin panel',
                'Ongoing support after launch'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                  <span className="text-[#1A1A2E]">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 inline-flex w-full max-w-xl items-start gap-4 rounded-2xl border border-[#0A346C]/10 bg-[#F8FBFF] px-5 py-4 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0A346C] text-white">
                <Shield size={20} />
              </div>
              <div>
                <p className="text-xl font-bold text-[#1A1A2E] sm:text-2xl">100% Satisfaction Guarantee</p>
                <p className="text-sm text-[#4A5568] mt-1">We work until you're completely happy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
