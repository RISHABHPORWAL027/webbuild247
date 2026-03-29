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
      question: "How do you use AI in website development?",
      answer: "We use AI to speed up coding, improve design accuracy, and reduce errors. This means faster delivery and lower costs for you, while maintaining high quality through expert developer oversight."
    },
    {
      question: "Will my website work on mobile phones?",
      answer: "Absolutely! Every website we build is fully responsive and mobile-friendly. It will look and work perfectly on phones, tablets, laptops, and all devices including iOS."
    }
  ];

  return (
    <section id="faq" data-testid="faq-section" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] uppercase font-mono text-[#FFD700] mb-4">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#A1A1AA]">
            Got questions? We've got answers.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-white/10 bg-[#050505] px-6"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="text-left text-white hover:text-[#FFD700] hover:no-underline py-5 text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#A1A1AA] pb-5 text-sm leading-relaxed">
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
