"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { TableOfContents, TocItem } from "@/components/table-of-contents";
import { CodeBlock } from "@/components/code-block";
import { ColorToggle } from "@/components/color-toggle";

const TOC_ITEMS: TocItem[] = [
  { id: "overview", title: "Overview" },
  { id: "installation", title: "Installation" },
  { id: "auth-config", title: "Auth Configuration" },
  { id: "route-handler", title: "Route Handler" },
  { id: "github-oauth", title: "GitHub OAuth Credentials" },
  { id: "client-hooks", title: "Client Hooks & Session" },
  { id: "database-schema", title: "Database Schema" },
  { id: "production-tips", title: "Production Checklist" },
];

export function BetterAuthGuideArticle() {
  const [isInverted, setIsInverted] = useState(false);

  return (
    <main
      data-inverted={isInverted ? "true" : "false"}
      data-theme={isInverted ? "emerald" : "dark-emerald"}
      className="w-full min-w-80 overflow-x-clip"
    >
      <header className="relative z-4 h-11">
        <div className="fixed top-5 right-5 flex items-center gap-4">
          <ColorToggle
            isInverted={isInverted}
            onToggle={() => setIsInverted((prev) => !prev)}
          />
        </div>
      </header>
      <section className="relative min-h-186 w-full pt-49 pb-28">
        <div className="relative mx-auto flex min-h-0 w-135 max-w-[calc(100%-60px)] flex-col items-start gap-9">
          {/* Sticky Left TOC Sidebar */}
          <TableOfContents items={TOC_ITEMS} postIndex="001" />

          {/* Main Content Column */}
          <article className="prose-custom max-w-2xl space-y-16">
            <motion.header
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h1 className="text-3xl leading-tight font-medium tracking-tight sm:text-4xl lg:text-5xl">
                Setting Up Better Auth with GitHub OAuth
              </h1>

              <div className="font-mono text-xs opacity-60">
                <span>Published 2 Sep 2026, 5 min read</span>
              </div>

              <p className="pt-2 text-base leading-relaxed opacity-85 sm:text-lg">
                A comprehensive handbook for configuring Better Auth in Next.js
                App Router with type-safe GitHub OAuth authentication, session
                verification, and database persistence.
              </p>
            </motion.header>

            {/* 1. Overview */}
            <section id="overview" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
                Overview
              </h2>
              <p className="text-sm leading-relaxed opacity-90 sm:text-base">
                Better Auth is a modern, TypeScript-first authentication
                framework designed specifically for the contemporary TypeScript
                ecosystem. Unlike older auth solutions with heavy abstraction
                layers, Better Auth is modular, zero-dependency by default, and
                works natively across both server and client environments in
                Next.js 15 and React 19.
              </p>
              <p className="text-sm leading-relaxed opacity-90 sm:text-base">
                In this guide, we walk through configuring GitHub OAuth login
                from scratch with full cookie session security and database
                synchronization.
              </p>
            </section>

            {/* 2. Installation */}
            <section id="installation" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
                Installation
              </h2>
              <p className="text-sm leading-relaxed opacity-90 sm:text-base">
                Install the core{" "}
                <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                  better-auth
                </code>{" "}
                package and its CLI companion for schema migrations:
              </p>
              <CodeBlock
                filename="terminal"
                language="bash"
                code="pnpm add better-auth @better-auth/cli"
              />
            </section>

            {/* 3. Auth Configuration */}
            <section id="auth-config" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
                Auth Configuration
              </h2>
              <p className="text-sm leading-relaxed opacity-90 sm:text-base">
                Create an{" "}
                <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                  auth.ts
                </code>{" "}
                file in your{" "}
                <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                  lib/
                </code>{" "}
                folder. This exports the main{" "}
                <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                  auth
                </code>{" "}
                instance that manages sessions, tokens, and OAuth providers.
              </p>
              <CodeBlock
                filename="lib/auth.ts"
                language="typescript"
                code={`import { betterAuth } from "better-auth";
import { pool } from "@/lib/db"; // or your preferred ORM/client

export const auth = betterAuth({
  database: pool,
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
  },
});`}
              />
            </section>

            {/* 4. Route Handler */}
            <section id="route-handler" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
                Route Handler
              </h2>
              <p className="text-sm leading-relaxed opacity-90 sm:text-base">
                Next.js App Router needs a catch-all route handler to process
                OAuth redirects, callback tokens, session validation, and
                sign-out endpoints automatically:
              </p>
              <CodeBlock
                filename="app/api/auth/[...all]/route.ts"
                language="typescript"
                code={`import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth.handler);`}
              />
            </section>

            {/* 5. GitHub OAuth Credentials */}
            <section id="github-oauth" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
                GitHub OAuth Credentials
              </h2>
              <p className="text-sm leading-relaxed opacity-90 sm:text-base">
                Head to{" "}
                <span className="font-medium">
                  GitHub Settings &gt; Developer Settings &gt; OAuth Apps
                </span>{" "}
                and register a new application.
              </p>
              <ul className="list-inside list-disc space-y-2 text-sm opacity-85 sm:text-base">
                <li>
                  <strong className="font-medium">Homepage URL:</strong>{" "}
                  <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                    http://localhost:3000
                  </code>
                </li>
                <li>
                  <strong className="font-medium">
                    Authorization callback URL:
                  </strong>{" "}
                  <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                    http://localhost:3000/api/auth/callback/github
                  </code>
                </li>
              </ul>
              <p className="pt-2 text-sm leading-relaxed opacity-90 sm:text-base">
                Add your generated Client ID and Client Secret into{" "}
                <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                  .env.local
                </code>
                :
              </p>
              <CodeBlock
                filename=".env.local"
                language="ini"
                code={`GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"
BETTER_AUTH_SECRET="generate_with_openssl_rand_hex_32"
BETTER_AUTH_URL="http://localhost:3000"`}
              />
            </section>

            {/* 6. Client Hooks & Session */}
            <section id="client-hooks" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
                Client Hooks &amp; Session
              </h2>
              <p className="text-sm leading-relaxed opacity-90 sm:text-base">
                Create the client helper using{" "}
                <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                  createAuthClient
                </code>{" "}
                to enable reactive React hooks:
              </p>
              <CodeBlock
                filename="lib/auth-client.ts"
                language="typescript"
                code={`import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
});

export const { signIn, signOut, useSession } = authClient;`}
              />

              <p className="pt-2 text-sm leading-relaxed opacity-90 sm:text-base">
                Now you can render authenticated user profiles with sign-in and
                sign-out buttons seamlessly:
              </p>
              <CodeBlock
                filename="components/user-account-nav.tsx"
                language="tsx"
                code={`"use client";

import { signIn, signOut, useSession } from "@/lib/auth-client";

export function UserAccountNav() {
  const { data: session, isPending } = useSession();

  if (isPending) return <div className="animate-pulse h-8 w-24 bg-current/10 rounded" />;

  if (!session) {
    return (
      <button
        onClick={() => signIn.social({ provider: "github", callbackURL: "/dashboard" })}
        className="px-4 py-2 rounded-md bg-current text-background font-mono text-xs"
      >
        Sign in with GitHub
      </button>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <img
        src={session.user.image || "/avatar-fallback.png"}
        alt={session.user.name}
        className="h-7 w-7 rounded-full"
      />
      <span className="font-mono text-xs">{session.user.name}</span>
      <button
        onClick={() => signOut()}
        className="text-xs opacity-60 hover:opacity-100 font-mono"
      >
        Sign out
      </button>
    </div>
  );
}`}
              />
            </section>

            {/* 7. Database Schema */}
            <section id="database-schema" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
                Database Schema
              </h2>
              <p className="text-sm leading-relaxed opacity-90 sm:text-base">
                Run the Better Auth CLI to generate database tables for users,
                sessions, accounts, and verification tokens:
              </p>
              <CodeBlock
                filename="terminal"
                language="bash"
                code="pnpm npx @better-auth/cli generate"
              />
            </section>

            {/* 8. Production Tips */}
            <section id="production-tips" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
                Production Checklist
              </h2>
              <ul className="space-y-3 text-sm opacity-85 sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="mt-1 font-mono text-xs opacity-50">01.</span>
                  <span>
                    Set{" "}
                    <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                      BETTER_AUTH_URL
                    </code>{" "}
                    in your deployment environment variables to match your
                    production domain.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 font-mono text-xs opacity-50">02.</span>
                  <span>
                    Add production callback URLs in GitHub Developer settings
                    (e.g.{" "}
                    <code className="rounded bg-current/10 px-1.5 py-0.5 font-mono text-xs">
                      https://yourdomain.com/api/auth/callback/github
                    </code>
                    ).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 font-mono text-xs opacity-50">03.</span>
                  <span>
                    Use SSL-secured connection pooling for Postgres or MySQL
                    databases.
                  </span>
                </li>
              </ul>
            </section>
          </article>
        </div>
      </section>
      <footer></footer>
    </main>
  );
}
