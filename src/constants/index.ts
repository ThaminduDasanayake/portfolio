import { Code2, Database, Mail, Monitor, Server, Wrench } from 'lucide-react'

export const EMAIL = 'thamindudasanayake@gmail.com'

export const socialLinks = [
  {
    name: 'Mail',
    url: EMAIL,
    icon: Mail,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ThaminduDasanayake',
    icon: '/socials/github.svg',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/thamindu-dasanayake/',
    icon: '/socials/linkedin.svg',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@thamindudasanayake',
    icon: '/socials/medium.svg',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/thamindudasanayake/',
    icon: '/socials/instagram.svg',
  },
]

export const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'SLT Mobitel (Pvt) Ltd',
    period: 'Aug 2024 - Aug 2025',
    description: [
      {
        subtitle: 'Business Continuity Management System (BCMS)',
        text: ' - Designed and developed a full-stack BCMS using the MERN stack (MongoDB, Express, React, Node.js) to centralize and manage corporate risk assessment and mitigation strategies.',
      },
      {
        subtitle: 'Automated Approval Workflows',
        text: ' - Digitized legacy, manual document tracking by engineering a fully automated, multi-level approval process for organizational policies, guidelines, and sectional documents.',
      },
      {
        subtitle: 'Dynamic Call Tree Architecture',
        text: ' - Built an interactive, automated organizational and sectional call tree, enabling efficient visualization and management of the corporate hierarchy and emergency contact flows.',
      },
      {
        subtitle: 'Process Optimization',
        text: " - Streamlined the company's risk management lifecycle, drastically reducing approval turnaround times and replacing inefficient paper-based documentation with a scalable digital solution.",
      },
    ],
    skills: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Freelancing',
    period: 'Oct 2025 - Present',
    description: [
      {
        subtitle: 'Application Development',
        text: ' - Designed and engineered a modern, responsive web application for CeyFish, a fishing corporation, using React and Tailwind CSS.',
      },
      {
        subtitle: 'Deployment & CI/CD',
        text: ' - Configured continuous deployment pipelines and hosted the application via Vercel, ensuring high availability and rapid updates.',
      },
      {
        subtitle: 'UI/UX Implementation',
        text: ' - Translated client business requirements into intuitive, cross-device compatible interfaces to digitize their operations.',
      },
    ],
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'Vercel'],
  },
]

