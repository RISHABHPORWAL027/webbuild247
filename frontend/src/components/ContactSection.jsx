import React, { useState } from 'react';
import { Send, MessageCircle, Mail, ArrowRight } from 'lucide-react';
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
    window.location.href = `mailto:porwal027@gmail.com?subject=${subject}&body=${body}`;
    
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
    <section id="contact" data-testid="contact-section" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Left Column - Info */}
          <div className="col-span-12 lg:col-span-6">
            <p className="text-xs tracking-[0.2em] uppercase font-mono text-[#FFD700] mb-4">
              Get In Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-base text-[#A1A1AA] mb-8 leading-relaxed">
              Get your website ready in just 5 days. Share your idea with us and we'll get back to you within 24 hours.
            </p>

            {/* Quick Contact Options */}
            <div className="space-y-4 mb-8">
              <a 
                href="mailto:porwal027@gmail.com"
                className="flex items-center gap-4 p-4 bg-[#050505] border border-white/10 hover:border-white/20 transition-colors group"
                data-testid="contact-email-link"
              >
                <div className="p-3 bg-white/5 border border-white/10">
                  <Mail size={20} className="text-[#FFD700]" />
                </div>
                <div>
                  <p className="text-sm text-[#A1A1AA]">Email us</p>
                  <p className="text-white font-medium group-hover:text-[#FFD700] transition-colors">porwal027@gmail.com</p>
                </div>
                <ArrowRight size={18} className="text-white/30 ml-auto group-hover:text-[#FFD700] transition-colors" />
              </a>

              <button 
                onClick={handleWhatsApp}
                className="w-full flex items-center gap-4 p-4 bg-[#050505] border border-white/10 hover:border-[#25D366]/50 transition-colors group text-left"
                data-testid="contact-whatsapp-link"
              >
                <div className="p-3 bg-[#25D366]/10 border border-[#25D366]/30">
                  <MessageCircle size={20} className="text-[#25D366]" />
                </div>
                <div>
                  <p className="text-sm text-[#A1A1AA]">WhatsApp (Faster Response)</p>
                  <p className="text-white font-medium group-hover:text-[#25D366] transition-colors">+91 7771834791</p>
                </div>
                <ArrowRight size={18} className="text-white/30 ml-auto group-hover:text-[#25D366] transition-colors" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 border border-white/10 text-center">
                <p className="text-2xl font-bold text-[#FFD700]">2-5</p>
                <p className="text-xs text-[#A1A1AA]">Days Delivery</p>
              </div>
              <div className="p-4 border border-white/10 text-center">
                <p className="text-2xl font-bold text-[#FFD700]">24h</p>
                <p className="text-xs text-[#A1A1AA]">Response Time</p>
              </div>
              <div className="p-4 border border-white/10 text-center">
                <p className="text-2xl font-bold text-[#FFD700]">100%</p>
                <p className="text-xs text-[#A1A1AA]">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="col-span-12 lg:col-span-6">
            <form onSubmit={handleSubmit} className="p-8 bg-[#050505] border border-white/10" data-testid="contact-form">
              <h3 className="text-xl font-semibold text-white mb-6">Send us a message</h3>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-[#A1A1AA] mb-2">Your Name *</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="bg-[#0a0a0a] border-white/10 text-white placeholder:text-white/30 rounded-none focus:border-[#FFD700] focus:ring-[#FFD700]/20 form-input"
                    data-testid="contact-name-input"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-[#A1A1AA] mb-2">Email Address *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="bg-[#0a0a0a] border-white/10 text-white placeholder:text-white/30 rounded-none focus:border-[#FFD700] focus:ring-[#FFD700]/20 form-input"
                    data-testid="contact-email-input"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-[#A1A1AA] mb-2">Phone Number</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="bg-[#0a0a0a] border-white/10 text-white placeholder:text-white/30 rounded-none focus:border-[#FFD700] focus:ring-[#FFD700]/20 form-input"
                    data-testid="contact-phone-input"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-[#A1A1AA] mb-2">Tell us about your project *</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Describe your business and what kind of website you need..."
                    className="bg-[#0a0a0a] border-white/10 text-white placeholder:text-white/30 rounded-none focus:border-[#FFD700] focus:ring-[#FFD700]/20 resize-none form-input"
                    data-testid="contact-message-input"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FFD700] text-black font-bold hover:bg-[#FFF0A0] rounded-none py-6 btn-shine"
                  data-testid="contact-submit-btn"
                >
                  {isSubmitting ? 'Opening Email...' : 'Send Message'}
                  <Send className="ml-2" size={18} />
                </Button>

                <p className="text-xs text-center text-[#A1A1AA]">
                  Or reach us faster via{' '}
                  <button type="button" onClick={handleWhatsApp} className="text-[#25D366] hover:underline">
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
