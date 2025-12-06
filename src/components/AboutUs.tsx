import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer } from "@/lib/animations";

const AboutUs = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const countryFlags = [
        { code: "USA.png", name: "United States" },
        { code: "GER.png", name: "Germany" },
        { code: "CA.png", name: "Canada" },
        { code: "AUS.png", name: "Australia" }
    ];

    return (
        <section id="about-us" className="py-20 sm:py-32 relative overflow-hidden bg-background">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[30%] left-[15%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[30%] right-[15%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="mb-16 sm:mb-20"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        {/* Left: Logo */}
                        <div className="lg:col-span-3">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center overflow-hidden">
                                    <img 
                                        src="/Fav.png" 
                                        alt="WebCasus Logo" 
                                        className="w-9 h-9 object-contain rounded-xl"
                                    />
                                </div>
                                {/* <span className="text-xl font-bold text-white">WebCasus</span> */}
                            </div>
                        </div>

                        {/* Right: Description */}
                        <div className="lg:col-span-9">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-relaxed">
                                Whether you’re <span className="text-primary font-semibold">launching a startup</span> building a portfolio or scaling an e-commerce store 
                                {" "}
                                <span className="text-white/60">
                                    our ai-powered platform adapts to meet your needs, giving you a fully functional, sleek site 
                                </span>{" "}
                                <span className="text-white/60">almost instantly.</span>
                            </h2>
                        </div>
                    </div>
                </motion.div>

                {/* Bento Grid Stats & Features */}
                <motion.div
                    ref={ref}
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[200px]"
                >
                    {/* 230+ Projects Delivered - Left Large Card */}
                    <motion.div
                        variants={fadeUp}
                        className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[2rem] border border-white/10 hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                        <div className="relative h-full bg-[#0A0A0A]/30 backdrop-blur-xl p-8 flex flex-col">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="text-6xl sm:text-7xl md:text-7xl font-bold text-white mb-auto"
                            >
                                230+
                            </motion.div>

                            <div className="mt-auto">
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    Projects Delivered
                                </h3>
                                <p className="text-sm text-white/60 leading-relaxed mb-4">
                                    AI-generated websites launched across diverse industries.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Seamless Workflow Integration - Top Middle */}
                    <motion.div
                        variants={fadeUp}
                        className="md:col-span-2 group relative overflow-hidden rounded-[2rem] border border-white/10 hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent" />
                        <div className="relative h-full bg-[#0A0A0A]/30 backdrop-blur-xl p-6 flex flex-col">
                            <div className="mb-auto">
                                <h3 className="text-base font-semibold text-white mb-2">
                                    Seamless Workflow Integration
                                </h3>
                                <p className="text-xs text-white/60 leading-relaxed">
                                    From ideation to deployment optimizing every step.
                                </p>
                            </div>

                            <div className="flex gap-2 mt-auto justify-end">
                                <motion.div
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="w-10 h-10 rounded-xl bg-[#1769FF]/20 border border-[#1769FF]/40 flex items-center justify-center backdrop-blur-sm"
                                >
                                    <svg className="w-5 h-5 text-[#1769FF]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                                    </svg>
                                </motion.div>

                                {/* <motion.div
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="w-10 h-10 rounded-xl bg-[#1DA1F2]/20 border border-[#1DA1F2]/40 flex items-center justify-center backdrop-blur-sm"
                                >
                                    <svg className="w-5 h-5 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </motion.div> */}

                                <motion.div
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="w-10 h-10 rounded-xl bg-[#EA4C89]/20 border border-[#EA4C89]/40 flex items-center justify-center backdrop-blur-sm"
                                >
                                    <svg className="w-5 h-5 text-[#EA4C89]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
                                    </svg>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 35X Client Growth Results - Top Right */}
                    <motion.div
                        variants={fadeUp}
                        className="md:col-span-2 group relative overflow-hidden rounded-[2rem] border border-white/10 hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                        <div className="relative h-full bg-[#0A0A0A]/30 backdrop-blur-xl p-8 flex flex-col">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-6xl sm:text-7xl font-bold text-white mb-auto"
                            >
                                35X
                            </motion.div>

                            <div className="mt-auto">
                                <h3 className="text-sm font-semibold text-white mb-1">
                                    Client Growth Results
                                </h3>
                                <p className="text-xs text-white/60 leading-relaxed">
                                    Our clients experienced 35x faster time-to-market.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* 98% Client Satisfaction - Bottom Middle */}
                    <motion.div
                        variants={fadeUp}
                        className="md:col-span-2 group relative overflow-hidden rounded-[2rem] border border-white/10 hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                        <div className="relative h-full bg-[#0A0A0A]/30 backdrop-blur-xl p-8 flex flex-col">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-6xl sm:text-7xl font-bold text-white mb-auto"
                            >
                                98%
                            </motion.div>

                            <div className="mt-auto">
                                <h3 className="text-sm font-semibold text-white mb-1">
                                    Client Satisfaction
                                </h3>
                                <p className="text-xs text-white/60 leading-relaxed">
                                    Based on client surveys and ongoing feedback.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Our Clients in 50+ Countries - Bottom Right */}
                    <motion.div
                        variants={fadeUp}
                        className="md:col-span-2 group relative overflow-hidden rounded-[2rem] border border-white/10 hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent" />
                        <div className="relative h-full bg-[#0A0A0A]/30 backdrop-blur-xl p-6 flex flex-col">
                            <div className="mb-auto">
                                <h3 className="text-base font-semibold text-white mb-2">
                                    Our Clients in 50+ Countries
                                </h3>
                                <p className="text-xs text-white/60 leading-relaxed">
                                    Empowering brands worldwide with insights.
                                </p>
                            </div>

                            <div className="flex items-center justify-end mt-auto w-full">
                                <div className="flex">
                                    {countryFlags.map((flag, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: i * 0.1 }}
                                            whileHover={{ scale: 1.1 }}
                                            className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-background bg-white flex-shrink-0 -mr-2 last:mr-0 z-10"
                                            style={{ zIndex: 10 - i }}
                                            title={flag.name}
                                        >
                                            <img 
                                                src={`/${flag.code}`} 
                                                alt={flag.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                    ))}
                                    <motion.div 
                                        className="w-8 h-8 rounded-full bg-primary/40 border-2 border-background flex items-center justify-center text-sm font-semibold text-white ml-1 z-20"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: countryFlags.length * 0.1 }}
                                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 102, 241, 0.6)' }}
                                    >
                                        40+
                                    </motion.div>
                                </div>
                                {/* <span className="text-xs text-white/60 ml-2 relative z-0">
                                    and more
                                </span> */}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;
