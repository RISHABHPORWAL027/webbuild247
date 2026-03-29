import React from 'react';
import { MessageCircle, Mail, ArrowUp } from 'lucide-react';
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
      { label: 'Blog', href: '#blog' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ]
  };

  return (
    <footer data-testid="footer" className="bg-[#050505] border-t border-white/10">
      {/* CTA Banner */}
      <div className="py-16 bg-gradient-to-r from-[#FFD700]/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Build Your Website?
          </h2>
          <p className="text-[#A1A1AA] mb-8 max-w-xl mx-auto">
            Start your business online today. Get your website ready in just 5 days.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={scrollToContact}
              className="bg-[#FFD700] text-black font-bold hover:bg-[#FFF0A0] rounded-none px-8 py-6 btn-shine"
              data-testid="footer-get-started-btn"
            >
              Get Started
            </Button>
            <Button
              onClick={handleWhatsApp}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 rounded-none px-8 py-6"
              data-testid="footer-whatsapp-btn"
            >
              <MessageCircle className="mr-2" size={18} />
              WhatsApp Now
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            {/* Brand Column */}
            <div className="col-span-12 md:col-span-4">
              <a href="/" className="inline-block mb-6" data-testid="footer-logo">
                <span className="text-2xl font-black tracking-tight text-white">
                  webbuild<span className="text-[#FFD700]">247</span>
                </span>
              </a>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                Fast, affordable, AI-powered website development. 
                Get your professional website in 2-5 days.
              </p>
              <div className="flex gap-3">
                <a 
                  href="mailto:porwal027@gmail.com"
                  className="p-3 bg-white/5 border border-white/10 hover:border-[#FFD700]/50 transition-colors"
                  data-testid="footer-email-icon"
                >
                  <Mail size={18} className="text-[#A1A1AA]" />
                </a>
                <button 
                  onClick={handleWhatsApp}
                  className="p-3 bg-white/5 border border-white/10 hover:border-[#25D366]/50 transition-colors"
                  data-testid="footer-whatsapp-icon"
                >
                  <MessageCircle size={18} className="text-[#A1A1AA]" />
                </button>
              </div>
            </div>

            {/* Services Links */}
            <div className="col-span-6 md:col-span-2">
              <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-[#A1A1AA] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="col-span-6 md:col-span-2">
              <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-[#A1A1AA] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-12 md:col-span-4">
              <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-3">
                <p className="text-sm text-[#A1A1AA]">
                  <span className="text-white">Email:</span> porwal027@gmail.com
                </p>
                <p className="text-sm text-[#A1A1AA]">
                  <span className="text-white">WhatsApp:</span> +91 7771834791
                </p>
                <p className="text-sm text-[#A1A1AA]">
                  <span className="text-white">Response:</span> Within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#A1A1AA]">
            © {new Date().getFullYear()} webbuild247.com. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="p-2 border border-white/10 hover:border-white/30 transition-colors"
            data-testid="scroll-to-top-btn"
          >
            <ArrowUp size={18} className="text-[#A1A1AA]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
