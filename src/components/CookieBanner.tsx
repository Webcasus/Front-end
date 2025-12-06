import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent-v2");
        if (!consent) {
            // Show banner after a small delay
            const timer = setTimeout(() => setIsVisible(true), 100);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent-v2", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent-v2", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 100, x: "-50%", scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                    exit={{ opacity: 0, y: 100, x: "-50%", scale: 0.9 }}
                    transition={{ duration: 0.4, type: "spring", damping: 20, stiffness: 300 }}
                    className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md"
                >
                    <div className="bg-card/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl flex flex-col gap-4">
                        <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-primary/10 rounded-xl">
                                    <Cookie className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-base">Cookie Policy</h3>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        We use cookies to improve your experience.
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={handleDecline}
                                className="text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-white/5 rounded-full"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex gap-3">
                            <Button
                                variant="outline"
                                className="flex-1 border-white/10 hover:bg-white/5"
                                onClick={handleDecline}
                            >
                                Decline
                            </Button>
                            <Button
                                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                                onClick={handleAccept}
                            >
                                Accept Cookies
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieBanner;
