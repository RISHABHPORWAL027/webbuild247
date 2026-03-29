import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ scrollToContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Blog', href: '#blog' },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/917771834791?text=Hi, I am interested in getting a website built.', '_blank');
  };

  return (
    <header 
      data-testid="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2" data-testid="logo">
            <span className="text-2xl font-black tracking-tight text-white">
              webbuild<span className="text-[#FFD700]">247</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#A1A1AA] hover:text-white transition-colors"
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              onClick={handleWhatsApp}
              className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 rounded-none"
              data-testid="header-whatsapp-btn"
            >
              WhatsApp
            </Button>
            <Button
              onClick={scrollToContact}
              className="bg-[#FFD700] text-black font-bold hover:bg-[#FFF0A0] rounded-none btn-shine"
              data-testid="header-get-started-btn"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10" data-testid="mobile-menu">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium text-[#A1A1AA] hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
                <Button
                  variant="outline"
                  onClick={handleWhatsApp}
                  className="border-white/20 text-white hover:bg-white/5 rounded-none w-full"
                >
                  WhatsApp
                </Button>
                <Button
                  onClick={() => {
                    scrollToContact();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-[#FFD700] text-black font-bold hover:bg-[#FFF0A0] rounded-none w-full"
                >
                  Get Started
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
