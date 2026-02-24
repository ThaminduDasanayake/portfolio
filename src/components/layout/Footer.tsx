import Socials from '../ui/socials'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 w-full border-t border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground">
          © {currentYear} Thamindu Dasanayake. All rights reserved.
        </div>

        <Socials isFooter />
      </div>
    </footer>
  )
}
