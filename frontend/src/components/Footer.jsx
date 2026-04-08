import React from 'react';
import { Phone, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = ({ scrollToContact }) => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/917771834791?text=Hi, I am interested in getting a website built.', '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { label: 'Business Websites', href: '#services' },
      { label: 'Portfolio Sites', href: '#services' },
      { label: 'Landing Pages', href: '#services' },
      { label: 'E-commerce', href: '#services' },
      { label: 'Redesign', href: '#services' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ]
  };

  return (
    <footer data-testid="footer" className="bg-[#0A346C] text-white">
      {/* CTA Banner */}
      <div className="py-16 bg-gradient-to-r from-[#0A346C] to-[#3A5A85]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Build Your Website?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Start your business online today. Get your professional website ready in just 5 days.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={scrollToContact}
              className="bg-white text-[#0A346C] font-semibold hover:bg-gray-100 rounded-lg px-8 py-6"
              data-testid="footer-get-started-btn"
            >
              Get Free Quote
            </Button>
            <Button
              onClick={handleWhatsApp}
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-lg px-8 py-6"
              data-testid="footer-whatsapp-btn"
            >
              <Phone className="mr-2" size={18} />
              WhatsApp Now
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 bg-[#082a56]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Brand Column */}
            <div className="col-span-12 md:col-span-4">
              <a href="/" className="inline-flex items-center gap-2 mb-6" data-testid="footer-logo">
                <img 
                  src="https://customer-assets.emergentagent.com/job_quick-launch-109/artifacts/zvtds1lc_Gemini_Generated_Image_5dd9bw5dd9bw5dd9.png" 
                  alt="DevYug Solutions Logo"
                  className="w-10 h-10 object-contain bg-white rounded-lg p-1"
                />
                <span className="text-xl font-bold">
                  DevYug<span className="text-white/70">Solutions</span>
                </span>
              </a>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Professional web development services. Get your website ready in 2-5 days with quality and care.
              </p>
              <div className="flex gap-3">
                <a 
                  href="mailto:hello@devyugsolutions.com"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  data-testid="footer-email-icon"
                >
                  <Mail size={18} />
                </a>
                <button 
                  onClick={handleWhatsApp}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  data-testid="footer-whatsapp-icon"
                >
                  <Phone size={18} />
                </button>
              </div>
            </div>

            {/* Services Links */}
            <div className="col-span-6 md:col-span-2">
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="col-span-6 md:col-span-2">
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-12 md:col-span-4">
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-sm">
                <p className="text-white/70">
                  <span className="text-white">Email:</span> hello@devyugsolutions.com
                </p>
                <p className="text-white/70">
                  <span className="text-white">WhatsApp:</span> +91 7771834791
                </p>
                <p className="text-white/70">
                  <span className="text-white">Response:</span> Within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 bg-[#06203f] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} DevYug Solutions. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
            data-testid="scroll-to-top-btn"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
