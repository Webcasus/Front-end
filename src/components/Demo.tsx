import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Send, Check, Terminal, Layout, Monitor, Smartphone, MessageSquare, Mail, User, PanelBottom } from "lucide-react";
import { fadeUp } from "@/lib/animations";

// Mock Generated Components
const GeneratedHero = () => (
  <div className="h-full flex flex-col justify-center items-center text-center p-8 bg-gradient-to-b from-white/5 to-transparent">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-6">
      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      <span className="text-xs font-medium text-white/80">v2.0 Released</span>
    </div>
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
      Build Faster with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI Power</span>
    </h1>
    <p className="text-white/60 max-w-md mb-8 leading-relaxed">
      Deploy production-ready applications in minutes, not days. The future of development is here.
    </p>
    <div className="flex gap-4">
      <button className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors">
        Get Started
      </button>
      <button className="px-6 py-2 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/10">
        Documentation
      </button>
    </div>
  </div>
);

const GeneratedFeatures = () => (
  <div className="h-full flex flex-col justify-center p-8">
    <div className="grid grid-cols-2 gap-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-3 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white/80" />
          </div>
          <h3 className="text-sm font-bold text-white mb-1">Feature {i}</h3>
          <p className="text-xs text-white/50">Automated optimization for better performance.</p>
        </div>
      ))}
    </div>
  </div>
);

const GeneratedPricing = () => (
  <div className="h-full flex items-center justify-center p-8 gap-4">
    {[
      { name: "Starter", price: "$0", active: false },
      { name: "Pro", price: "$29", active: true }
    ].map((plan) => (
      <div
        key={plan.name}
        className={`flex-1 p-6 rounded-2xl border ${plan.active
          ? "bg-white/10 border-white/20 relative overflow-hidden"
          : "bg-transparent border-white/10"
          }`}
      >
        {plan.active && (
          <div className="absolute top-0 right-0 px-3 py-1 bg-white text-black text-[10px] font-bold rounded-bl-lg">
            POPULAR
          </div>
        )}
        <h3 className="text-sm font-medium text-white/60 mb-2">{plan.name}</h3>
        <div className="text-3xl font-bold text-white mb-4">{plan.price}<span className="text-sm font-normal text-white/40">/mo</span></div>
        <ul className="space-y-2 mb-6">
          {[1, 2, 3].map((i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-white/70">
              <Check className="w-3 h-3 text-green-400" /> Feature {i}
            </li>
          ))}
        </ul>
        <button className={`w-full py-2 rounded-lg text-xs font-bold transition-colors ${plan.active ? "bg-white text-black" : "bg-white/10 text-white hover:bg-white/20"
          }`}>
          Choose {plan.name}
        </button>
      </div>
    ))}
  </div>
);

const GeneratedTestimonials = () => (
  <div className="h-full flex flex-col justify-center p-8">
    <div className="grid gap-4">
      {[1, 2].map((i) => (
        <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">User Name</div>
              <div className="text-xs text-white/40">CEO, TechCorp</div>
            </div>
          </div>
          <p className="text-xs text-white/60 leading-relaxed">
            "This AI tool completely transformed how we build websites. Incredible speed and quality."
          </p>
        </div>
      ))}
    </div>
  </div>
);

const GeneratedContact = () => (
  <div className="h-full flex items-center justify-center p-8">
    <div className="w-full max-w-sm bg-white/5 border border-white/10 rounded-xl p-6">
      <h3 className="text-lg font-bold text-white mb-1">Contact Us</h3>
      <p className="text-xs text-white/40 mb-4">We'd love to hear from you.</p>
      <div className="space-y-3">
        <div className="space-y-1">
          <label className="text-[10px] text-white/60">Email</label>
          <div className="flex items-center gap-2 px-3 py-2 bg-black/20 border border-white/10 rounded-lg">
            <Mail className="w-3 h-3 text-white/40" />
            <span className="text-xs text-white/40">hello@example.com</span>
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] text-white/60">Message</label>
          <div className="h-20 px-3 py-2 bg-black/20 border border-white/10 rounded-lg text-xs text-white/40 flex p-2">
            Type your message...
          </div>
        </div>
        <button className="w-full py-2 bg-white text-black text-xs font-bold rounded-lg hover:bg-white/90">
          Send Message
        </button>
      </div>
    </div>
  </div>
);

const GeneratedFooter = () => (
  <div className="h-full flex flex-col justify-end p-8">
    <div className="border-t border-white/10 pt-8">
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <div className="text-sm font-bold text-white mb-4">Company</div>
          <div className="space-y-2 text-xs text-white/40">
            <div>About</div>
            <div>Careers</div>
            <div>Blog</div>
          </div>
        </div>
        <div>
          <div className="text-sm font-bold text-white mb-4">Legal</div>
          <div className="space-y-2 text-xs text-white/40">
            <div>Privacy</div>
            <div>Terms</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-[10px] text-white/20">
        <div>© 2024 Brand.</div>
        <div className="flex gap-2">
          <div className="w-4 h-4 rounded-full bg-white/10" />
          <div className="w-4 h-4 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  </div>
);

