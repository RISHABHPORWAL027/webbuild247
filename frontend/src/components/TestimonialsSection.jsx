import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Got our agricultural platform ready in just 4 days. The team understood our vision perfectly and delivered a website that truly represents Ayekart's mission. Highly recommend for anyone looking for quick, quality work.",
      author: "Abhishek Sharma",
      role: "Founder, Ayekart",
      initials: "AS",
      rating: 5
    },
    {
      quote: "The development process was seamless. Mobibulls Media website was up and running faster than I expected, and the performance is excellent. Great team to work with!",
      author: "Rohit Gupta",
      role: "Founder, Mobibulls Media",
      initials: "RG",
      rating: 5
    },
    {
      quote: "Building an AI platform needed a team that understands technology. They delivered Assitly's interface beautifully with a modern look that our users love. Fast turnaround and professional work.",
      author: "Vikram Singh",
      role: "Founder, Assitly AI",
      initials: "VS",
      rating: 5
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
    <section data-testid="testimonials-section" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-[#0A346C] uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[#4A5568]">
            Don't just take our word for it. Here's what business owners say about working with us.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#F6F6F6] rounded-2xl p-8 lg:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 w-12 h-12 bg-[#0A346C] rounded-xl flex items-center justify-center">
              <Quote size={24} className="text-white" />
            </div>
            
            {/* Content */}
            <div className="text-center pt-8">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-xl lg:text-2xl text-[#1A1A2E] leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div 
                  className="w-14 h-14 flex items-center justify-center bg-[#0A346C] rounded-full text-white font-bold text-lg"
                  data-testid="testimonial-avatar"
                >
                  {testimonials[currentIndex].initials}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-[#1A1A2E]">{testimonials[currentIndex].author}</p>
                  <p className="text-sm text-[#0A346C]">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="border-gray-300 text-[#4A5568] hover:bg-[#0A346C] hover:text-white hover:border-[#0A346C] rounded-full"
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
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-[#0A346C]' : 'bg-gray-300'
                    }`}
                    data-testid={`testimonial-dot-${index}`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="border-gray-300 text-[#4A5568] hover:bg-[#0A346C] hover:text-white hover:border-[#0A346C] rounded-full"
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
