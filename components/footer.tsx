"use client";

import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/data";
import { useEffect, useState } from "react";

export function Footer() {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Colombo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTimeStr(formatted);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer id="contact" className="p-8 gap-11 border-t">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="md:col-span-3">
          <p className="leading-[1.2em]">
            Interested to work with me?
            <br />
            {PERSONAL_INFO.email.toUpperCase()}
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="md:col-span-1 space-y-3">
          <div className="flex flex-col flex-start space-y-2">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground text-muted-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Live Digital Clock & Timezone */}
        <div className="md:col-span-2 space-y-3 md:text-right">
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
    </footer>
  );
}
