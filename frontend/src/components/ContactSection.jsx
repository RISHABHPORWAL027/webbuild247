import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(`Website Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    
    // Open mailto
    window.location.href = `mailto:hello@devyugsolutions.com?subject=${subject}&body=${body}`;
    
    // Show success toast
    setTimeout(() => {
      toast.success('Opening your email client...', {
        description: 'Your default email app will open with the message ready to send.'
      });
      setIsSubmitting(false);
    }, 500);
  };

  const handleWhatsApp = () => {
    const message = formData.message 
      ? encodeURIComponent(`Hi, I'm ${formData.name || 'interested in your services'}. ${formData.message}`)
      : encodeURIComponent('Hi, I am interested in getting a website built.');
    window.open(`https://wa.me/917771834791?text=${message}`, '_blank');
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-20 lg:py-28 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <div>
            <p className="text-sm font-semibold text-[#0A346C] uppercase tracking-wider mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-6 leading-tight">
              Ready to Start
              <br />
              <span className="text-[#0A346C]">Your Project?</span>
            </h2>
            <p className="text-lg text-[#4A5568] mb-8 leading-relaxed">
              Get your website ready in just 5 days. Share your idea with us and we'll get back to you within 24 hours with a free consultation.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <a 
                href="mailto:hello@devyugsolutions.com"
                className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
                data-testid="contact-email-link"
              >
                <div className="w-12 h-12 bg-[#0A346C] rounded-xl flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#718096]">Email us</p>
                  <p className="text-[#1A1A2E] font-medium group-hover:text-[#0A346C] transition-colors">hello@devyugsolutions.com</p>
                </div>
                <ArrowRight size={18} className="text-gray-400 ml-auto group-hover:text-[#0A346C] transition-colors" />
              </a>

              <button 
                onClick={handleWhatsApp}
                className="w-full flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group text-left"
                data-testid="contact-whatsapp-link"
              >
                <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#718096]">WhatsApp (Faster Response)</p>
                  <p className="text-[#1A1A2E] font-medium group-hover:text-[#25D366] transition-colors">+91 7771834791</p>
                </div>
                <ArrowRight size={18} className="text-gray-400 ml-auto group-hover:text-[#25D366] transition-colors" />
              </button>
            </div>

            {/* Why Contact Us */}
            <div className="bg-white rounded-xl p-6">
              <h4 className="font-semibold text-[#1A1A2E] mb-4">What You'll Get:</h4>
              <div className="space-y-3">
                {[
                  'Free project consultation',
                  'Custom quote within 24 hours',
                  'No obligation, no pressure',
                  'Expert advice on your needs'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                    <span className="text-[#4A5568]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg" data-testid="contact-form">
              <h3 className="text-2xl font-bold text-[#1A1A2E] mb-6">Send Us a Message</h3>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1A1A2E] mb-2">Your Name *</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="bg-[#F6F6F6] border-gray-200 text-[#1A1A2E] placeholder:text-gray-400 rounded-lg focus:border-[#0A346C] focus:ring-[#0A346C]/20"
                    data-testid="contact-name-input"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1A1A2E] mb-2">Email Address *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="bg-[#F6F6F6] border-gray-200 text-[#1A1A2E] placeholder:text-gray-400 rounded-lg focus:border-[#0A346C] focus:ring-[#0A346C]/20"
                    data-testid="contact-email-input"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1A1A2E] mb-2">Phone Number</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="bg-[#F6F6F6] border-gray-200 text-[#1A1A2E] placeholder:text-gray-400 rounded-lg focus:border-[#0A346C] focus:ring-[#0A346C]/20"
                    data-testid="contact-phone-input"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1A1A2E] mb-2">Tell us about your project *</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Describe your business and what kind of website you need..."
                    className="bg-[#F6F6F6] border-gray-200 text-[#1A1A2E] placeholder:text-gray-400 rounded-lg focus:border-[#0A346C] focus:ring-[#0A346C]/20 resize-none"
                    data-testid="contact-message-input"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0A346C] text-white font-semibold hover:bg-[#0D4080] rounded-lg py-6 shadow-lg hover:shadow-xl transition-all"
                  data-testid="contact-submit-btn"
                >
                  {isSubmitting ? 'Opening Email...' : 'Send Message'}
                  <Send className="ml-2" size={18} />
                </Button>

                <p className="text-sm text-center text-[#718096]">
                  Or reach us faster via{' '}
                  <button type="button" onClick={handleWhatsApp} className="text-[#25D366] font-medium hover:underline">
                    WhatsApp
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
