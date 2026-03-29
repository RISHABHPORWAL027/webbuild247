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
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505]">
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
        <BlogSection />
        <div ref={contactRef}>
          <ContactSection />
        </div>
      </main>
      <Footer scrollToContact={scrollToContact} />
    </div>
  );
}

export default App;
