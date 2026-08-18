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

export interface CapabilityGroup {
  category: string;
  skills: string[];
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
    title: "MacBook Landing Page & H23",
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
    id: 1,
    title: "Stock Tracker App (Signalist)",
    year: "2025",
    category: "Full Stack SaaS",
    tags: ["Next.js", "Inngest", "MongoDB", "Nodemailer"],
    demoUrl: "https://stock-tracker-app-signalist.vercel.app",
    repoUrl: "https://github.com/ThaminduDasanayake/stock-tracker-app",
  },
  {
    id: 2,
    title: "MacBook Landing Page & H23",
    year: "2024",
    category: "Creative Dev & Animation",
    tags: ["React", "TypeScript", "GSAP", "Tailwind CSS"],
    demoUrl: "https://gsap-mac-book-landing.vercel.app",
    repoUrl: "https://github.com/ThaminduDasanayake/GSAP_MacBook_landing",
  },
  {
    id: 3,
    title: "Roomify 3D AI Interior",
    year: "2024",
    category: "AI Spatial Visualization",
    tags: ["React Router", "TypeScript", "Puter.js", "Tailwind CSS"],
    demoUrl: "https://roomify-2.vercel.app",
    repoUrl: "https://github.com/ThaminduDasanayake/roomify",
  },
  {
    id: 4,
    title: "Opaline Cocktail Bar Experience",
    year: "2024",
    category: "Creative Web & Motion",
    tags: ["React", "Vite.js", "GSAP", "Tailwind CSS"],
    demoUrl: "https://opaline-cocktail-bar.vercel.app",
    repoUrl: "https://github.com/ThaminduDasanayake/cocktails",
  },
  {
    id: 5,
    title: "T-AutoNLP (Hybrid AutoML Engine)",
    year: "2024",
    category: "AI Research & Genetic Algorithms",
    tags: ["Python", "DEAP", "scikit-optimize", "Streamlit"],
    demoUrl: "https://hybrid-multiobjective-autonlp.vercel.app",
    repoUrl:
      "https://github.com/ThaminduDasanayake/hybrid-multiobjective-autonlp",
  },
  {
    id: 6,
    title: "Classroom LMS Platform",
    year: "2024",
    category: "Full Stack & Microservices",
    tags: ["TypeScript", "React", "Node.js", "REST API"],
    demoUrl: "https://classroom-frontend-green.vercel.app",
    repoUrl: "https://github.com/ThaminduDasanayake/classroom-frontend",
  },
  {
    id: 7,
    title: "CoinPulse Crypto Dashboard",
    year: "2024",
    category: "Frontend & Financial Data",
    tags: ["TypeScript", "React", "CoinGecko API", "Tailwind CSS"],
    repoUrl: "https://github.com/ThaminduDasanayake/coinpulse",
  },
  {
    id: 8,
    title: "Game Hub Discovery Platform",
    year: "2024",
    category: "Frontend",
    tags: ["TypeScript", "React", "RAWG API", "Chakra UI"],
    demoUrl: "https://game-hub-thamindu.vercel.app",
    repoUrl: "https://github.com/ThaminduDasanayake/game-hub",
  },
  {
    id: 9,
    title: "LangChain PDF Document Chat (RAG)",
    year: "2024",
    category: "Generative AI",
    tags: ["Python", "LangChain", "RAG", "Streamlit"],
    repoUrl: "https://github.com/ThaminduDasanayake/langchain-pdf-chat",
  },
  {
    id: 10,
    title: "LangGraph Stateful Autonomous Chatbot",
    year: "2024",
    category: "Generative AI & Agent Graphs",
    tags: ["Python", "LangGraph", "LangChain", "OpenAI"],
    repoUrl: "https://github.com/ThaminduDasanayake/LangGraph-Chatbot",
  },
  {
    id: 11,
    title: "Local AI Agent with Ollama RAG",
    year: "2024",
    category: "Local LLMs & Offline Agents",
    tags: ["Python", "Ollama", "LangChain", "RAG"],
    repoUrl: "https://github.com/ThaminduDasanayake/Local-AI-Agent-with-RAG",
  },
  {
    id: 12,
    title: "macOS Interactive Desktop Portfolio",
    year: "2024",
    category: "Creative Dev & OS Simulation",
    tags: ["JavaScript", "CSS", "HTML", "GSAP"],
    demoUrl: "https://mac-os-portfolio-thamindu.vercel.app",
    repoUrl: "https://github.com/ThaminduDasanayake/MacOS_Portfolio",
  },
  {
    id: 13,
    title: "Nike E-Commerce Platform",
    year: "2024",
    category: "Frontend Commerce",
    tags: ["TypeScript", "React", "Redux", "Tailwind CSS"],
    repoUrl: "https://github.com/ThaminduDasanayake/nike-ecommerce",
  },
  {
    id: 14,
    title: "Startup Directory (Sanity CMS)",
    year: "2024",
    category: "Full Stack App Router",
    tags: ["Next.js", "TypeScript", "Sanity CMS", "Auth.js"],
    repoUrl: "https://github.com/ThaminduDasanayake/startup-directory",
  },
  {
    id: 15,
    title: "Twitter Sentiment Analysis Pipeline",
    year: "2024",
    category: "Machine Learning & NLP",
    tags: ["Python", "scikit-learn", "NLTK", "TF-IDF"],
    repoUrl: "https://github.com/ThaminduDasanayake/Twitter-Sentiment-Analysis",
  },
  {
    id: 16,
    title: "Coding Challenge Generator CLI",
    year: "2024",
    category: "Developer Tooling & LLMs",
    tags: ["Python", "LangChain", "OpenAI", "CLI"],
    repoUrl: "https://github.com/ThaminduDasanayake/Coding-Challenge-Generator",
  },
  {
    id: 17,
    title: "Custom Model Context Protocol (MCP) Server",
    year: "2025",
    category: "AI Protocol & Tooling",
    tags: ["Python", "MCP", "FastAPI", "Claude API"],
    repoUrl: "https://github.com/ThaminduDasanayake/Custom-MCP-Server",
  },
  {
    id: 18,
    title: "iOS Native Weather Application",
    year: "2024",
    category: "Mobile (iOS / Swift)",
    tags: ["Swift", "SwiftUI", "WeatherKit", "iOS"],
    repoUrl: "https://github.com/ThaminduDasanayake/WeatherApp",
  },
  {
    id: 19,
    title: "Promptopia AI Prompt Engineering Community",
    year: "2024",
    category: "Full Stack",
    tags: ["Next.js", "MongoDB", "NextAuth", "Tailwind CSS"],
    repoUrl: "https://github.com/ThaminduDasanayake/promptopia",
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

export const CAPABILITIES: CapabilityGroup[] = [
  {
    category: "Frontend & UI Craft",
    skills: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "GSAP Motion",
      "Three.js / WebGL",
      "Semantic HTML5/CSS3",
    ],
  },
  {
    category: "Backend & Cloud Architecture",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "RESTful APIs",
      "Vercel CI/CD",
    ],
  },
  {
    category: "AI & Systems Engineering",
    skills: [
      "LangChain",
      "LangGraph Agents",
      "RAG Architecture",
      "Ollama Local LLMs",
      "MCP Protocol",
      "FastAPI",
      "AutoML Optimization",
    ],
  },
];
