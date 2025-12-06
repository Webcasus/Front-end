import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [exit, setExit] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setExit(true);
            setTimeout(onComplete, 800); // Wait for exit animation
        }, 2500); // Duration of the preloader

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
            {/* Background Layer */}
            <motion.div
                className="absolute inset-0 bg-background"
                initial={{ opacity: 1 }}
                animate={{ opacity: exit ? 0 : 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            {/* Logo Layer */}
            <div className="relative z-10 flex items-center gap-4">
                <motion.div
                    layoutId="brand-logo"
                    className="flex items-center justify-center"
                >
                    <motion.div
                        className="w-64 h-64 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                            duration: 1.0
                        }}
                    >
                        <img src="/Logo1.svg" alt="WebCasus Logo" className="w-full h-full object-contain" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Preloader;
