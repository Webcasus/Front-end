import React from "react";

export const Icons = {
  logo: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17L12 22L22 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12L12 17L22 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  soc2: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="40" height="40" rx="8" fill="#F3F4F6" />
      <path
        d="M20 28C24.4183 28 28 24.4183 28 20C28 15.5817 24.4183 12 20 12C15.5817 12 12 15.5817 12 20C12 24.4183 15.5817 28 20 28Z"
        fill="#4B5563"
      />
      <path
        d="M20 24C22.2091 24 24 22.2091 24 20C24 17.7909 22.2091 16 20 16C17.7909 16 16 17.7909 16 20C16 22.2091 17.7909 24 20 24Z"
        fill="#F3F4F6"
      />
    </svg>
  ),
  hipaa: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="40" height="40" rx="8" fill="#F3F4F6" />
      <path
        d="M16 28H24C26.2091 28 28 26.2091 28 24V16C28 13.7909 26.2091 12 24 12H16C13.7909 12 12 13.7909 12 16V24C12 26.2091 13.7909 28 16 28Z"
        fill="#4B5563"
      />
      <path
        d="M18 20L22 24"
        stroke="#F3F4F6"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M22 20L18 24"
        stroke="#F3F4F6"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  gdpr: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="40" height="40" rx="8" fill="#F3F4F6" />
      <path
        d="M20 28C24.4183 28 28 24.4183 28 20C28 15.5817 24.4183 12 20 12C15.5817 12 12 15.5817 12 20C12 24.4183 15.5817 28 20 28Z"
        fill="#4B5563"
      />
      <path
        d="M20 16V20L23 23"
        stroke="#F3F4F6"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  // Dark mode variants
  soc2Dark: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="40" height="40" rx="8" fill="#1F2937" />
      <path
        d="M20 28C24.4183 28 28 24.4183 28 20C28 15.5817 24.4183 12 20 12C15.5817 12 12 15.5817 12 20C12 24.4183 15.5817 28 20 28Z"
        fill="#9CA3AF"
      />
      <path
        d="M20 24C22.2091 24 24 22.2091 24 20C24 17.7909 22.2091 16 20 16C17.7909 16 16 17.7909 16 20C16 22.2091 17.7909 24 20 24Z"
        fill="#1F2937"
      />
    </svg>
  ),
  hipaaDark: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="40" height="40" rx="8" fill="#1F2937" />
      <path
        d="M16 28H24C26.2091 28 28 26.2091 28 24V16C28 13.7909 26.2091 12 24 12H16C13.7909 12 12 13.7909 12 16V24C12 26.2091 13.7909 28 16 28Z"
        fill="#9CA3AF"
      />
      <path
        d="M18 20L22 24"
        stroke="#1F2937"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M22 20L18 24"
        stroke="#1F2937"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  gdprDark: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="40" height="40" rx="8" fill="#1F2937" />
      <path
        d="M20 28C24.4183 28 28 24.4183 28 20C28 15.5817 24.4183 12 20 12C15.5817 12 12 15.5817 12 20C12 24.4183 15.5817 28 20 28Z"
        fill="#9CA3AF"
      />
      <path
        d="M20 16V20L23 23"
        stroke="#1F2937"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
};

// Pinterest Icon Component
export const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"
      fill="currentColor"
    />
  </svg>
);