export const skills = [
  {
    id: 1,
    title: 'Languages',
    icon: Code2,
    span: 'md:col-span-1 md:row-span-2',
    skills: [
      { name: 'HTML5', logo: '/html.svg' },
      { name: 'CSS3', logo: '/css3.svg' },
      { name: 'JavaScript', logo: '/javascript.svg' },
      { name: 'TypeScript', logo: '/typescript.svg' },
      { name: 'Python', logo: '/python.svg' },
      { name: 'Java', logo: '/java.svg' },
      { name: 'Swift', logo: '/swift.svg' },
    ],
  },
  {
    id: 2,
    title: 'Frontend & UI',
    icon: Monitor,
    span: 'md:col-span-2 md:row-span-1',
    skills: [
      { name: 'React', logo: '/react.svg' },
      { name: 'Vite', logo: '/vitejs.svg' },
      { name: 'Next.js', logo: '/nextjs.svg' },
      { name: 'Tailwind CSS', logo: '/tailwind.svg' },
      { name: 'GSAP', logo: '/gsap.svg' },
      { name: 'Three.js', logo: '/threejs.svg' },
      { name: 'Streamlit', logo: '/streamlit.svg' },
    ],
  },
  {
    id: 3,
    title: 'DevOps & Tools',
    icon: Wrench,
    span: 'md:col-span-1 md:row-span-2',
    skills: [
      { name: 'Git', logo: '/git.svg' },
      { name: 'GitHub', logo: '/github.svg' },
      { name: 'BitBucket', logo: '/bitbucket.svg' },
      { name: 'Postman', logo: '/postman.svg' },
      { name: 'Vercel', logo: '/vercel.svg' },
      { name: 'Docker', logo: '/docker.svg' },
      { name: 'Sanity', logo: '/sanity.svg' },
    ],
  },
  {
    id: 4,
    title: 'Backend',
    icon: Server,
    span: 'md:col-span-1 md:row-span-1',
    skills: [
      { name: 'Node.js', logo: '/nodejs.svg' },
      { name: 'Express', logo: '/express.svg' },
    ],
  },
  {
    id: 5,
    title: 'Database & Cloud',
    icon: Database,
    span: 'md:col-span-1 md:row-span-1',
    skills: [
      { name: 'MongoDB', logo: '/mongodb.svg' },
      { name: 'MySQL', logo: '/mysql.svg' },
      { name: 'PostgreSQL', logo: '/postgresql.svg' },
      { name: 'Firebase', logo: '/firebase.svg' },
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'MacBook Landing Page',
    description:
      "An immersive product landing page that replicates Apple's premium design language. Features complex scroll-triggered GSAP animations, interactive 3D-like scrolling sequences, and a fully responsive, type-safe React architecture.",
    tags: ['React', 'TypeScript', 'GSAP', 'Tailwind CSS'],
    demoUrl: 'https://gsap-mac-book-landing.vercel.app',
    repoUrl: 'https://github.com/ThaminduDasanayake/GSAP_MacBook_landing',
    image: '/projects/macbook-landing.webp',
  },
  {
    id: 2,
    title: 'Stock Tracker App',
    description:
      'A full-stack financial monitoring application that tracks asset fluctuations and market trends. Features automated background data fetching via Inngest, persistent data storage with MongoDB, and real-time email alert notifications.',
    tags: ['Next.js', 'Inngest', 'Nodemailer', 'MongoDB'],
    demoUrl: 'https://stock-tracker-app-signalist.vercel.app',
    repoUrl: 'https://github.com/ThaminduDasanayake/stock-tracker-app',
    image: '/projects/stock-app.webp',
  },
  {
    id: 3,
    title: 'Opaline Bar',
    description:
      'A premium hospitality web experience crafted for a high-end cocktail bar. Features a cinematic user interface, seamless page transitions, and intricate staggered scroll-reveal animations powered by GSAP.',
    tags: ['React', 'Vite.js', 'GSAP', 'Tailwind CSS'],
    demoUrl: 'https://opaline-cocktail-bar.vercel.app',
    repoUrl: 'https://github.com/ThaminduDasanayake/cocktails',
    image: '/projects/opaline-bar.webp',
  },
  {
    id: 4,
    title: 'Roomify',
    description:
      'An AI-powered architectural visualization platform that transforms 2D floor plans into stunning 3D renders. Features drag-and-drop uploads, real-time image comparison, and a fully serverless backend.',
    tags: ['React Router', 'TypeScript', 'Puter.js', 'Tailwind CSS'],
    demoUrl: 'https://roomify-2.vercel.app',
    repoUrl: 'https://github.com/ThaminduDasanayake/roomify',
    image: '/projects/roomify.webp',
  },
  {
    id: 5,
    title: 'T-AutoNLP',
    description:
      'A research-grade hybrid AutoML system for NLP that combines a Genetic Algorithm with Bayesian Optimisation to simultaneously optimise predictive performance, computational efficiency, and model interpretability across a Pareto front of non-dominated solutions.',
    tags: ['Python', 'DEAP', 'scikit-optimize', 'Streamlit'],
    demoUrl: 'https://hybrid-multiobjective-autonlp.vercel.app',
    repoUrl:
      'https://github.com/ThaminduDasanayake/hybrid-multiobjective-autonlp',
    image: '/projects/autonlp.webp',
  },
  {
    id: 6,
    title: 'Classroom',
    description:
      'A full-stack e-learning platform with a decoupled TypeScript architecture. Features course management, student enrolment, and a RESTful backend API, with the frontend and backend maintained as independent deployable services.',
    tags: ['TypeScript', 'React', 'Node.js', 'REST API'],
    demoUrl: 'https://classroom-frontend-green.vercel.app',
    repoUrl: 'https://github.com/ThaminduDasanayake/classroom-frontend',
    image: '/projects/classroom.webp',
  },
  {
    id: 7,
    title: 'CoinPulse',
    description:
      'A cryptocurrency market dashboard delivering live price data, historical trend charts, and portfolio tracking. Built with TypeScript for end-to-end type safety and integrates a public crypto market API for real-time data feeds.',
    tags: ['TypeScript', 'React', 'CoinGecko API', 'Tailwind CSS'],
    demoUrl: '',
    repoUrl: 'https://github.com/ThaminduDasanayake/coinpulse',
    image: '/projects/coinpulse.webp',
  },
  {
    id: 8,
    title: 'Game Hub',
    description:
      'A video game discovery platform that aggregates titles from the RAWG API, with genre and platform filtering, dynamic search, and a fully responsive dark-mode UI. Deployed on Vercel with optimised client-side data fetching.',
    tags: ['TypeScript', 'React', 'RAWG API', 'Chakra UI'],
    demoUrl: 'https://game-hub-thamindu.vercel.app',
    repoUrl: 'https://github.com/ThaminduDasanayake/game-hub',
    image: '/projects/game-hub.webp',
  },
  {
    id: 9,
    title: 'LangChain PDF Chat',
    description:
      'A retrieval-augmented generation (RAG) application that lets users upload PDF documents and query them in natural language. Uses LangChain for orchestration, a vector store for semantic search, and an LLM backend for context-aware responses.',
    tags: ['Python', 'LangChain', 'RAG', 'Streamlit'],
    demoUrl: '',
    repoUrl: 'https://github.com/ThaminduDasanayake/langchain-pdf-chat',
    image: '/projects/pdf-chat.webp',
  },
  {
    id: 10,
    title: 'LangGraph Chatbot',
    description:
      'A stateful, multi-turn conversational agent built with LangGraph. Implements a graph-based execution flow for managing complex dialogue state, tool calling, and conditional branching within an LLM-powered chat interface.',
    tags: ['Python', 'LangGraph', 'LangChain', 'OpenAI'],
    demoUrl: '',
    repoUrl: 'https://github.com/ThaminduDasanayake/LangGraph-Chatbot',
    image: '/projects/langgraph.webp',
  },
  {
    id: 11,
    title: 'Local AI Agent with RAG',
    description:
      'A fully local AI agent that combines a locally-hosted LLM with a retrieval-augmented generation pipeline. Runs entirely offline using Ollama, enabling private document querying and agentic tool use without external API dependencies.',
    tags: ['Python', 'Ollama', 'LangChain', 'RAG'],
    demoUrl: '',
    repoUrl: 'https://github.com/ThaminduDasanayake/Local-AI-Agent-with-RAG',
    image: '/projects/local-ai.webp',
  },
  {
    id: 12,
    title: 'macOS Portfolio',
    description:
      'An interactive developer portfolio simulating the macOS desktop experience in the browser. Features draggable windows, a functional dock, app-like project showcases, and fluid system animations — all built in vanilla JavaScript.',
    tags: ['JavaScript', 'CSS', 'HTML', 'GSAP'],
    demoUrl: 'https://mac-os-portfolio-thamindu.vercel.app',
    repoUrl: 'https://github.com/ThaminduDasanayake/MacOS_Portfolio',
    image: '/projects/macos-portfolio.webp',
  },
  {
    id: 13,
    title: 'Nike E-Commerce',
    description:
      'A feature-rich e-commerce storefront for athletic footwear, built with TypeScript and React. Includes a product catalogue with filtering, a persistent shopping cart, and a polished checkout UI — demonstrating end-to-end frontend commerce patterns.',
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'Redux'],
    demoUrl: '',
    repoUrl: 'https://github.com/ThaminduDasanayake/nike-ecommerce',
    image: '/projects/nike.webp',
  },
  {
    id: 14,
    title: 'Startup Directory',
    description:
      'A community-driven platform for discovering and submitting startups, built with Next.js App Router and TypeScript. Features server-side rendering, Sanity CMS for content management, and GitHub OAuth authentication.',
    tags: ['Next.js', 'TypeScript', 'Sanity CMS', 'Auth.js'],
    demoUrl: '',
    repoUrl: 'https://github.com/ThaminduDasanayake/startup-directory',
    image: '/projects/startup-directory.webp',
  },
  {
    id: 15,
    title: 'Twitter Sentiment Analysis',
    description:
      'A machine learning pipeline for classifying the sentiment of tweets as positive, negative, or neutral. Implements text preprocessing, TF-IDF vectorisation, and compares multiple classification models including Naive Bayes and Logistic Regression.',
    tags: ['Python', 'scikit-learn', 'NLTK', 'Jupyter'],
    demoUrl: '',
    repoUrl: 'https://github.com/ThaminduDasanayake/Twitter-Sentiment-Analysis',
    image: '/projects/sentiment.webp',
  },
  {
    id: 17,
    title: 'Coding Challenge Generator',
    description:
      'A CLI tool that generates personalised coding challenges on demand using an LLM backend. Accepts a topic and difficulty level, then returns a structured problem statement with test cases — useful for daily practice and interview prep.',
    tags: ['Python', 'LangChain', 'OpenAI', 'CLI'],
    demoUrl: '',
    repoUrl: 'https://github.com/ThaminduDasanayake/Coding-Challenge-Generator',
    image: '/projects/challenge-gen.webp',
  },
  {
    id: 18,
    title: 'Custom MCP Server',
    description:
      'A custom Model Context Protocol server exposing domain-specific tools for LLM agents. Implements the MCP specification in Python, enabling Claude and other MCP-compatible clients to invoke custom functions as structured tool calls.',
    tags: ['Python', 'MCP', 'Claude API', 'FastAPI'],
    demoUrl: '',
    repoUrl: 'https://github.com/ThaminduDasanayake/Custom-MCP-Server',
    image: '/projects/mcp-server.webp',
  },
  {
    id: 19,
    title: 'WeatherApp (iOS)',
    description:
      'A native iOS weather application built in Swift. Fetches live weather data from a public API and presents current conditions and a multi-day forecast with a clean, SwiftUI-native interface.',
    tags: ['Swift', 'SwiftUI', 'WeatherKit', 'iOS'],
    demoUrl: '',
    repoUrl: 'https://github.com/ThaminduDasanayake/WeatherApp',
    image: '/projects/weather-ios.webp',
  },
  {
    id: 20,
    title: 'Promptopia',
    description:
      'A full-stack AI prompt sharing platform where users can discover, create, and share prompts for large language models. Built with Next.js and MongoDB, featuring Google OAuth authentication and a tag-based search system.',
    tags: ['Next.js', 'MongoDB', 'NextAuth.js', 'Tailwind CSS'],
    demoUrl: '',
    repoUrl: 'https://github.com/ThaminduDasanayake/promptopia',
    image: '/projects/promptopia.webp',
  },
]

export const education = [
  {
    degree: 'BEng (Hons) in Software Engineering',
    institution: 'Informatics Institute of Technology (IIT)',
    period: '2023 — Present',
    description: 'Affiliated with University of Westminster',
  },
  {
    degree: 'Foundation Certificate in Higher Education — IT',
    institution: 'Informatics Institute of Technology (IIT)',
    period: '2022 — 2023',
    description: 'Completed with Distinction',
  },
]
