import { Card, CardContent } from '@/components/ui/card'
import { education } from '@/constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { GraduationCap } from 'lucide-react'
import { useRef } from 'react'

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from('.edu-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 w-full bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Education
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Academic background and qualifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
            {education.map(({ degree, institution, period, description }) => (
              <div key={degree} className="edu-card h-full">
                <Card className="h-full flex flex-col hover:border-primary/80 transition-colors duration-300">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="bg-primary/10 p-2 rounded-full text-primary shrink-0 h-fit">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <h3 className="font-semibold text-lg leading-tight">
                        {degree}
                      </h3>
                      <p className="text-muted-foreground font-medium mt-1">
                        {institution}
                      </p>
                      <p className="text-sm text-primary/80 font-medium mb-4">
                        {period}
                      </p>
                      <p className="text-sm text-foreground/80 mt-auto">
                        {description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
