import { motion } from "framer-motion";

interface ImagePlaceholderProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  text?: string;
}

export const ImagePlaceholder = ({
  width = '100%',
  height = '100%',
  className = '',
  text = 'Image'
}: ImagePlaceholderProps) => {
  return (
    <motion.div 
      className={`relative bg-elevated-light rounded-xl overflow-hidden ${className}`}
      style={{ width, height }}
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-4">
          <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <span className="text-sm text-white/60">{text}</span>
        </div>
      </div>
    </motion.div>
  );
};
