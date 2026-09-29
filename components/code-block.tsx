"use client";

import React, { useState } from "react";
import { CheckIcon, CopyIcon } from "@phosphor-icons/react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

export function CodeBlock({
  code,
  language = "typescript",
  filename,
  className = "",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      className={`relative my-6 overflow-hidden rounded-lg border border-current/50 bg-current/10 font-mono text-xs sm:text-[13px] ${className}`}
    >
      {/* Header bar if filename or language is provided */}
      {(filename || language) && (
        <div className="flex items-center justify-between border-b border-current/50 bg-current/5 px-4 py-2">
          <span className="font-mono text-[11px] tracking-tight">
            {filename || language}
          </span>
          <button
            type="button"
            onClick={copyToClipboard}
            className="inline-flex cursor-pointer items-center gap-1 text-[11px]"
            title="Copy code"
          >
            {copied ? (
              <>
                <CheckIcon size={12} />
                <span className="font-mono">copied</span>
              </>
            ) : (
              <>
                <CopyIcon size={12} />
                <span>copy</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Code contents */}
      <div className="overflow-x-auto p-4 leading-relaxed">
        <pre className="flex">
          <code className="flex-1 whitespace-pre">{code.trim()}</code>
        </pre>
      </div>
    </div>
  );
}
