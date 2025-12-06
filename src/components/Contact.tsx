import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Globe, Building } from "lucide-react";

// reCAPTCHA site key
const RECAPTCHA_SITE_KEY = '6Ld6hR4sAAAAAFCq5Htp78ieS9NSgm5a8GoRHiM7';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    industry: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<string>('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Reset recaptcha error
    setRecaptchaError('');

    if (!recaptchaToken) {
      setRecaptchaError('Please complete the reCAPTCHA verification');
      return false;
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.contactName.trim()) {
      newErrors.contactName = 'Contact name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !/^[\+\d\s\(\)\-]*$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (formData.website && !/^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/.test(formData.website)) {
      newErrors.website = 'Please enter a valid URL';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    if (token) {
      setRecaptchaError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mjknrrwa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          companyName: formData.companyName,
          contactName: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          website: formData.website,
          industry: formData.industry,
          message: formData.message,
          'g-recaptcha-response': recaptchaToken, // Send reCAPTCHA token to Formspree
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        });

        // Reset form
        setFormData({
          companyName: "",
          contactName: "",
          email: "",
          phone: "",
          website: "",
          industry: "",
          message: "",
        });

        // Reset reCAPTCHA
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
          setRecaptchaToken(null);
        }
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-32 relative bg-elevated/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl mb-6 leading-tight tracking-tight">
            <span className="block font-light text-white/60 mb-1.5">
              Get In Touch
            </span>
            <span className="block font-bold text-white">
              We’re Happy to Assist
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Have a question, feedback, or ready to bring your project to life? Connect with our team, and we’ll respond promptly to guide you every step of the way.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Left Column - Contact Form */}
          <motion.div variants={fadeUp} className="bg-elevated rounded-2xl p-6 sm:p-8 border border-white/5 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-6">Send us a message</h3>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={`w-full bg-input rounded-lg px-4 py-3 border ${errors.companyName ? 'border-red-500' : 'border-border'} focus:border-accent outline-none transition-colors placeholder:text-muted-foreground`}
                    placeholder="Your Company Name"
                  />
                  {errors.companyName && <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>}
                </div>

                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    className={`w-full bg-input rounded-lg px-4 py-3 border ${errors.contactName ? 'border-red-500' : 'border-border'} focus:border-accent outline-none transition-colors placeholder:text-muted-foreground`}
                    placeholder="Your Full Name"
                  />
                  {errors.contactName && <p className="mt-1 text-sm text-red-500">{errors.contactName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-input rounded-lg pl-10 pr-4 py-3 border ${errors.email ? 'border-red-500' : 'border-border'} focus:border-accent outline-none transition-colors placeholder:text-muted-foreground`}
                      placeholder="you@company.com"
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full bg-input rounded-lg pl-10 pr-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-border'} focus:border-accent outline-none transition-colors placeholder:text-muted-foreground`}
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="website" className="block text-sm font-medium mb-2">
                    Website URL
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className={`w-full bg-input rounded-lg pl-10 pr-4 py-3 border ${errors.website ? 'border-red-500' : 'border-border'} focus:border-accent outline-none transition-colors placeholder:text-muted-foreground`}
                      placeholder="https://www.yourwebsite.com"
                    />
                  </div>
                  {errors.website && <p className="mt-1 text-sm text-red-500">{errors.website}</p>}
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium mb-2">
                    Industry / Niche
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full bg-input rounded-lg pl-10 pr-4 py-3 border border-border focus:border-accent outline-none transition-colors text-foreground appearance-none"
                    >
                      <option value="">Select your industry</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="saas">SaaS</option>
                      <option value="agency">Agency</option>
                      <option value="education">Education</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="retail">Retail</option>
                      <option value="technology">Technology</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 6L11 1" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  How Can We Assist You? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-input rounded-lg px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-border'} focus:border-accent outline-none transition-colors resize-none placeholder:text-muted-foreground`}
                  placeholder="Tell us about your project, goals, and how we can assist you..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_SITE_KEY}
                  onChange={handleRecaptchaChange}
                  className="mb-4"
                />
                {recaptchaError && (
                  <p className="text-sm text-red-500 mb-4">{recaptchaError}</p>
                )}
                <Button
                  type="submit"
                  className="w-full py-6 text-base font-medium"
                  disabled={isSubmitting || !recaptchaToken}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                <p className="mt-3 text-xs text-muted-foreground text-center">
                  We'll get back to you within 24 hours. Fields marked with <span className="text-red-500">*</span> are required.
                </p>
              </div>
            </form>
          </motion.div>

          {/* Right Column - Map & Contact Info */}
          <motion.div variants={fadeUp} className="space-y-6">
            {/* Google Map with Overlay */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-xl group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7420290229607!2d-118.26178592524481!3d34.050487917824604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b17096f7dd%3A0x7039c3305f40db6f!2sFigueroa%20at%20Wilshire%2C%20601%20S%20Figueroa%20St%2C%20Los%20Angeles%2C%20CA%2090017%2C%20USA!5e0!3m2!1sen!2slk!4v1764657738442!5m2!1sen!2slk"
                width="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full h-[320px] lg:h-[520px]"
                title="Our Location"
              />
            </div>

            {/* Contact Cards Grid */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Location Card */}
                <motion.div
                  whileHover={{ y: -2 }}
                  className="col-span-1 sm:col-span-2 bg-white/[0.03] backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3 h-full">
                    <div className="mt-0.5 p-2.5 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                      <MapPin className="w-4.5 h-4.5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-sm mb-1.5">Our Location</h4>
                      <p className="text-sm text-white/70 leading-relaxed">
                        601 S Figueroa St, Los Angeles, CA 90017, United States
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Email Card */}
                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-white/[0.03] backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-primary/30 transition-all duration-300 group h-full"
                >
                  <div className="flex items-start gap-3 h-full">
                    <div className="mt-0.5 p-2.5 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                      <Mail className="w-4.5 h-4.5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white text-sm mb-1.5">Email Us</h4>
                      <a
                        href="mailto:support@webcasus.com"
                        className="text-sm text-white/70 hover:text-primary transition-colors break-all block"
                      >
                        support@webcasus.com
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Phone Card */}
                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-white/[0.03] backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-primary/30 transition-all duration-300 group h-full"
                >
                  <div className="flex items-start gap-3 h-full">
                    <div className="mt-0.5 p-2.5 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                      <Phone className="w-4.5 h-4.5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-sm mb-1.5">Call Us</h4>
                      <a
                        href="tel:+12139287450"
                        className="text-sm text-white/70 hover:text-primary transition-colors font-medium"
                      >
                        +1 (213) 928-7450
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Working Hours Card */}
                <motion.div
                  whileHover={{ y: -2 }}
                  className="col-span-1 sm:col-span-2 bg-white/[0.03] backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3 h-full">
                    <div className="mt-0.5 p-2.5 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                      <Clock className="w-4.5 h-4.5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-sm mb-1.5">Working Hours</h4>
                      <div className="text-sm text-white/70 space-y-0.5">
                        <p className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary/60 rounded-full"></span>
                          Monday - Friday: 9:00 AM - 6:00 PM
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary/60 rounded-full"></span>
                          Saturday: 10:00 AM - 3:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Contact;
