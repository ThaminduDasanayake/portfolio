export interface Project {
  title: string;
  year: string;
  category: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  image?: string;
  highlight?: boolean;
  type?: "interactive-widget" | "macbook" | "glodwater" | "image";
}

export interface ExperienceItem {
  year: string;
  role: string;
  organization: string;
  details?: string;
  bullets?: string[];
}

export const PERSONAL_INFO = {
  name: "THAMINDU DASANAYAKE",
  nickname: "Thamindu",
  brand: "THAMINDU©",
  location: "Colombo 🇱🇰",
  locationShort: "CMB",
  email: "thamindudasanayake@gmail.com",
  roleTitle: "SOFTWARE ENGINEER",
  roleSubtitle: "FULL STACK & AI",
};

export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/ThaminduDasanayake" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/thamindu-dasanayake/" },
  { name: "Medium", url: "https://medium.com/@thamindudasanayake" },
  { name: "Instagram", url: "https://www.instagram.com/thamindudasanayake/" },
];

export const SELECTED_PROJECTS: Project[] = [
  {
    title: "Stock Tracker SaaS (Signalist)",
    year: "2025",
    category: "Full-Stack SaaS",
    description:
      "Enterprise asset monitoring platform with automated Inngest background cron workers, MongoDB persistence, and transactional email alerts.",
    tags: ["Next.js", "Inngest", "MongoDB", "Nodemailer"],
    demoUrl: "https://stock-tracker-app-signalist.vercel.app",
    repoUrl: "https://github.com/ThaminduDasanayake/stock-tracker-app",
    image: "/projects/stock-app.webp",
    type: "image",
  },
  {
    title: "MacBook Landing Page",
    year: "2024",
    category: "Creative Dev & Animation",
    description:
      "High-performance interactive 3D/GSAP landing experience showcasing MacBook hardware aesthetics and precision typography.",
    tags: ["React", "TypeScript", "GSAP", "Tailwind CSS"],
    demoUrl: "https://gsap-mac-book-landing.vercel.app",
    repoUrl: "https://github.com/ThaminduDasanayake/GSAP_MacBook_landing",
    image: "/projects/macbook-landing.webp",
    type: "image",
  },
  {
    title: "Roomify 3D Interior AI",
    year: "2024",
    category: "AI & Spatial Rendering",
    description:
      "AI-powered spatial visualization platform converting 2D blueprints and floor plans into high-fidelity 3D interior renders.",
    tags: ["React Router", "TypeScript", "Puter.js", "Tailwind CSS"],
    demoUrl: "https://roomify-2.vercel.app",
    repoUrl: "https://github.com/ThaminduDasanayake/roomify",
    image: "/projects/roomify.webp",
    type: "image",
  },
  {
    title: "Opaline Cocktail Lounge",
    year: "2024",
    category: "Hospitality & Creative Motion",
    description:
      "Cinematic web experience for a luxury cocktail lounge with fluid page transitions, typography stagger effects, and smooth scroll choreography.",
    tags: ["React", "Vite.js", "GSAP", "Tailwind CSS"],
    demoUrl: "https://opaline-cocktail-bar.vercel.app",
    repoUrl: "https://github.com/ThaminduDasanayake/cocktails",
    image: "/projects/opaline-bar.webp",
    type: "image",
  },
];

