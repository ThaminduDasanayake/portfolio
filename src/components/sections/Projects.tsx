import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import { projects } from '@/constants'
import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useGsapAnimation'

function ProjectCard({
  id,
  title,
  description,
  tags,
  demoUrl,
  repoUrl,
  image,
}: {
  id: number
  title: string
  description: string
  tags: string[]
  demoUrl: string
  repoUrl: string
  image: string
}) {
  const ref = useScrollReveal({ y: 20, opacity: 0, delay: id * 0.1 })

  return (
    <div ref={ref}>
      <Card className="h-full flex flex-col overflow-hidden hover:border-primary/50 transition-colors">
        <img
          src={image}
          alt={title}
          className={`h-auto w-full object-cover`}
          width="3024"
          height="1898"
        />
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button
            size="sm"
            className="w-full bg-foreground hover:bg-foreground/85"
            asChild
          >
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${title}`}
            >
              <img
                src="/github.svg"
                alt="Github"
                className="h-5 w-5 invert dark:invert-0"
              />
              Code
            </a>
          </Button>
          <Button size="sm" className="w-full" asChild>
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit live demo for ${title}`}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

const Projects = () => {
  const [showAll, setShowAll] = useState(false)

  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="py-20 w-full">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for
            building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map(
            ({ id, title, description, tags, demoUrl, repoUrl, image }) => (
              <ProjectCard
                key={id}
                id={id}
                title={title}
                description={description}
                tags={tags}
                demoUrl={demoUrl}
                repoUrl={repoUrl}
                image={image}
              />
            )
          )}
        </div>

        {projects.length > 3 && (
          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="gap-2 hover:cursor-pointer hover:text-primary"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  View All Projects <ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
