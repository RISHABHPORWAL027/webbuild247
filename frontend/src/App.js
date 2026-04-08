import React, { useState, useRef } from "react";
import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AIBenefitsSection from "@/components/AIBenefitsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Update page title
  React.useEffect(() => {
    document.title = "DevYug Solutions - Professional Web Development in 2-5 Days";
    
    // Remove "Made with Emergent" badge
    const removeBadge = () => {
      const badges = document.querySelectorAll('[class*="emergent"], [data-emergent], a[href*="emergent"]');
      badges.forEach(el => {
        if (el.textContent?.toLowerCase().includes('emergent') || el.textContent?.toLowerCase().includes('made with')) {
          el.style.display = 'none';
        }
      });
    };
    removeBadge();
    const observer = new MutationObserver(removeBadge);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
      <Header scrollToContact={scrollToContact} />
      <main>
        <HeroSection scrollToContact={scrollToContact} />
        <AboutSection />
        <AIBenefitsSection />
        <FeaturesSection />
        <ServicesSection />
        <HowItWorksSection />
        <PortfolioSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <FAQSection />
        <div ref={contactRef}>
          <ContactSection />
        </div>
      </main>
      <Footer scrollToContact={scrollToContact} />
    </div>
  );
}

export default App;
