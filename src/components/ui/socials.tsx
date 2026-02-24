import { socialLinks } from '@/constants'

const Socials = ({ isFooter }: { isFooter?: boolean }) => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 md:gap-4">
      {socialLinks.map((link) => {
        const isMail = link.name === 'Mail'

        return (
          <a
            key={link.name}
            href={isMail ? '#contact' : link.url}
            target={isMail ? undefined : '_blank'}
            rel={isMail ? undefined : 'noopener noreferrer'}
            aria-label={link.name}
            className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/10 hover:shadow-md"
          >
            <span
              className={`pointer-events-none absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-secondary px-2.5 py-1 text-xs text-background opacity-0 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100 ${isFooter ? '-top-8' : 'top-15'}`}
            >
              {link.name}
              {/* Little triangle pointer for the tooltip */}
              <span
                className={`absolute left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 bg-secondary ${isFooter ? '-bottom-1' : 'bottom-5'}`}
              ></span>
            </span>

            {/* 1. Handling the Medium "Me" Text Fallback */}
            {link.name === 'Medium' ? (
              <span className="font-serif font-bold text-lg text-muted-foreground transition-colors group-hover:text-primary">
                Me
              </span>
            ) : /* 2. Handling Lucide React Icons (like Mail) */
            typeof link.icon !== 'string' ? (
              <link.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            ) : (
              /* 3. Handling External SVGs using CSS Masking */
              <div
                className="h-5 w-5 bg-muted-foreground transition-colors group-hover:bg-primary"
                style={{
                  WebkitMaskImage: `url(${link.icon})`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: `url(${link.icon})`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                }}
              />
            )}
          </a>
        )
      })}
    </div>
  )
}

export default Socials
