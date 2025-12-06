import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['hero', 'about-us', 'features', 'how-it-works', 'demo', 'pricing', 'testimonials', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 100; // Add offset to account for header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(`#${section}`);
            break;
          }
        }
      }
    };

    // Run once on mount to set initial active link
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (href: string) => {
    setActiveLink(href);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = window.innerWidth < 640 ? 80 : 100; // Larger offset for mobile
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsSidebarOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about-us" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Demo", href: "#demo" },
    { name: "Pricing", href: "#pricing" },
    // { name: "Testimonials", href: "#testimonials" },
    // { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 transition-all duration-300 ${isSidebarOpen ? "z-30 blur-sm" : "z-50"}`}>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`w-[95%] max-w-5xl rounded-full border border-white/10 backdrop-blur-md transition-all duration-300 ${isScrolled ? "bg-black/50 shadow-lg" : "bg-black/20"
            }`}
        >
          <div className="px-6 md:px-8">
            <div className="flex items-center justify-between h-14 md:h-16">
              {/* Logo */}
              <motion.button
                layoutId="brand-logo"
                className="flex-shrink-0 flex items-center justify-center cursor-pointer"
                onClick={() => scrollToSection("#hero")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 15,
                  mass: 1,
                  duration: 1.2
                }}
              >
                <div className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center">
                  <img src="/Logo1.svg" alt="WebCasus Logo" className="w-full h-full object-contain" />
                </div>
              </motion.button>

              <div className="flex items-center gap-3">
                {/* Menu Button */}
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-300 group"
                  aria-label="Toggle menu"
                >
                  <span className="text-sm font-medium text-white/80 group-hover:text-white hidden sm:block">Menu</span>
                  {isSidebarOpen ? (
                    <X className="h-5 w-5 text-white" />
                  ) : (
                    <Menu className="h-5 w-5 text-white" />
                  )}
                </button>

                {/* Start Project Button */}
                <a
                  href="http://app.webcasus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:block"
                >
                  <Button
                    className="rounded-full bg-white text-black hover:bg-white/90 font-semibold px-6 h-10 transition-all duration-300"
                  >
                    Get Started
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.nav>
      </header>

      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/80 z-40"
              onClick={() => setIsSidebarOpen(false)}
            />

            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              style={{ willChange: "transform" }}
              className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background/95 backdrop-blur-xl border-l border-border/50 shadow-2xl z-50 overflow-y-auto"
            >
              <div className="h-full flex flex-col p-6">
                <div className="flex items-center justify-between mb-8">
                  <button
                    onClick={() => scrollToSection("#hero")}
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img src="/Logo1.svg" alt="WebCasus Logo" className="w-full h-full object-contain" />
                    </div>
                  </button>
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <nav className="flex-1 flex flex-col justify-center space-y-6">
                  {navLinks.map((link) => (
                    <motion.button
                      key={link.name}
                      variants={itemVariants}
                      onClick={() => scrollToSection(link.href)}
                      className={`group flex items-center justify-between w-full text-left transition-all duration-300 ${activeLink === link.href
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                      <span className={`text-3xl sm:text-4xl font-bold tracking-tight transition-all duration-300 ${activeLink === link.href ? 'translate-x-2' : 'group-hover:translate-x-2'
                        }`}>
                        {link.name}
                      </span>
                      <ArrowRight className={`h-6 w-6 transition-all duration-300 ${activeLink === link.href
                        ? 'opacity-100 translate-x-0 text-primary'
                        : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
                        }`} />
                    </motion.button>
                  ))}
                </nav>

                <div className="mt-8">
                  <motion.div variants={itemVariants}>
                    <a
                      href="http://app.webcasus.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button
                        className="w-full bg-foreground text-background hover:bg-foreground/90 font-bold py-7 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
