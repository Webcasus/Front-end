# WebCasus.com – AI Website Builder (React + Vite + Tailwind + Framer Motion + Lottie)

A production-grade single-page application for WebCasus.com.  
Built with React + Vite, Tailwind CSS, Framer Motion, and Lottie.  
Fully responsive, AI-styled, and optimized for deployment on Cloudflare Pages.

---

## 🚀 Tech Stack

- **React + Vite**  
- **Tailwind CSS** (mobile-first, Poppins font)  
- **Framer Motion** (scroll + interactive animations)  
- **Lottie** (AI assembly visuals)  
- **Black UI theme**  
- **Cloudflare Pages ready**  

---

## 🎨 Color System

| Purpose | Color |
|--------|--------|
| Background | `#000000` |
| Primary Text | `#FFFFFF` |
| Secondary Text | `#FFFFFF99` |
| Elevated Surfaces | `#1B1B1B` |

---

## 📁 Project Structure

src/
├── components/
│ ├── Header.jsx
│ ├── Hero.jsx
│ ├── Features.jsx
│ ├── HowItWorks.jsx
│ ├── LiveDemo.jsx
│ ├── Pricing.jsx
│ ├── Testimonials.jsx
│ ├── FAQ.jsx
│ ├── Contact.jsx
│ ├── Footer.jsx
│
├── common/
│ ├── FeatureCard.jsx
│ ├── PricingCard.jsx
│ ├── TestimonialCard.jsx
│
├── animations/
│ └── variants.js
│
├── hooks/
│ └── useScrollAnimation.js
│
├── assets/
│ ├── lottie/
│ ├── images/
│
├── App.jsx
└── main.jsx

markdown
Copy code

---

## ✨ Features

### 1. Floating Header
- Transparent → glass blur on scroll  
- Shrinks smoothly  
- Mobile hamburger with slide-down  
- Keyboard accessible  

### 2. Hero Section
- Split layout  
- Two CTAs  
- Lottie AI animation  

### 3. Platform Features
- AI Website Generator  
- UI/UX Layout Builder  
- AI Brand Kit Creator  
- AI SEO + Content Suite  
- Smart Section Builder  
- One-click Cloudflare Publish  
- Template Marketplace  

Animated cards with fade-up + hover tilt.

### 4. How It Works Timeline
- Line draw animation  
- Wireframe morph (optional)  

### 5. Live AI Demo
- Fake dashboard preview  
- Auto-block assembly animation  

### 6. Pricing
- Starter. Pro. Enterprise  
- Hover elevation  
- Badge for best plan  

### 7. Testimonials
- Subtle shine  
- Swipe carousel on mobile  

### 8. FAQ
- Accordion with smooth transitions  

### 9. Contact
- Styled form  
- Animated AI bubble  

### 10. Footer
- Minimal  
- White text with hover brightening  

---

## 🧩 Animation Setup

- All custom variants stored in  
src/animations/variants.js

sql
Copy code

- Scroll trigger using:
src/hooks/useScrollAnimation.js

yaml
Copy code

- All non-critical animations lazy-loaded.

---

## ⚡ Performance

- Dynamic imports  
- React.lazy + Suspense  
- Lottie splits  
- Intersection Observer triggers  
- Tailwind tree-shakes unused classes  

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/WebCasus-SPA.git
cd WebCasus-SPA
npm install

▶️ Development
bash
Copy code
npm run dev
Runs Vite dev server.

🏗️ Production Build
bash
Copy code
npm run build
Output goes to dist/.


Preview build:

bash
Copy code
npm run preview
