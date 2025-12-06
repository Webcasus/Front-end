import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const plans = [
    {
      name: "Starter",
      icon: "/Starter.svg",
      monthlyPrice: 19,
      yearlyPrice: 190,
      description: "Perfect for individuals and small teams getting started with AI-powered website generation.",
      features: [
        "5 AI-generated websites",
        "Basic templates",
        "Standard support",
        "Cloudflare hosting",
        "SSL certificate",
      ],
      popular: false,
      links: {
        monthly: "https://buy.stripe.com/test_5kQdR29MbbuC0o34Ob0oM00",
        yearly: "https://buy.stripe.com/test_6oUfZa2jJ8iqc6Lbcz0oM03"
      }
    },
    {
      name: "Pro",
      icon: "/Pro.svg",
      monthlyPrice: 29,
      yearlyPrice: 290,
      description: "Ideal for growing businesses and agencies that need powerful features and flexibility.",
      features: [
        "Unlimited websites",
        "Premium templates",
        "Priority support",
        "Custom domains",
        "Advanced SEO tools",
        "Brand kit generator",
        "Analytics dashboard",
      ],
      popular: true,
      links: {
        monthly: "https://buy.stripe.com/test_eVq9AM2jJgOWeeT80n0oM01",
        yearly: "https://buy.stripe.com/test_6oU6oA8I79mu5IngwT0oM04"
      }
    },
    {
      name: "Enterprise",
      icon: "/Enterprise.svg",
      monthlyPrice: 49,
      yearlyPrice: 490,
      description: "For large organizations requiring dedicated support and custom solutions.",
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "Custom integrations",
        "White-label options",
        "API access",
        "SLA guarantee",
      ],
      popular: false,
      links: {
        monthly: "https://buy.stripe.com/test_bJecMY4rR0PYb2H6Wj0oM02",
        yearly: "https://buy.stripe.com/test_eVqdR26zZ0PYdaP0xV0oM05"
      }
    },
  ];

  const handlePlanClick = (links: { monthly: string; yearly: string }, planName: string) => {
    setLoadingPlan(planName);
    const link = isYearly ? links.yearly : links.monthly;
    
    // Simulate a small delay for better UX
    setTimeout(() => {
      window.open(link, '_blank');
      setLoadingPlan(null);
    }, 500);
  };

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 leading-tight">
            <span className="block font-light text-muted-foreground mb-2">
              Simple, Transparent Pricing
            </span>
            <span className="block font-bold text-white">
              Pick Your Ideal Plan
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Find the perfect pricing tier that grows unlimitedly with your business.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${!isYearly
                ? "bg-white text-black"
                : "text-white/60 hover:text-white"
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative ${isYearly
                ? "bg-white text-black"
                : "text-white/60 hover:text-white"
                }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500 text-white text-[10px] font-bold rounded-full">
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              whileHover={{ y: plan.popular ? 0 : -8 }}
              className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${plan.popular
                ? "bg-black border-2 border-white shadow-2xl shadow-white/10 md:-mt-4 md:mb-0 md:scale-105"
                : "bg-white/[0.02] border border-white/10"
                }`}
            >
              {/* Recommended Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-white text-black text-center py-2 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs font-bold">Recommended</span>
                  </div>
                </div>
              )}

              <div className={`p-8 ${plan.popular ? "pt-16" : "pt-8"}`}>
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${plan.popular ? "bg-white/10" : "bg-white/5"
                    }`}>
                    <img src={plan.icon} alt={plan.name} className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <motion.div
                    key={isYearly ? "yearly" : "monthly"}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-baseline gap-1"
                  >
                    {plan.monthlyPrice ? (
                      <>
                        <span className="text-5xl font-bold text-white">
                          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-white/40 text-sm">
                          /{isYearly ? "year" : "month"}
                        </span>
                      </>
                    ) : (
                      <span className="text-5xl font-bold text-white">
                        {plan.priceLabel}
                      </span>
                    )}
                  </motion.div>
                  {isYearly && plan.monthlyPrice && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs text-green-400 mt-1"
                    >
                      Save ${plan.monthlyPrice * 12 - plan.yearlyPrice} per year
                    </motion.p>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-white/50 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-white mb-4">What's Included?</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start text-white/60 text-sm"
                      >
                        <div className="mt-0.5 mr-3">
                          <div className="w-1 h-1 rounded-full bg-white/60" />
                        </div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => handlePlanClick(plan.links, plan.name)}
                  disabled={!!loadingPlan}
                  className={`w-full text-sm font-semibold py-6 rounded-xl transition-all duration-300 ${plan.popular
                    ? "bg-white text-black hover:bg-white/90 shadow-lg hover:shadow-xl"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                    } ${loadingPlan === plan.name ? 'opacity-80' : ''}`}
                >
                  {loadingPlan === plan.name ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-t-2 border-t-transparent border-current rounded-full animate-spin"></div>
                      <span>Redirecting...</span>
                    </div>
                  ) : (
                    'Get Started'
                  )}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/40 text-sm mt-12"
        >
          All plans include a 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
