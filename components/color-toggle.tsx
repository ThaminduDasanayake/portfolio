"use client";

import React from "react";

interface ColorToggleProps {
  isInverted: boolean;
  onToggle: () => void;
  className?: string;
  size?: number;
}

export function ColorToggle({
  isInverted,
  onToggle,
  className = "",
  size = 12,
}: ColorToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isInverted}
      className={`group/toggle relative inline-flex cursor-pointer items-center justify-center p-2 text-current ${className}`}
    >
      <span className="sr-only">
        {isInverted ? "Switch to default mode" : "Switch to inverted mode"}
      </span>

      {/* Circle Frame */}
      <span
        style={{ width: size, height: size }}
        className="relative inline-block"
      >
        {/* Outer Circle Border */}
        <span
          className="absolute inset-0 rounded-full border-[1.25px] border-current"
          aria-hidden="true"
        />

        {/* Half Fill (no spin, clean half-fill flip) */}
        <span
          className={`absolute top-0 bottom-0 w-1/2 bg-current ${
            isInverted ? "left-0 rounded-l-full" : "right-0 rounded-r-full"
          }`}
          aria-hidden="true"
        />
      </span>
    </button>
  );
}
