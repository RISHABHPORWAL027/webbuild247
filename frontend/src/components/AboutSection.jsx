import React from 'react';
import { Target, Users, Rocket, Heart } from 'lucide-react';
import CountUp from '@/components/CountUp';
import Typewriter from '@/components/Typewriter';
import ScrollReveal from '@/components/ScrollReveal';

const AboutSection = () => {
  const values = [
    {
      icon: Rocket,
      title: 'Fast Delivery',
      description: 'Get your website live in just 2-5 business days, not weeks or months.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled developers and designers dedicated to your project success.'
    },
    {
      icon: Target,
      title: 'Result Focused',
      description: 'Websites designed to convert visitors into paying customers.'
    },
    {
      icon: Heart,
      title: 'Client First',
      description: 'Your satisfaction is our priority. We work until you are 100% happy.'
    }
  ];

  return (
    <section id="about" data-testid="about-section" className="relative py-20 lg:py-28 bg-[#0a1c3e] overflow-hidden border-t border-white/5">

      {/* Cyber Dotted Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Dotted Grid decoration bubble */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block z-10 pointer-events-none">
        <div className="relative p-2.5 bg-[#050e20]/80 rounded-l-full border-y border-l border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-md">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/20">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
              alt="Active Support Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute bottom-2 right-2 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#050e20] animate-pulse" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Content */}
          <div className="lg:col-span-6 text-left">
            <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-3">
              About DevYug Solutions
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight font-display">
              <Typewriter text="Your Trusted Partner for" />
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-extrabold">
                Professional Web Development
              </span>
            </h2>

            <ScrollReveal delay="100ms">
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                At DevYug Solutions, we understand that your website is often the first impression customers have of your business. That's why we combine cutting-edge technology with creative design to build websites that not only look stunning but also drive real business results.
              </p>
            </ScrollReveal>

            <ScrollReveal delay="200ms">
              <p className="text-base text-gray-400 mb-8 leading-relaxed">
                With over 50 successful projects delivered, we've helped businesses of all sizes establish their online presence quickly and affordably. Our streamlined process ensures you get a professional website without the typical agency delays and high costs.
              </p>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay="300ms">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/[0.02] border border-white/[0.06] rounded-xl shadow-2xl">
                  <p className="text-3xl font-bold text-indigo-400 font-display">
                    <CountUp end="25" suffix="+" />
                  </p>
                  <p className="text-xs text-gray-400 mt-1 font-medium">Projects</p>
                </div>
                <div className="text-center p-4 bg-white/[0.02] border border-white/[0.06] rounded-xl shadow-2xl">
                  <p className="text-3xl font-bold text-indigo-400 font-display">
                    <CountUp end="100" suffix="%" />
                  </p>
                  <p className="text-xs text-gray-400 mt-1 font-medium">Satisfaction</p>
                </div>
                <div className="text-center p-4 bg-white/[0.02] border border-white/[0.06] rounded-xl shadow-2xl">
                  <p className="text-3xl font-bold text-indigo-400 font-display">
                    <CountUp end="5" suffix="+" />
                  </p>
                  <p className="text-xs text-gray-400 mt-1 font-medium">Years Exp.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Values Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={`${(index + 1) * 100}ms`}>
                <div
                  className="p-6 bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/20 hover:bg-white/[0.04] rounded-xl shadow-2xl transition-all duration-300 text-left h-full"
                  data-testid={`about-value-${index}`}
                >
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-indigo-650/20">
                    <value.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-display">{value.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
