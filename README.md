<div align="center">

# Portfolio

**High-performance personal portfolio showcasing modern UI/UX, advanced 3D interactions, and clean code architecture.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Site-success?style=for-the-badge&logo=vercel)](https://thamindu-dasanayake.vercel.app/)

<img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=React&logoColor=black"  alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
  <img src="https://img.shields.io/badge/Three.js-27136A?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
</div>

<br />

## 🚀 About the Project

This is my personal software engineering portfolio, engineered from the ground up with a strong emphasis on performance,
aesthetic fluidity, and maintainability. Far from a standard static site, this project incorporates advanced frontend
techniques to deliver a deeply interactive and memorable user experience.

### ✨ Key Features & Engineering Highlights

- **🎬 Optimized GSAP Animations:** Seamless, hardware-accelerated scroll-reveal animations powered by GSAP. Extensive
  use of `ScrollTrigger` for staggered reveals, carefully managing timelines and memory within `gsap.context()` to
  definitively prevent React strict-mode memory leaks.
- **🎨 Custom OKLCH Theme System:** Built a bespoke, responsive styling system integrated with Tailwind CSS. Utilizes the
  modern `oklch` color space for perceptual uniformity, enabling flawless and perfectly balanced Light/Dark mode
  transitions.
- **🌌 Interactive 3D Canvas:** Implemented a deeply immersive Contact section using Three.js and React Three Fiber (
  R3F). Features a custom, grab-and-spin interactive 3D desk model that users can manipulate, demonstrating complex
  spatial rendering.
- **🖼️ Advanced Asset Management:** Integrated a robust iconography system combining Lucide React UI icons with custom
  SVG brand assets. Employs advanced CSS masking techniques to ensure custom SVGs effortlessly respond to theme swaps
  dynamically.
- **⚡ Blazing Fast Architecture:** Bootstrapped with Vite and React for instantaneous Hot Module Replacement (HMR)
  during development and highly optimized, minified bundles for production.

---

## 🛠️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing
purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` (or `yarn` / `pnpm`)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ThaminduDasanayake/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **View the project**
   Navigate to `http://localhost:5173` in your browser.