const Demo = () => {
  const [activeTab, setActiveTab] = useState<"hero" | "features" | "pricing" | "testimonials" | "contact" | "footer">("hero");
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const generate = (type: "hero" | "features" | "pricing" | "testimonials" | "contact" | "footer") => {
    if (activeTab === type && !isGenerating) return;

    setIsGenerating(true);
    setActiveTab(type);
    setProgress(0);
    setLogs([]);

    const steps = [
      "Analyzing requirements...",
      "Generating layout structure...",
      "Applying design system...",
      "Optimizing assets...",
      "Finalizing build..."
    ];

    let currentStep = 0;

    const interval = setInterval(() => {
      if (currentStep >= steps.length) {
        clearInterval(interval);
        setIsGenerating(false);
        return;
      }

      setLogs(prev => [...prev, steps[currentStep]]);
      setProgress(prev => prev + 20);
      currentStep++;
    }, 400);
  };

  return (
    <section id="demo" className="scroll-mt-28 py-12 sm:py-16 lg:py-24 xl:py-32 bg-background relative overflow-hidden w-full">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 leading-tight">
            <span className="block font-light text-muted-foreground mb-2">
              Experience the Power
            </span>
            <span className="block font-bold text-white">
              Build in Real-Time
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Experience the power of our AI engine. Select a component type below and watch it come to life instantly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 lg:h-auto xl:h-[600px]">
          {/* Left: Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col gap-6 w-full"
          >
            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-4 sm:p-6 flex-1 flex flex-col backdrop-blur-xl w-full h-full min-h-[300px] sm:min-h-0">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 overflow-hidden">
                  <img src="/Ai generator icon.svg" alt="AI Generator" className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">AI Generator</h3>
                  <p className="text-xs text-white/40">Select a preset to generate</p>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3 mb-auto overflow-y-auto pr-2 custom-scrollbar w-full">
                {[
                  { id: "hero", label: "Modern Hero Section", icon: "/modern_hero_section.svg" },
                  { id: "features", label: "Feature Grid", icon: "/Feature grid.svg" },
                  { id: "pricing", label: "Pricing Table", icon: "/Pricing table.svg" },
                  { id: "testimonials", label: "Testimonials", icon: "/Testimonials.svg" },
                  { id: "contact", label: "Contact Form", icon: "/Contact_form.svg" },
                  { id: "footer", label: "Footer Layout", icon: "/Footer layout.svg" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => generate(item.id as any)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-white text-black'
                        : 'text-white/60 hover:bg-white/10 hover:text-white/80'
                    }`}
                  >
                    <img src={item.icon} alt={item.label} className="w-6 h-6 flex-shrink-0" />
                    <span className="text-sm font-medium text-left">{item.label}</span>
                    {activeTab === item.id && !isGenerating && (
                      <Check className="w-4 h-4 ml-auto" />
                    )}
                    {activeTab === item.id && isGenerating && (
                      <div className="w-4 h-4 ml-auto border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between text-xs text-white/40 mb-2">
                  <span>AI Confidence</span>
                  <span>98%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[98%]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 h-[400px] sm:h-[500px] lg:h-auto w-full"
          >
            <div className="h-full w-full bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-2xl relative group">
              {/* Window Header */}
              <div className="h-10 sm:h-12 bg-white/5 border-b border-white/5 flex items-center px-3 sm:px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="ml-4 px-3 py-1 rounded-md bg-black/50 border border-white/5 text-[10px] text-white/40 font-mono flex items-center gap-2">
                  <Terminal className="w-3 h-3" />
                  https://webcascus.com
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 relative bg-black/40 overflow-auto">
                <AnimatePresence mode="wait">
                  {isGenerating ? (
                    <motion.div
                      key="generating"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col items-center justify-center p-8"
                    >
                      <div className="w-full max-w-md space-y-4 font-mono text-sm">
                        {logs.map((log, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 text-white/60"
                          >
                            <span className="text-green-500">➜</span>
                            {log}
                          </motion.div>
                        ))}
                        <motion.div
                          className="h-1 bg-white/10 rounded-full mt-8 overflow-hidden"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <motion.div
                            className="h-full bg-primary"
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full"
                    >
                      {activeTab === "hero" && <GeneratedHero />}
                      {activeTab === "features" && <GeneratedFeatures />}
                      {activeTab === "pricing" && <GeneratedPricing />}
                      {activeTab === "testimonials" && <GeneratedTestimonials />}
                      {activeTab === "contact" && <GeneratedContact />}
                      {activeTab === "footer" && <GeneratedFooter />}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
