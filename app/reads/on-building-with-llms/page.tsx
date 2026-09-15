"use client";

import { useState } from "react";
import {
  SparkleIcon,
  CheckCircleIcon,
  WarningIcon,
} from "@phosphor-icons/react";

export default function BuildingWithLLMsPage() {
  const [pipelineMode, setPipelineMode] = useState<"naive" | "agentic">(
    "agentic"
  );

  return (
    <article className="space-y-8">
      {/* Header */}
      <header className="border-border/40 space-y-2 border-b pb-6">
        <div className="text-muted-foreground flex items-center gap-3 font-mono text-xs">
          <time dateTime="2026-09-01">September 2026</time>
          <span>•</span>
          <span>4 min read</span>
          <span>•</span>
          <span className="text-foreground">AI Architecture</span>
        </div>
        <h1 className="text-foreground text-2xl font-medium tracking-tight sm:text-3xl">
          On Building AI-Native Apps: Beyond Simple Prompt Wrappers
        </h1>
      </header>

      {/* Content */}
      <div className="text-muted-foreground space-y-6 text-sm leading-relaxed sm:text-base">
        <p>
          In early 2023, building an &ldquo;AI app&rdquo; meant sending a user
          string to an API endpoint and streaming markdown back into a chat
          bubble. It was magic for three minutes, until you tried relying on it
          for mission-critical workflows.
        </p>

        <p>
          The hardest lesson in building real-world LLM systems isn&apos;t
          crafting clever prompts—it&apos;s managing{" "}
          <strong className="text-foreground font-medium">
            determinism, structured outputs, and state machines
          </strong>{" "}
          around inherently non-deterministic models.
        </p>

        {/* Interactive React Widget embedded in article */}
        <div className="border-border/60 bg-muted/20 my-8 space-y-4 rounded-xl border p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SparkleIcon className="text-amber-400" size={16} />
              <span className="text-foreground font-mono text-xs font-medium">
                Interactive Architecture Comparison
              </span>
            </div>
            <div className="border-border/50 bg-background/80 flex rounded-lg border p-0.5 font-mono text-xs">
              <button
                type="button"
                onClick={() => setPipelineMode("naive")}
                className={`rounded-md px-2.5 py-1 transition-all ${
                  pipelineMode === "naive"
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Naive Prompting
              </button>
              <button
                type="button"
                onClick={() => setPipelineMode("agentic")}
                className={`rounded-md px-2.5 py-1 transition-all ${
                  pipelineMode === "agentic"
                    ? "bg-foreground text-background font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Stateful Agent Graph
              </button>
            </div>
          </div>

          {pipelineMode === "naive" ? (
            <div className="text-muted-foreground space-y-2 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3.5 font-mono text-xs">
              <div className="flex items-center gap-2 text-amber-400">
                <WarningIcon size={15} />
                <span>
                  Single-shot LLM Call: High variance, fragile JSON formatting
                </span>
              </div>
              <p className="text-muted-foreground/80 pl-6">
                User Input → Single Prompt → Unstructured Output → Parse Failure
                (20% error rate on complex schemas).
              </p>
            </div>
          ) : (
            <div className="text-muted-foreground space-y-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3.5 font-mono text-xs">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircleIcon size={15} />
                <span>
                  LangGraph State Graph: Deterministic tool loop & schema
                  validation
                </span>
              </div>
              <p className="text-muted-foreground/80 pl-6">
                Input → Schema Enforcement → Tool Execution → Verification Node
                → Validated Output (99.8% schema guarantee).
              </p>
            </div>
          )}
        </div>

        <h2 className="text-foreground pt-4 text-lg font-medium sm:text-xl">
          1. Schema Enforcement at the Boundary
        </h2>
        <p>
          Never ask an LLM to &ldquo;please return JSON in this exact
          format.&rdquo; Always use strict JSON Schema enforcement or
          tool-calling protocols (like OpenAI Structured Outputs or Gemini
          function calling). When schemas are validated before state changes
          occur, 90% of downstream hallucinations disappear.
        </p>

        <h2 className="text-foreground pt-4 text-lg font-medium sm:text-xl">
          2. Treat Context as Working Memory
        </h2>
        <p>
          Context windows are finite and degrade in precision over long
          multi-turn sessions. The best architectures use checkpointed graphs
          where intermediate scratchpads are pruned, and only synthesized state
          transitions persist across nodes.
        </p>

        <div className="border-border text-muted-foreground border-l-2 pl-4 italic">
          &ldquo;The future of AI engineering isn&apos;t larger prompt
          textareas; it&apos;s tighter integration between deterministic code
          and probabilistic models.&rdquo;
        </div>
      </div>
    </article>
  );
}
