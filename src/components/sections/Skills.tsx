import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge.tsx'
import { skills } from '@/constants'
import { useScrollReveal } from '@/hooks/useGsapAnimation'
import { type LucideIcon } from 'lucide-react'

function SkillCard({
  category,
  index,
}: {
  category: {
    title: string
    icon: LucideIcon
    span: string
    skills: { name: string; logo: string }[]
  }
  index: number
}) {
  const ref = useScrollReveal({ y: 20, opacity: 0, delay: index * 0.1 })

  return (
    <div ref={ref} className={`${category.span} h-full`}>
      <Card className="h-full flex flex-col hover:border-primary transition-colors duration-300">
        <CardHeader className="flex flex-row items-center gap-3 pb-3">
          <div className="p-2 bg-primary/10 rounded-md">
            <category.icon className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-lg font-semibold">
            {category.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="bg-muted-foreground/20 text-foreground/80 px-3 py-1.5 text-sm font-normal flex items-center gap-2 border border-transparent hover:border-primary/80 hover:bg-foreground/10 hover:text-primary transition-all duration-200"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                {skill.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-20 w-full bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Technical Skills
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolset for building scalable, modern
              applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[minmax(180px,auto)]">
            {skills.map((category, index) => (
              <SkillCard
                key={category.title}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