export const ARCHIVE_PROJECTS = [
  {
    title: "Signalist (Stock Tracker App)",
    year: "2025",
    category: "Full Stack SaaS",
    tags: ["Next.js", "Inngest", "MongoDB", "Nodemailer"],
    demoUrl: "https://stock-tracker-app-signalist.vercel.app",
    repoUrl: "https://github.com/ThaminduDasanayake/stock-tracker-app",
  },
  {
    title: "MacBook Landing Page",
    year: "2024",
    category: "Creative Dev & Animation",
    tags: ["React", "TypeScript", "GSAP", "Tailwind CSS"],
    demoUrl: "https://gsap-mac-book-landing.vercel.app",
    repoUrl: "https://github.com/ThaminduDasanayake/GSAP_MacBook_landing",
  },
  {
    title: "Roomify 3D AI Interior",
    year: "2024",
    category: "AI Spatial Visualization",
    tags: ["React Router", "TypeScript", "Puter.js", "Tailwind CSS"],
    demoUrl: "https://roomify-2.vercel.app",
    repoUrl: "https://github.com/ThaminduDasanayake/roomify",
  },
  {
    title: "Opaline Cocktail Bar Experience",
    year: "2024",
    category: "Creative Web & Motion",
    tags: ["React", "Vite.js", "GSAP", "Tailwind CSS"],
    demoUrl: "https://opaline-cocktail-bar.vercel.app",
    repoUrl: "https://github.com/ThaminduDasanayake/cocktails",
  },
  {
    title: "T-AutoNLP (Hybrid AutoML Engine)",
    year: "2024",
    category: "AI Research & Genetic Algorithms",
    tags: ["Python", "DEAP", "scikit-optimize", "Streamlit"],
    demoUrl: "https://hybrid-multiobjective-autonlp.vercel.app",
    repoUrl:
      "https://github.com/ThaminduDasanayake/hybrid-multiobjective-autonlp",
  },
  {
    title: "Classroom LMS Platform",
    year: "2024",
    category: "Full Stack & Microservices",
    tags: ["TypeScript", "React", "Node.js", "REST API"],
    demoUrl: "https://classroom-frontend-green.vercel.app",
    repoUrl: "https://github.com/ThaminduDasanayake/classroom-frontend",
  },
  {
    title: "CoinPulse Crypto Dashboard",
    year: "2024",
    category: "Frontend & Financial Data",
    tags: ["TypeScript", "React", "CoinGecko API", "Tailwind CSS"],
    repoUrl: "https://github.com/ThaminduDasanayake/coinpulse",
  },
  {
    title: "Game Hub Discovery Platform",
    year: "2024",
    category: "Frontend",
    tags: ["TypeScript", "React", "RAWG API", "Chakra UI"],
    demoUrl: "https://game-hub-thamindu.vercel.app",
    repoUrl: "https://github.com/ThaminduDasanayake/game-hub",
  },
  {
    title: "LangChain PDF Document Chat (RAG)",
    year: "2024",
    category: "Generative AI",
    tags: ["Python", "LangChain", "RAG", "Streamlit"],
    repoUrl: "https://github.com/ThaminduDasanayake/langchain-pdf-chat",
  },
  {
    title: "LangGraph Stateful Autonomous Chatbot",
    year: "2024",
    category: "Generative AI & Agent Graphs",
    tags: ["Python", "LangGraph", "LangChain", "OpenAI"],
    repoUrl: "https://github.com/ThaminduDasanayake/LangGraph-Chatbot",
  },
  {
    title: "Local AI Agent with Ollama RAG",
    year: "2024",
    category: "Local LLMs & Offline Agents",
    tags: ["Python", "Ollama", "LangChain", "RAG"],
    repoUrl: "https://github.com/ThaminduDasanayake/Local-AI-Agent-with-RAG",
  },
  {
    title: "macOS Interactive Desktop Portfolio",
    year: "2024",
    category: "Creative Dev & OS Simulation",
    tags: ["JavaScript", "CSS", "HTML", "GSAP"],
    demoUrl: "https://mac-os-portfolio-thamindu.vercel.app",
    repoUrl: "https://github.com/ThaminduDasanayake/MacOS_Portfolio",
  },
  {
    title: "Startup Directory (Sanity CMS)",
    year: "2024",
    category: "Full Stack App Router",
    tags: ["Next.js", "TypeScript", "Sanity CMS", "Auth.js"],
    repoUrl: "https://github.com/ThaminduDasanayake/startup-directory",
  },
  {
    title: "Custom Model Context Protocol (MCP) Server",
    year: "2025",
    category: "AI Protocol & Tooling",
    tags: ["Python", "MCP", "FastAPI", "Claude API"],
    repoUrl: "https://github.com/ThaminduDasanayake/Custom-MCP-Server",
  },
];

export const EXPERIENCE_MILESTONES: ExperienceItem[] = [
  {
    year: "2023",
    role: "Foundation in Higher Education (IT)",
    organization: "IIT / University of Westminster",
    details:
      "Completed with Distinction. Core computing fundamentals, algorithm design, and data structures.",
  },
  {
    year: "2024",
    role: "Software Engineering Intern",
    organization: "SLT Mobitel (Pvt) Ltd",
    details:
      "Enterprise BCMS development with MERN stack. Digitized multi-level approval workflows and interactive hierarchy call-trees.",
  },
  {
    year: "2025",
    role: "Full Stack Developer",
    organization: "Freelance & Independent Client Work",
    details:
      "Crafted modern web solutions for commercial clients (CeyFish), configured Vercel CI/CD pipelines, and built high-conversion UI/UX.",
  },
  {
    year: "PRESENT",
    role: "BEng (Hons) Software Engineering",
    organization: "Informatics Institute of Technology / Westminster",
    details:
      "Specializing in distributed systems, resilient backend architectures, and AI optimization algorithms.",
  },
];
