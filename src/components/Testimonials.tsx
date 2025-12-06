import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Sarah L",
    role: "Freelance Designer",
    content: "WebCasus completely changed how I create websites. What used to take me days now takes just hours, and the AI suggestions feel like having a personal assistant guiding me. My clients love the polished, professional look!",
    image: "/Sarah Chen.png"
  },
  {
    name: "Michael Rodriguez",
    role: "E-commerce Entrepreneur",
    content: "Setting up an online store used to be overwhelming, but WebCasus simplified everything. From product pages to checkout, the AI helped me create a professional, high-converting website . No coding required.",
    image: "/Michael Rodriguez.png"
  },
  {
    name: "Emily Watson",
    role: "Blogger & Content Creator",
    content: "I’m not a tech person, but WebCasus made designing my blog so easy. The AI-generated templates were smart, stylish, and easy to tweak. I finally have a site that reflects my personality and content perfectly",
    image: "/Emily Watson.png"
  },
  {
    name: "Daniel M",
    role: " Startup Founder",
    content: "Launching our startup website was always stressful, but WebCasus made it simple. The AI built a clean, modern site in minutes, and I could customize it exactly how I wanted. It’s a game-changer for small businesses like mine.",
    image: "/David kim.png"
  },
  {
    name: "Alex Johnson",
    role: "Startup Founder",
    content: "The speed at which we could iterate on designs and content with WebCasus saved us countless hours and resources during our launch phase.",
    image: "/Alex_johnson.png"
  },
  {
    name: "Lisa T",
    role: "Creative Consultant",
    content: "I’ve tried many website builders, but none compare to WebCasus. The AI doesn’t just automate the process , it actually understands my brand and creates layouts that feel unique and professional. It’s like having a designer on demand!",
    image: "/Maria garcia.png"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -5 }}
    className="w-[280px] sm:w-[320px] flex-shrink-0 bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 p-6 rounded-2xl backdrop-blur-sm relative group overflow-hidden cursor-pointer"
  >
    {/* Hover Glow */}
    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="w-20 h-20 bg-primary/20 blur-[40px] rounded-full" />
    </div>

    {/* Active Border Gradient */}
    <div className="absolute inset-0 border border-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    <Quote className="w-8 h-8 text-primary mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

    <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 min-h-[80px]">
      "{testimonial.content}"
    </p>

    <div className="flex items-center gap-3">
      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors duration-300">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h4 className="text-white font-medium text-sm group-hover:text-primary transition-colors duration-300">{testimonial.name}</h4>
        <p className="text-white/50 text-xs">{testimonial.role}</p>
      </div>
    </div>
  </motion.div>
);

const Marquee = ({
  items,
  direction = "left",
  speed = 50
}: {
  items: typeof testimonials,
  direction?: "left" | "right",
  speed?: number
}) => {
  return (
    <div className="flex overflow-hidden select-none mask-gradient-x">
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-shrink-0 gap-4 py-4 pr-4"
      >
        {[...items, ...items].map((item, idx) => (
          <TestimonialCard key={`${item.name}-${idx}`} testimonial={item} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-shrink-0 gap-4 py-4 pr-4"
      >
        {[...items, ...items].map((item, idx) => (
          <TestimonialCard key={`${item.name}-${idx}-duplicate`} testimonial={item} />
        ))}
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 leading-tight">
            <span className="block font-light text-muted-foreground mb-2">
              Trusted by Innovators
            </span>
            <span className="block font-bold text-white">
              What Our Users Are Saying
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why thousands of creators rely on our AI platform to effortlessly elevate their online presence.
          </p>
        </motion.div>
      </div>

      <div className="space-y-4">
        {/* First Row - Moving Left */}
        <Marquee items={testimonials} direction="left" speed={40} />

        {/* Second Row - Moving Right */}
        <Marquee items={[...testimonials].reverse()} direction="right" speed={40} />
      </div>

      {/* Gradient Fade Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Testimonials;
