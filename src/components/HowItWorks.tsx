import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Enter Your Business Details",
    description: "We easily  provide details for your  business and industry",
  },
  {
    number: "02",
    title: "AI Generates Wireframe",
    description: "We  create custom layouts for your needs",
  },
  {
    number: "03",
    title: "Content & Brand Kit",
    description: "Quality content writing and brand asset creations",
  },
  {
    number: "04",
    title: "Customize Your Sections",
    description: "Drop, adjust and edit with our intuitive builders",
  },
];

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-background w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              From Idea to Website in Minutes
            </h2>
          </div>
          <div className="flex lg:justify-end">
            <p className="text-base sm:text-lg text-white/60 max-w-md lg:text-right">
              Our AI-powered platform transforms your vision into a stunning, functional website through a simple, guided process.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch w-full overflow-x-hidden">
          {/* Left Steps - 01 and 02 */}
          <div className="lg:col-span-3 flex flex-col gap-6 justify-between">
            {steps.slice(0, 2).map((step, index) => (
              <motion.div
                key={step.number}
                ref={index === 0 ? ref : undefined}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col justify-center overflow-hidden hover:-translate-y-2 w-full"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-24 h-24 bg-primary/20 blur-[50px] rounded-full" />
                </div>

                <div className="relative z-10">
                  <div className="text-6xl sm:text-7xl font-bold text-white/5 group-hover:text-white/10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 origin-bottom-left mb-6 w-fit">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-base text-white/60 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <div className="lg:col-span-6 flex items-center justify-center py-8 lg:py-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-full min-h-[400px] lg:min-h-[600px] rounded-3xl overflow-hidden border border-white/10"
            >
              <img
                src="/website in minute.png"
                alt="Website in minute"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* Right Steps - 03 and 04 */}
          <div className="lg:col-span-3 flex flex-col gap-6 justify-between">
            {steps.slice(2, 4).map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col justify-center overflow-hidden hover:-translate-y-2 w-full"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-24 h-24 bg-primary/20 blur-[50px] rounded-full" />
                </div>

                <div className="relative z-10">
                  <div className="text-6xl sm:text-7xl font-bold text-white/5 group-hover:text-white/10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 origin-bottom-left mb-6 w-fit">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-base text-white/60 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
