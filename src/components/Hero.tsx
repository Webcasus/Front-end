import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-[calc(100vh-5rem)] sm:min-h-screen overflow-hidden bg-background text-foreground flex items-end pt-20 sm:pt-24">
      {/* Subtle blue background gradient overlays */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black_60%)]" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-background/95"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-black/10 sm:bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-transparent opacity-15 sm:opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/3 via-transparent to-transparent opacity-15 sm:opacity-30" />
      </div>

      {/* Hero Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/background video.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative max-w-7xl mx-auto px-6 w-full h-full flex items-start sm:items-end pb-16 lg:pb-30 pt-16 sm:pt-0">
        <motion.div
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Content */}
          <motion.div
            className="space-y-6 relative z-10"
            variants={fadeUp}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-[-0.5px] md:tracking-[-1px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Unbind Your Powerful Website Designs
              {/* <br className="hidden sm:block" /> */}
              {/* <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                
              </span> */}
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              we harness AI to turn your vision into a polished, business-ready website
              <br className="hidden sm:block" />
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection("#contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden bg-white text-black px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-white/20"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Begin Here
                  <motion.div
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white to-gray-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("#demo")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-sm text-white px-6 py-3 rounded-xl text-sm font-semibold border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10"
              >
                <span className="relative z-10 flex items-center justify-center">
                  See In Action
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 gap-6 md:gap-10 lg:gap-16"
            variants={fadeUp}
          >
            {[
              { value: "40+", label: "Industries innovated" },
              { value: "3M+", label: "Professionals available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-background/50 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl border border-border/20 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-light leading-none mb-1 sm:mb-2 text-foreground">
                  {stat.value}
                </div>
                <div className="text-base text-muted-foreground font-normal">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
