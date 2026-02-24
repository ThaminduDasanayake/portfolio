import { Button } from '@/components/ui/button'
import { useMountAnimation } from '@/hooks/useGsapAnimation'
import { ArrowDown, Mail } from 'lucide-react'
import Socials from '../ui/socials'

export function About() {
  const imageRef = useMountAnimation({ scale: 0.8, opacity: 0, delay: 0.2 })
  const textRef = useMountAnimation({ x: -20, opacity: 0 })

  return (
    <section
      id="about"
      className="min-h-[calc(100vh-4rem)] flex items-center py-20"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div ref={imageRef} className="flex items-center justify-center">
            <div className="relative aspect-square w-[300px] sm:w-[400px] overflow-hidden rounded-full border-4 border-muted bg-muted/20">
              <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
                <img
                  alt="Profile"
                  className="h-full w-full object-cover"
                  src="/pic.jpg"
                />
              </div>
            </div>
          </div>

          <div ref={textRef} className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="text-primary">Thamindu Dasanayake</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I am a software engineer dedicated to building robust,
                end-to-end applications. Driven by curiosity and consistent
                effort, I treat every project as an opportunity to engineer
                intuitive solutions for complex, real-world problems.
              </p>
            </div>

            <div className="flex flex-col gap-2 min-[400px]:flex-row pb-6">
              <Button size="lg" variant="outline" asChild>
                <a href="#projects" className="btn group">
                  <div className="btn-bg bg-primary" />

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
                  <div className="btn-bg bg-secondary" />
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
