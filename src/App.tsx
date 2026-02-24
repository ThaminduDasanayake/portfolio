import { Layout } from '@/components/layout/Layout'
import { About } from '@/components/sections/About.tsx'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import { Education } from '@/components/sections/Education'
import { Contact } from '@/components/sections/Contact'

import { ThemeProvider } from '@/components/theme-provider'

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
