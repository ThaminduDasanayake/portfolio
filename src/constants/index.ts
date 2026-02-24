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
    title: 'Backend',
    icon: Server,
    span: 'md:col-span-1 md:row-span-1',
    skills: [
      { name: 'Node.js', logo: '/nodejs.svg' },
      { name: 'Express', logo: '/express.svg' },
    ],
  },
  {
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
      'A stunning landing page for the MacBook, featuring a sleek design and smooth animations.',
    tags: ['React', 'TypeScript', 'GSAP', 'Tailwind CSS'],
    demoUrl: 'https://gsap-mac-book-landing.vercel.app',
    repoUrl: 'https://github.com/ThaminduDasanayake/GSAP_MacBook_landing',
    image: '/projects/macbook-landing.png',
  },
  {
    id: 2,
    title: 'Stock Tracker App',
    description: 'A stock tracking app',
    tags: ['Next.js', 'Inngest', 'Nodemailer', 'MongoDB'],
    demoUrl: 'https://stock-tracker-app-signalist.vercel.app',
    repoUrl: 'https://github.com/ThaminduDasanayake/stock-tracker-app',
    image: '/projects/stock-app.png',
  },
  {
    id: 3,
    title: 'Opaline Bar',
    description: 'A GSAP animation website',
    tags: ['React', 'Vite.js', 'GSAP', 'Tailwind CSS'],
    demoUrl: 'https://opaline-cocktail-bar.vercel.app',
    repoUrl: 'https://github.com/ThaminduDasanayake/cocktails',
    image: '/projects/opaline-bar.png',
  },
  {
    id: 4,
    title: 'Roomify',
    description:
      'An AI-powered architectural visualization platform that transforms 2D floor plans into stunning 3D renders. Features drag-and-drop uploads, real-time image comparison, and a fully serverless backend.',
    tags: ['React Router', 'TypeScript', 'Puter.js', 'Tailwind CSS'],
    demoUrl: 'https://roomify-2.vercel.app',
    repoUrl: 'https://github.com/ThaminduDasanayake/roomify',
    image: '/projects/roomify.png',
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
