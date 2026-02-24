import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useScrollReveal } from '@/hooks/useGsapAnimation'
import { experiences } from '@/constants'

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[number]
  index: number
}) {
  const ref = useScrollReveal({
    x: index % 2 === 0 ? -20 : 20,
    opacity: 0,
    delay: index * 0.1,
  })

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row gap-8 ${
        index % 2 === 0 ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute -left-8 md:left-1/2 md:-ml-2.5 top-1/2 w-5 h-5 rounded-full border-4 border-background bg-primary z-10" />

      <div className="flex-1 md:w-1/2" />

      <div className="flex-1 md:w-1/2">
        <Card className="h-full hover:border-primary transition-colors">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <CardTitle className="text-xl font-bold text-secondary">
                {exp.role}
              </CardTitle>
              <p className="whitespace-nowrap text-sm text-primary">
                {exp.period}
              </p>
            </div>
            <CardDescription className="text-base font-bold text-primary">
              {exp.company}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-muted-foreground mb-4 list-disc ml-5 space-y-2 text-sm">
              {exp.description.map((point, index) => (
                <li key={index}>
                  <span className="text-foreground font-bold">
                    {point.subtitle}
                  </span>
                  {point.text}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="hover:bg-secondary/90"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="py-20 w-full">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the organizations I've worked with.
          </p>
        </div>

        <div className="relative space-y-12 pl-6 md:pl-0">
          {/* The Fixed Timeline Line */}
          <div className="absolute left-0.5 md:left-1/2 h-full border-l border-primary -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
