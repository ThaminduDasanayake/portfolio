import Layout from '@/components/layout/Layout'
import About from '@/components/sections/About.tsx'
import Contact from '@/components/sections/Contact'
import Education from '@/components/sections/Education'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

import { ThemeProvider } from '@/components/theme-provider'
gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </Layout>
    </ThemeProvider>
  )
}

export default App
