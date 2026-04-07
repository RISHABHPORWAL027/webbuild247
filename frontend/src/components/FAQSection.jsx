import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Most websites are completed in 2-5 business days, depending on complexity. Simple landing pages can be done in 2 days, while full business websites typically take 4-5 days."
    },
    {
      question: "What do I need to provide to get started?",
      answer: "Just share your business idea, any existing content (logo, images, text), and examples of websites you like. We'll handle everything else. If you don't have content ready, we can help with that too."
    },
    {
      question: "Do I need technical knowledge?",
      answer: "Absolutely not! We've designed our process to be beginner-friendly. You just share your vision, and we handle all the technical work. We'll guide you through every step in simple terms."
    },
    {
      question: "What's included in the free domain offer?",
      answer: "You get a free .com domain for the first year with any website package. We help you choose and register the domain, and set everything up for you."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Yes! Website redesign is one of our services. We'll modernize your site while keeping your brand identity. Share your current website and we'll provide recommendations."
    },
    {
      question: "What if I need changes after the website is done?",
      answer: "We offer quick revision rounds during the project. After launch, we provide support for minor changes. For major updates, we can discuss ongoing maintenance plans."
    },
    {
      question: "How do you ensure quality?",
      answer: "We follow a rigorous quality process including design reviews, functionality testing, mobile responsiveness checks, and performance optimization before delivery."
    },
    {
      question: "Will my website work on mobile phones?",
      answer: "Absolutely! Every website we build is fully responsive and mobile-friendly. It will look and work perfectly on phones, tablets, laptops, and all devices including iOS."
    }
  ];

  return (
    <section id="faq" data-testid="faq-section" className="py-20 lg:py-28 bg-[#F6F6F6]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#0A346C] uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#4A5568]">
            Got questions? We've got answers. If you don't find what you're looking for, feel free to contact us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-xl border border-gray-200 px-6 overflow-hidden"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="text-left text-[#1A1A2E] hover:text-[#0A346C] hover:no-underline py-5 text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#4A5568] pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
