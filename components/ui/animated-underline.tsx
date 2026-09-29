import * as React from "react";
import { cn } from "@/lib/utils";

export interface AnimatedUnderlineProps
  extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /** Base track line below the text. Defaults to false. */
  showTrack?: boolean;
  /** Color class for the resting track line. Defaults to 'before:bg-border/40'. */
  trackColor?: string;
  /** Color class for the active expanding underline. Defaults to 'after:bg-foreground'. */
  underlineColor?: string;
  /** Trigger animation on parent .group hover. Defaults to true. */
  groupHover?: boolean;
  /** Render element tag (e.g. 'span', 'h2', 'div'). Defaults to 'span'. */
  as?: React.ElementType;
}

export function AnimatedUnderline({
  children,
  className,
  showTrack = false,
  trackColor = "before:bg-border/40",
  underlineColor = "after:bg-foreground",
  groupHover = true,
  as: Component = "span",
  ...props
}: AnimatedUnderlineProps) {
  return (
    <Component
      className={cn(
        "relative inline-flex items-center pb-0.5",
        showTrack && [
          "before:pointer-events-none before:absolute before:inset-x-0 before:bottom-0 before:h-px before:content-['']",
          trackColor,
        ],
        "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] after:will-change-transform after:content-['']",
        underlineColor,
        groupHover && "group-hover:after:scale-x-100",
        "hover:after:scale-x-100",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export default AnimatedUnderline;
