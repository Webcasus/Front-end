import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, Zap, Palette, Smartphone, Code, Globe } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const faqs: FAQItem[] = [
  {
    question: "Can I integrate third-party tools and services?",
    answer: "Yes. WebCasus supports integrations with payment gateways, analytics, marketing platforms, and other essential business tools, ensuring a seamless workflow.",
  },
  {
    question: "Can I customize the AI-generated website?",
    answer: "Yes. Every website created with WebCasus is fully editable. You can modify layouts, colors, fonts, and content to align with your brand identity.",
  },
  {
    question: "Is WebCasus suitable for businesses of all sizes?",
    answer: "Absolutely. Our platform caters to freelancers, small businesses, and enterprise-level organizations, providing scalable solutions tailored to your specific needs.",
  },
  {
    question: "How quickly can I launch a website with WebCasus?",
    answer: "WebCasus enables rapid website deployment. Our AI-driven platform generates a fully structured, professional website within minutes, allowing you to focus on business growth rather than technical setup.",
  },
  {
    question: "Do I need coding or design experience?",
    answer: "No prior experience is required. WebCasus provides a fully automated design and development process, empowering users to create high-quality websites without technical expertise.",
  },
  {
    question: "What support options are available?",
    answer: "Our dedicated support team is available via chat and email. Comprehensive documentation and tutorials are also provided to guide users through setup, customization, and optimization.",
  },
];

// Type for FAQ items
interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  // Set first question to be open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Icons for each FAQ item
  const faqIcons = [
    { src: "/Q&A section (2).svg", alt: "AI Integration" },
    { src: "/Q&A section.svg", alt: "Customization" },
    { src: "/Q&A section (3).svg", alt: "Mobile" },
    { src: "/Q&A section (4).svg", alt: "Deployment" },
    { src: "/Q&A section (5).svg", alt: "Code" },
    { src: "/Q&A section (6).svg", alt: "Support" }
  ];

  return (
    <section id="faq" className="scroll-mt-28 py-16 sm:py-20 lg:py-32 bg-elevated/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image and Title */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="block text-white/60 font-normal mb-2">
                Have Questions?
              </span>
              <span className="text-primary">
                We Have Answers
              </span>
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-lg mx-auto lg:mx-0">
              Everything you need to know about WebCasus. Can't find the answer you're looking for?
              <a href="#contact" className="text-primary hover:underline ml-1">Contact our support team</a>.
            </p>

            {/* FAQ Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-primary/5 to-transparent p-0">
              <img
                src="/Q&A main img.png"
                alt="Frequently Asked Questions"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Right Column - FAQ Items */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group"
              >
                <div className={`border ${openIndex === index ? 'border-primary/30' : 'border-white/5'} rounded-xl overflow-hidden transition-all duration-200 hover:border-primary/30`}>
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className={`w-full text-left p-5 transition-all duration-200 ${openIndex === index ? 'bg-elevated/80' : 'bg-elevated hover:bg-elevated/80'}`}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-${index}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg ${openIndex === index ? 'bg-primary/10' : 'bg-white/5'} transition-colors`}>
                        <img src={faqIcons[index].src} alt={faqIcons[index].alt} className="w-6 h-6 brightness-0 invert" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className={`text-base font-medium ${openIndex === index ? 'text-white' : 'text-white/90'}`}>
                            {faq.question}
                          </h3>
                          <motion.div
                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="ml-4 flex-shrink-0"
                          >
                            <ChevronDown className={`w-5 h-5 ${openIndex === index ? 'text-primary' : 'text-white/60'} transition-colors`} />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        id={`faq-${index}`}
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: {
                            opacity: 1,
                            height: 'auto',
                            transition: {
                              height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                              opacity: { duration: 0.2, delay: 0.1 }
                            }
                          },
                          collapsed: {
                            opacity: 0,
                            height: 0,
                            transition: {
                              height: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
                              opacity: { duration: 0.1 }
                            }
                          }
                        }}
                        className="overflow-hidden"
                        aria-hidden={openIndex !== index}
                      >
                        <div className="px-5 pb-5 -mt-2 ml-16">
                          <div className="border-t border-white/5 pt-4">
                            <p className="text-white/70 text-sm leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
