import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Got our agricultural platform ready in just 4 days. The team understood our vision perfectly and delivered a website that truly represents Ayekart's mission. Highly recommend for anyone looking for quick, quality work.",
      author: "Abhishek Sharma",
      role: "Founder, Ayekart",
      initials: "AS"
    },
    {
      quote: "The AI-powered approach really does make a difference. Mobibulls Media website was up and running faster than I expected, and the performance is excellent. Great team to work with!",
      author: "Rohit Gupta",
      role: "Founder, Mobibulls Media",
      initials: "RG"
    },
    {
      quote: "Building an AI platform needed a team that understands technology. They delivered Assitly's interface beautifully with a modern look that our users love. Fast turnaround and professional work.",
      author: "Vikram Singh",
      role: "Founder, Assitly AI",
      initials: "VS"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section data-testid="testimonials-section" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] uppercase font-mono text-[#FFD700] mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="testimonial-card p-8 md:p-12 border border-white/10 relative">
            {/* Quote Icon */}
            <Quote size={48} className="text-[#FFD700]/20 absolute top-8 left-8" />
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div 
                  className="w-14 h-14 flex items-center justify-center bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] font-bold text-lg"
                  data-testid="testimonial-avatar"
                >
                  {testimonials[currentIndex].initials}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white">{testimonials[currentIndex].author}</p>
                  <p className="text-sm text-[#FFD700]">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="border-white/20 text-white hover:bg-white/5 rounded-none"
                data-testid="testimonial-prev-btn"
              >
                <ChevronLeft size={20} />
              </Button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 transition-colors ${
                      index === currentIndex ? 'bg-[#FFD700]' : 'bg-white/20'
                    }`}
                    data-testid={`testimonial-dot-${index}`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="border-white/20 text-white hover:bg-white/5 rounded-none"
                data-testid="testimonial-next-btn"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
