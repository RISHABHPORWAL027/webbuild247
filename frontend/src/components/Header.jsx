import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ scrollToContact }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/917771834791?text=Hi, I am interested in getting a website built.', '_blank');
  };

  return (
    <header 
      data-testid="header"
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A346C] border-b border-white/10 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group" data-testid="logo">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500 rounded-xl blur-md opacity-40 group-hover:opacity-75 transition-opacity" />
              <img 
                src="https://customer-assets.emergentagent.com/job_quick-launch-109/artifacts/zvtds1lc_Gemini_Generated_Image_5dd9bw5dd9bw5dd9.png" 
                alt="DevYug Solutions Logo"
                className="w-10 h-10 object-contain relative z-10 rounded-xl border border-white/20"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-white hidden sm:block font-display">
              DevYug<span className="text-indigo-350 font-extrabold">Solutions</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" data-testid="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold tracking-wide text-gray-200 hover:text-white transition-colors relative py-2 group"
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-350 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="outline"
              onClick={handleWhatsApp}
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white rounded-xl transition-all"
              data-testid="header-whatsapp-btn"
            >
              <Phone size={14} className="mr-2 text-cyan-300" />
              WhatsApp
            </Button>
            <Button
              onClick={scrollToContact}
              className="bg-indigo-650 text-white hover:bg-indigo-500 rounded-xl px-6 relative overflow-hidden group shadow-lg shadow-indigo-650/20"
              data-testid="header-get-started-btn"
            >
              <span className="relative z-10">Get Free Quote</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-white/10 bg-[#0A346C] absolute left-0 right-0 px-6 shadow-2xl" data-testid="mobile-menu">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-base font-semibold text-gray-200 hover:text-white transition-colors py-2 border-b border-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4">
                <Button
                  variant="outline"
                  onClick={handleWhatsApp}
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10 rounded-xl w-full"
                >
                  <Phone size={16} className="mr-2 text-cyan-300" />
                  WhatsApp
                </Button>
                <Button
                  onClick={() => {
                    scrollToContact();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-indigo-650 text-white hover:bg-indigo-500 rounded-xl w-full shadow-lg shadow-indigo-650/20"
                >
                  Get Free Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
