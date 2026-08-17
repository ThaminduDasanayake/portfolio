"use client"

import * as React from "react"
import { ArrowUpRight } from "@phosphor-icons/react"
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/data"

export function Footer() {
  const [timeStr, setTimeStr] = React.useState<string>("")

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const formatted = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Colombo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
      setTimeStr(formatted)
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer id="contact" className="py-20 sm:py-28 border-t border-border/60">
      <div className="mx-auto max-w-[1440px] 2xl:max-w-[1560px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-8 items-start">
          {/* Left: Direct Email CTA */}
          <div className="md:col-span-5 space-y-3">
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              Interested to work with me?
            </p>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="block font-heading text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground hover:opacity-75 transition-opacity underline underline-offset-4 break-all"
            >
              {PERSONAL_INFO.email.toUpperCase()}
            </a>
          </div>

          {/* Center: Social Links */}
          <div className="md:col-span-4 space-y-3">
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              Network & Writing
            </p>
            <div className="flex flex-col space-y-2 font-mono text-xs sm:text-sm">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-muted-foreground transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={12} className="text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Live Digital Clock & Timezone */}
          <div className="md:col-span-3 space-y-3 md:text-right">
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              Local Time (Asia/Colombo)
            </p>
            <div className="font-mono text-base sm:text-lg font-bold text-foreground tracking-wider tabular-nums">
              {timeStr || "12:00:00 AM"}
            </div>
            <p className="font-mono text-[11px] text-muted-foreground">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
