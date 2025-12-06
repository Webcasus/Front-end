import { motion } from "framer-motion";
import { Facebook, Youtube, Linkedin, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";
import { PinterestIcon } from "./ui/footer-icons";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import TermsAndConditionsModal from "./TermsAndConditionsModal";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const footerLinks = {
    Product: ["About Us", "Features", "How it works", "Pricing"],
    Resources: ["Demo", "FAQ", "Testimonials", "Contact Us"],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61584078341048", label: "Facebook" },
    { icon: Youtube, href: "https://www.youtube.com/@WebCasus", label: "YouTube" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/webcasus/", label: "LinkedIn" },
    { icon: PinterestIcon, href: "https://www.pinterest.com/WebCasus/", label: "Pinterest" },
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/xdkqzzdp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
      console.error('Subscription error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const linkMapping: Record<string, string> = {
    "About Us": "#about-us",
    "Features": "#features",
    "How it works": "#how-it-works",
    "Pricing": "#pricing",
    "Demo": "#demo",
    "FAQ": "#faq",
    "Testimonials": "#testimonials",
    "Contact Us": "#contact",
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background pt-12 pb-32 sm:pb-40 relative overflow-hidden">
      {/* Large Watermark Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full select-none pointer-events-none overflow-hidden flex justify-center opacity-[0.2]">
        <h1 className="text-[16vw] font-bold text-white whitespace-nowrap leading-none tracking-tighter translate-y-[15%]">
          WebCasus
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 mb-10">
            {/* Brand Section */}
            <div className="lg:col-span-5 space-y-6">
              <button
                onClick={() => {
                  const element = document.querySelector("#hero");
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="w-20 h-20 flex items-center justify-center">
                  <img src="/Logo1.svg" alt="WebCasus Logo" className="w-full h-full object-contain" />
                </div>
              </button>

              <p className="text-white/60 text-sm leading-relaxed max-w-md">
                WebCasus empowers teams to transform raw ideas into clear, compelling websites — making your vision easier to share, understand, and act on.
              </p>

              <div className="flex gap-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors transform hover:scale-110 duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links and Newsletter Section */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Product & Resources Links */}
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="font-semibold text-white mb-4 text-sm">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href={linkMapping[link] || "#"}
                          onClick={(e) => handleScroll(e, linkMapping[link] || "#")}
                          className="text-white/60 hover:text-primary transition-colors text-xs sm:text-sm"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Newsletter Section */}
              <div className="col-span-2 sm:col-span-1">
                <h4 className="font-semibold text-white mb-4 text-sm">Newsletter</h4>
                <p className="text-white/60 text-xs sm:text-sm mb-4 leading-relaxed">
                  Get the latest updates.
                </p>

                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="space-y-2">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setError('');
                        }}
                        placeholder="Enter your email"
                        className={`w-full bg-white/5 border ${error ? 'border-red-500' : 'border-white/10'} rounded-lg pl-10 pr-4 py-2.5 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all ${isSubscribed ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isSubscribed || isSubmitting}
                        required
                      />
                    </div>
                    {error && <p className="text-red-500 text-xs">{error}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={!isSubscribed && !isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubscribed && !isSubmitting ? { scale: 0.98 } : {}}
                    className={`w-full text-xs sm:text-sm font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap ${isSubscribed ? 'group' : ''} ${isSubscribed
                      ? 'bg-[#333333] text-white hover:bg-white hover:text-black'
                      : 'bg-primary text-black hover:bg-white hover:text-black'
                      } ${isSubmitting ? 'opacity-75' : ''}
                    xl:py-2.5 xl:px-6 xl:text-md
                    lg:py-2.5 lg:px-5 lg:text-sm
                    md:py-2.5 md:px-5`}
                    disabled={isSubscribed || isSubmitting}
                  >
                    {isSubscribed ? (
                      'Thanks for subscribing!'
                    ) : isSubmitting ? (
                      'Subscribing...'
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs sm:text-sm">
              © {currentYear} WebCasus. All rights reserved.
            </p>

            <div className="flex gap-6">
              <button
                onClick={() => setIsPrivacyPolicyOpen(true)}
                className="text-white/40 hover:text-white transition-colors text-xs sm:text-sm"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setIsTermsOpen(true)}
                className="text-white/40 hover:text-white transition-colors text-xs sm:text-sm"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyPolicyOpen}
        onClose={() => setIsPrivacyPolicyOpen(false)}
      />

      {/* Terms and Conditions Modal */}
      <TermsAndConditionsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />
    </footer>
  );
};

export default Footer;
