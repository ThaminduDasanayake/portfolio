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
    <footer id="contact" className="gap-11 border-t p-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
        <div className="md:col-span-3">
          <p>
            Interested to work with me?
            <br />
            {PERSONAL_INFO.email.toUpperCase()}
          </p>
        </div>

        <div className="space-y-3 md:col-span-1">
          <div className="flex flex-col items-start space-y-2">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground text-muted-foreground w-fit transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-3 md:col-span-2 md:text-right">
          <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
            Local Time (Asia/Colombo)
          </p>
          <div className="text-foreground font-mono text-base font-bold tracking-wider tabular-nums sm:text-lg">
            {timeStr || "12:00:00 AM"}
          </div>
          <p className="text-muted-foreground font-mono text-[11px]">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
