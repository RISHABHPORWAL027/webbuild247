import React from 'react';
import { Target, Users, Rocket, Heart } from 'lucide-react';

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
    <section id="about" data-testid="about-section" className="py-20 lg:py-28 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-[#0A346C] uppercase tracking-wider mb-3">
              About DevYug Solutions
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-6 leading-tight">
              Your Trusted Partner for
              <br />
              <span className="text-[#0A346C]">Professional Web Development</span>
            </h2>
            <p className="text-lg text-[#4A5568] mb-8 leading-relaxed">
              At DevYug Solutions, we understand that your website is often the first impression customers have of your business. That's why we combine cutting-edge technology with creative design to build websites that not only look stunning but also drive real business results.
            </p>
            <p className="text-base text-[#4A5568] mb-8 leading-relaxed">
              With over 50 successful projects delivered, we've helped businesses of all sizes establish their online presence quickly and affordably. Our streamlined process ensures you get a professional website without the typical agency delays and high costs.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-[#0A346C]">50+</p>
                <p className="text-sm text-[#718096]">Projects</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-[#0A346C]">100%</p>
                <p className="text-sm text-[#718096]">Satisfaction</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-[#0A346C]">5+</p>
                <p className="text-sm text-[#718096]">Years Exp.</p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                data-testid={`about-value-${index}`}
              >
                <div className="w-12 h-12 bg-[#0A346C] rounded-lg flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A2E] mb-2">{value.title}</h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
