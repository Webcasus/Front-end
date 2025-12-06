import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const CTA = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative overflow-hidden rounded-3xl sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 text-center bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10"
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl opacity-30" />

          {/* Content */}
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            >
              Ready to Unlock your
              <br className="hidden sm:block" />
              Brand's Potential?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-base lg:text-lg text-white/60 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4"
            >
              Our design expertise can take your brand from ordinary to extraordinary.
              <br className="hidden sm:block" />
              Let's create a lasting impression.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <motion.button
                onClick={() => scrollToSection("#contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto group relative overflow-hidden bg-white text-black px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-white/20 flex items-center justify-center"
              >
                <span className="relative z-10 flex items-center">
                  Get a quote
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
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
                className="w-full sm:w-auto group relative overflow-hidden bg-transparent text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/5"
              >
                Learn more
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
