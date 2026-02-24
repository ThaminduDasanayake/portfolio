import { useState, useEffect } from 'react'
import { ModeToggle } from '@/components/mode-toggle'
import { Menu, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sectionElements = navItems
        .map((item) => document.getElementById(item.href.substring(1)))
        .filter((el): el is HTMLElement => el !== null)

      let currentSection = ''
      for (const element of sectionElements) {
        const rect = element.getBoundingClientRect()
        // Offset of 150px provides a reasonable trigger point below navbar
        if (rect.top <= 150) {
          currentSection = element.id
        }
      }
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
      setIsOpen(false)
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between max-w-7xl">
        <div className="flex items-center gap-2">
          <a
            href="#"
            onClick={(e) => handleScrollTo(e, '#hero')}
            className="flex items-center gap-2"
          >
            <div className="bg-primary text-primary-foreground p-1 rounded-md">
              <Code2 className="h-6 w-6" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              Thamindu Dasanayake
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1)
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={cn(
                  'text-sm font-medium transition-colors',
                  isActive
                    ? 'text-foreground underline decoration-primary decoration-2 underline-offset-6'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {item.name}
              </a>
            )
          })}
          <ModeToggle />
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-75 sm:w-100 text-primary font-bold"
            >
              <VisuallyHidden.Root>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden.Root>
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1)
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleScrollTo(e, item.href)}
                      className={cn(
                        'text-lg font-medium transition-colors p-2 rounded-md hover:bg-accent',
                        isActive
                          ? 'text-foreground underline decoration-primary decoration-2 underline-offset-6'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {item.name}
                    </a>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
