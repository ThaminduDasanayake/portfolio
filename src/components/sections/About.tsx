import { Button } from '@/components/ui/button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowDown, Mail } from 'lucide-react'
import { useRef } from 'react'
import Socials from '../ui/socials'

const About = () => {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-image', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      }).from(
        '.hero-content > *',
        { y: 20, opacity: 0, duration: 0.8, stagger: 0.15 },
        '-=0.6'
      )
    },
    { scope: containerRef }
  )

  return (
    <section
      id="about"
      ref={containerRef}
      className="min-h-[calc(100vh-4rem)] flex items-center py-20"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="hero-image flex items-center justify-center">
            <div className="relative aspect-square w-75 sm:w-100 overflow-hidden rounded-full border-4 border-muted bg-muted/20">
              <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
                <img
                  alt="Profile"
                  className="h-full w-full object-cover"
                  src="/pic.webp"
                  fetchPriority="high"
                  width="800"
                  height="800"
                />
              </div>
            </div>
          </div>

          <div className="hero-content flex flex-col items-center space-y-4 lg:items-start">
            <div className="space-y-4 text-center lg:text-start">
              <h1 className="text-2xl min-[400px]:text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none lg:whitespace-nowrap">
                <span className="text-primary">Thamindu Dasanayake</span>
              </h1>
              <p className="text-muted-foreground text-xs md:text-sm lg:text-xl">
                I am a software engineer dedicated to building robust,
                end-to-end applications. Driven by curiosity and consistent
                effort, I treat every project as an opportunity to engineer
                intuitive solutions for complex, real-world problems.
              </p>
            </div>

            <div className="flex flex-col justify-center lg:justify-start items-center gap-2 min-[400px]:flex-row pb-6">
              <Button size="lg" variant="outline" asChild>
                <a href="#projects" className="btn group">
                  <div className="bg-circle bg-primary" />

                  <span className="btn-text group-hover:text-primary">
                    View Projects
                  </span>
                  <div className="btn-icon-wrapper">
                    <ArrowDown className="btn-icon" />
                  </div>
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact" className="btn group">
                  <div className="bg-circle bg-secondary" />
                  <span className="btn-text group-hover:text-secondary">
                    Contact Me
                  </span>
                  <div className="btn-icon-wrapper">
                    <Mail className="btn-icon" />
                  </div>
                </a>
              </Button>
            </div>

            <Socials />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
