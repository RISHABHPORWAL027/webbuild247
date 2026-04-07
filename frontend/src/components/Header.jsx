import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
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
          ? 'bg-white shadow-md' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2" data-testid="logo">
            <img 
              src="https://customer-assets.emergentagent.com/job_quick-launch-109/artifacts/zvtds1lc_Gemini_Generated_Image_5dd9bw5dd9bw5dd9.png" 
              alt="DevYug Solutions Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-[#0A346C] hidden sm:block">
              DevYug<span className="text-[#3A5A85]">Solutions</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" data-testid="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#4A5568] hover:text-[#0A346C] transition-colors"
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              onClick={handleWhatsApp}
              className="border-[#0A346C] text-[#0A346C] hover:bg-[#0A346C] hover:text-white rounded-lg"
              data-testid="header-whatsapp-btn"
            >
              <Phone size={16} className="mr-2" />
              WhatsApp
            </Button>
            <Button
              onClick={scrollToContact}
              className="bg-[#0A346C] text-white hover:bg-[#0D4080] rounded-lg px-6"
              data-testid="header-get-started-btn"
            >
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#0A346C] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100" data-testid="mobile-menu">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium text-[#4A5568] hover:text-[#0A346C] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
                <Button
                  variant="outline"
                  onClick={handleWhatsApp}
                  className="border-[#0A346C] text-[#0A346C] hover:bg-[#0A346C] hover:text-white rounded-lg w-full"
                >
                  <Phone size={16} className="mr-2" />
                  WhatsApp
                </Button>
                <Button
                  onClick={() => {
                    scrollToContact();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-[#0A346C] text-white hover:bg-[#0D4080] rounded-lg w-full"
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
