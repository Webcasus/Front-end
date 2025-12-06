import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Sparkles,
  Layout,
  Palette,
  BarChart3,
  Globe,
  ArrowRight,
} from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Sparkles,
    title: "AI-Driven Website Generation",
    description: "Our ai builds a full website for you , complete with structure, pages, content and layout.",
    className: "md:col-span-2", // Top row, 1/3
  },
  {
    icon: Layout,
    title: "Customisable Design & Layouts",
    description: "Retain full control. Change colours, fonts, layouts or tweak content to reflect your brand’s voice",
    className: "md:col-span-2", // Top row, 1/3
  },
  {
    icon: Palette,
    title: "Responsive & Modern",
    description: "Auto-generated color palettes and typography systems.",
    className: "md:col-span-2", // Top row, 1/3
  },
  {
    icon: BarChart3,
    title: "SEO & Analytics Suite",
    description: "Built-in tools to rank higher and understand your audience. Real-time performance metrics and optimization suggestions.",
    className: "md:col-span-3", // Bottom row, 1/2
  },
  {
    icon: Globe,
    title: "Global Deployment",
    description: "One-click publishing to a global edge network. Your site loads instantly for users worldwide with 99.9% uptime.",
    className: "md:col-span-3", // Bottom row, 1/2
  },
];

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const renderVisual = (index: number) => {
    switch (index) {
      case 0: // AI Website Generator (Top Left)
        return (
          <div className="w-full h-full flex items-center justify-center p-4">
            <div className="relative w-full max-w-[160px] aspect-square z-20">
              <motion.div
                className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="relative h-full bg-zinc-900/90 border border-white/10 rounded-xl p-3 shadow-2xl flex flex-col backdrop-blur-sm">
                <div className="flex items-center space-x-1.5 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="h-1.5 w-full bg-white/10 rounded-full" />
                  <div className="h-1.5 w-3/4 bg-white/10 rounded-full" />
                  <div className="h-full max-h-[60px] w-full bg-white/5 rounded-lg mt-1.5 border border-dashed border-white/10 flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-primary/50" />
                  </div>
                </div>
                {/* Floating Element */}
                <motion.div
                  className="absolute -right-2 -top-2 bg-primary text-black text-[9px] font-bold px-2 py-0.5 rounded-full shadow-lg z-30"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Generating...
                </motion.div>
              </div>
            </div>
          </div>
        );
      case 1: // Smart Layout System (Top Middle)
        return (
          <div className="w-full h-full flex items-center justify-center p-4">
            <div className="grid grid-cols-2 gap-2 w-full max-w-[160px] z-20">
              <motion.div
                className="col-span-2 h-10 bg-zinc-900/90 border border-white/10 rounded-lg backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              />
              <motion.div
                className="h-16 bg-primary/10 border border-primary/20 rounded-lg backdrop-blur-sm"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="h-16 bg-zinc-900/90 border border-white/10 rounded-lg backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </div>
        );
      case 2: // Brand Intelligence (Top Right)
        return (
          <div className="w-full h-full flex items-center justify-center py-8 px-2 sm:p-4">
            <div className="relative z-20 max-w-[90px] sm:max-w-[110px] w-full aspect-square flex items-center justify-center">
              <motion.div
                className="w-10 h-10 sm:w-16 sm:h-16 rounded-full border-4 border-white/5 flex items-center justify-center relative z-10 bg-zinc-900"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.5 }}
              >
                <Palette className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </motion.div>
              {/* Color Orbits */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-white/10"
                  style={{ scale: 1.1 + i * 0.15 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary absolute -top-1 left-1/2 -translate-x-1/2 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 3: // SEO & Analytics (Bottom Left)
        return (
          <div className="w-full h-full p-6 flex items-center justify-center">
            <div className="w-full max-w-[240px] bg-zinc-900/50 border border-white/10 rounded-xl p-3 backdrop-blur-sm z-20">
              <div className="flex justify-between items-center mb-3">
                <div className="text-[10px] text-white/40">Traffic Growth</div>
                <div className="text-[10px] text-primary font-bold">+128%</div>
              </div>
              <div className="flex items-end space-x-1.5 h-20">
                {[30, 45, 35, 60, 50, 75, 65, 90].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-white/10 rounded-t-[2px] relative group"
                    initial={{ height: "10%" }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                  >
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );
      case 4: // Global Deployment (Bottom Right)
        return (
          <div className="w-full h-full p-6 flex items-center justify-center">
            <div className="relative w-full max-w-[240px] h-28 z-20">
              {/* Server Nodes */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute bg-zinc-900/90 border border-white/10 rounded-md p-2 flex items-center space-x-2 backdrop-blur-md shadow-lg"
                  style={{
                    top: `${i * 25}%`,
                    left: `${i * 10}%`,
                    zIndex: 3 - i,
                  }}
                  animate={{
                    x: [0, 8, 0],
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 4,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <div className="h-1 w-12 bg-white/10 rounded-full" />
                  <div className="text-[9px] text-white/40 font-mono">98ms</div>
                </motion.div>
              ))}
              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <Globe className="w-12 h-12 text-white/5" />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="features" className="pt-24 pb-16 sm:py-24 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl mb-6 leading-tight tracking-tight">
            <span className="block font-light text-white/60 mb-1.5">
              All You Require to
            </span>
            <span className="block font-bold text-white">
              Design at Lightning Speed
            </span>
          </h2>
          <p className="text-base text-white/60 max-w-2xl mx-auto leading-relaxed">
            Intelligent automation tools that enhance your workflow and deliver high-quality websites in minutes
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-6 gap-5"
        >
          {features.map((feature, index) => {
            const isBottomRow = index >= 3;

            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className={cn(
                  "group relative overflow-hidden rounded-[1.5rem] bg-[#0A0A0A] border border-white/10 hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5",
                  feature.className,
                  isBottomRow ? "flex flex-col md:flex-row" : "flex flex-col"
                )}
              >
                {/* Visual Area */}
                <div className={cn(
                  "relative overflow-hidden flex items-center justify-center",
                  isBottomRow ? "w-full md:w-1/2 order-1 md:order-2 h-[220px] md:h-auto" : "w-full flex-1 order-1 h-[200px]"
                )}>
                  {/* Visual Content - Direct Child for better stacking context */}
                  <div className="w-full h-full relative z-20">
                    {renderVisual(index)}
                  </div>

                  {/* Subtle Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]/40 z-10 pointer-events-none" />
                </div>

                {/* Text Content Area */}
                <div className={cn(
                  "relative z-30 flex flex-col justify-center",
                  isBottomRow ? "w-full md:w-1/2 order-2 md:order-1 p-6 md:p-8" : "w-full order-2 p-6 pt-0"
                )}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      <feature.icon className="w-4 h-4 text-white group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center"
                    >
                      <ArrowRight className="w-3 h-3 text-white" />
                    </motion.div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
