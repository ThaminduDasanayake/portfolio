"use client";

import { useState } from "react";
import {
  CopyIcon,
  CheckIcon,
  GithubLogoIcon,
  WarningIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";

function CodeBlock({
  code,
  filename,
}: {
  code: string;
  filename?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="my-4 overflow-hidden rounded-xl border border-border/70 bg-muted/20 font-mono text-xs">
      {filename && (
        <div className="flex items-center justify-between border-b border-border/50 bg-muted/40 px-4 py-2 text-muted-foreground">
          <span className="text-[11px] text-foreground font-medium">{filename}</span>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            {copied ? (
              <span className="flex items-center gap-1 text-emerald-400 font-sans">
                <CheckIcon size={12} /> Copied
              </span>
            ) : (
              <span className="flex items-center gap-1 font-sans">
                <CopyIcon size={12} /> Copy
              </span>
            )}
          </button>
        </div>
      )}
      <div className="relative">
        {!filename && (
          <button
            type="button"
            onClick={handleCopy}
            className="absolute right-3 top-3 flex items-center gap-1 rounded bg-muted/60 px-2 py-1 text-[10px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer border border-border/40"
          >
            {copied ? (
              <span className="flex items-center gap-1 text-emerald-400 font-sans">
                <CheckIcon size={12} /> Copied
              </span>
            ) : (
              <span className="flex items-center gap-1 font-sans">
                <CopyIcon size={12} /> Copy
              </span>
            )}
          </button>
        )}
        <pre className="overflow-x-auto p-4 leading-relaxed text-foreground/90">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

export default function BetterAuthGitHubSetupPage() {
  const [dbAdapter, setDbAdapter] = useState<"prisma" | "pg" | "drizzle">("prisma");

  const prismaAuthCode = `import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@/lib/prisma"; // Your Prisma client instance

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql" | "sqlite"
  }),
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
});`;

  const pgAuthCode = `import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.DATABASE_URL,
  }),
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
});`;

  const drizzleAuthCode = `import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db"; // Your Drizzle instance
import * as schema from "@/db/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      ...schema,
    },
  }),
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
});`;

  return (
    <article className="space-y-8">
      {/* Header */}
      <header className="space-y-2 border-b border-border/40 pb-6">
        <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
          <time dateTime="2026-09-25">September 2026</time>
          <span>•</span>
          <span>5 min read</span>
          <span>•</span>
          <span className="text-foreground">Handbook & Guides</span>
        </div>
        <h1 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          Setting Up Better Auth with GitHub OAuth in Next.js (App Router)
        </h1>
        <p className="text-sm text-muted-foreground">
          Complete copy-paste blueprint: server instance, Next.js catch-all API handler, client SDK, and session protection.
        </p>
      </header>

      {/* Guide Content */}
      <div className="space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <p>
          <strong className="text-foreground font-medium">Better Auth</strong> is the most complete, type-safe authentication library for TypeScript and Next.js. Here is the zero-fluff setup guide for configuring GitHub OAuth from scratch.
        </p>

        {/* Quick Flow Map */}
        <div className="rounded-xl border border-border/60 bg-muted/20 p-4 font-mono text-xs space-y-1.5 text-muted-foreground">
          <div className="flex items-center gap-2 text-foreground font-medium">
            <GithubLogoIcon size={16} />
            <span>Architecture Overview</span>
          </div>
          <p className="text-[11px] leading-relaxed">
            GitHub OAuth App → <code className="text-foreground">/api/auth/[...all]</code> → <code className="text-foreground">lib/auth.ts</code> (Server) ↔ Database ↔ <code className="text-foreground">lib/auth-client.ts</code> (React Hooks).
          </p>
        </div>

        {/* Step 1 */}
        <h2 className="pt-4 text-lg font-medium text-foreground sm:text-xl">
          1. Install Better Auth
        </h2>
        <p>Run the package installation in your project root:</p>
        <CodeBlock code="npm install better-auth" />

        {/* Step 2 */}
        <h2 className="pt-4 text-lg font-medium text-foreground sm:text-xl">
          2. Create GitHub OAuth App
        </h2>
        <p>
          Go to GitHub: <strong>Settings → Developer settings → OAuth Apps → New OAuth App</strong>:
        </p>
        <div className="rounded-xl border border-border/50 bg-muted/20 p-4 font-mono text-xs space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="text-muted-foreground">Application name:</span>
            <span className="text-foreground">My Next.js App (or your project name)</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="text-muted-foreground">Homepage URL:</span>
            <code className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">http://localhost:3000</code>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="text-muted-foreground">Authorization callback URL:</span>
            <code className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">http://localhost:3000/api/auth/callback/github</code>
          </div>
        </div>

        <div className="border-l-2 border-amber-500/60 bg-amber-500/5 p-3 rounded-r-lg text-xs space-y-1">
          <div className="flex items-center gap-1.5 font-medium text-amber-400">
            <WarningIcon size={14} />
            <span>Production note</span>
          </div>
          <p className="text-muted-foreground">
            For production (e.g. Vercel), create a second OAuth app on GitHub with your production domain: <code className="text-foreground">https://yourdomain.com/api/auth/callback/github</code>.
          </p>
        </div>

        {/* Step 3 */}
        <h2 className="pt-4 text-lg font-medium text-foreground sm:text-xl">
          3. Environment Variables (.env.local)
        </h2>
        <p>Add the Client ID and generated Client Secret from GitHub to your environment file:</p>
        <CodeBlock
          filename=".env.local"
          code={`# Better Auth Config
BETTER_AUTH_SECRET=your_generated_random_secret_string
BETTER_AUTH_URL=http://localhost:3000

# GitHub OAuth Credentials
GITHUB_CLIENT_ID=your_github_client_id_here
GITHUB_CLIENT_SECRET=your_github_client_secret_here

# Database Connection
DATABASE_URL=postgresql://user:password@localhost:5432/mydb`}
        />
        <p className="text-xs text-muted-foreground">
          Tip: You can generate a secret with <code className="text-foreground font-mono bg-muted/40 px-1.5 py-0.5 rounded">openssl rand -base64 32</code>.
        </p>

        {/* Step 4 */}
        <h2 className="pt-4 text-lg font-medium text-foreground sm:text-xl">
          4. Initialize Better Auth Server Instance (lib/auth.ts)
        </h2>
        <p>Select your database adapter below to copy the exact configuration:</p>

        {/* Adapter Switcher */}
        <div className="flex items-center gap-1 rounded-lg border border-border/50 bg-muted/30 p-1 text-xs font-mono w-fit">
          <button
            type="button"
            onClick={() => setDbAdapter("prisma")}
            className={`rounded-md px-3 py-1 transition-all cursor-pointer ${
              dbAdapter === "prisma"
                ? "bg-foreground text-background font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Prisma
          </button>
          <button
            type="button"
            onClick={() => setDbAdapter("pg")}
            className={`rounded-md px-3 py-1 transition-all cursor-pointer ${
              dbAdapter === "pg"
                ? "bg-foreground text-background font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            PostgreSQL (pg/Neon)
          </button>
          <button
            type="button"
            onClick={() => setDbAdapter("drizzle")}
            className={`rounded-md px-3 py-1 transition-all cursor-pointer ${
              dbAdapter === "drizzle"
                ? "bg-foreground text-background font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Drizzle
          </button>
        </div>

        {dbAdapter === "prisma" && (
          <CodeBlock filename="lib/auth.ts" code={prismaAuthCode} />
        )}
        {dbAdapter === "pg" && (
          <CodeBlock filename="lib/auth.ts" code={pgAuthCode} />
        )}
        {dbAdapter === "drizzle" && (
          <CodeBlock filename="lib/auth.ts" code={drizzleAuthCode} />
        )}

        {/* Step 5 */}
        <h2 className="pt-4 text-lg font-medium text-foreground sm:text-xl">
          5. Next.js Catch-All Route Handler
        </h2>
        <p>Mount the Better Auth handler in Next.js App Router:</p>
        <CodeBlock
          filename="app/api/auth/[...all]/route.ts"
          code={`import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth.handler);`}
        />

        {/* Step 6 */}
        <h2 className="pt-4 text-lg font-medium text-foreground sm:text-xl">
          6. Generate Database Schema
        </h2>
        <p>Run the Better Auth CLI to automatically generate the user, session, and account tables:</p>
        <CodeBlock
          code={`# Generate schema definition
npx @better-auth/cli generate

# Push migrations to database (e.g. Prisma or Drizzle)
npx prisma db push`}
        />

        {/* Step 7 */}
        <h2 className="pt-4 text-lg font-medium text-foreground sm:text-xl">
          7. Create Client SDK (lib/auth-client.ts)
        </h2>
        <p>Export the client instance to use React hooks and auth methods in UI components:</p>
        <CodeBlock
          filename="lib/auth-client.ts"
          code={`import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
});

export const { signIn, signOut, useSession } = authClient;`}
        />

        {/* Step 8 */}
        <h2 className="pt-4 text-lg font-medium text-foreground sm:text-xl">
          8. UI Component (Sign In with GitHub & Session Display)
        </h2>
        <p>Here is a clean React client component with sign-in, avatar display, and sign-out states:</p>
        <CodeBlock
          filename="components/user-auth-button.tsx"
          code={`"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export function UserAuthButton() {
  const { data: session, isPending } = authClient.useSession();
  const [loading, setLoading] = useState(false);

  const handleGitHubSignIn = async () => {
    setLoading(true);
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/", // Redirect after successful login
    });
    setLoading(false);
  };

  if (isPending) {
    return <div className="text-xs font-mono text-muted-foreground">Loading...</div>;
  }

  if (session?.user) {
    return (
      <div className="flex items-center gap-3">
        {session.user.image && (
          <img
            src={session.user.image}
            alt={session.user.name || "User"}
            className="h-8 w-8 rounded-full border border-border"
          />
        )}
        <div className="text-xs">
          <p className="font-medium text-foreground">{session.user.name}</p>
          <p className="text-muted-foreground">{session.user.email}</p>
        </div>
        <button
          type="button"
          onClick={() => authClient.signOut({ fetchOptions: { onSuccess: () => window.location.reload() } })}
          className="rounded-lg border border-border px-3 py-1 text-xs font-mono text-muted-foreground hover:text-foreground"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleGitHubSignIn}
      disabled={loading}
      className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-xs font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
    >
      <span>Sign in with GitHub</span>
    </button>
  );
}`}
        />

        {/* Step 9 */}
        <h2 className="pt-4 text-lg font-medium text-foreground sm:text-xl">
          9. Protecting Server Components & Server Actions
        </h2>
        <p>In Next.js App Router Server Components, read the session using incoming headers:</p>
        <CodeBlock
          filename="app/dashboard/page.tsx"
          code={`import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(), // Next.js 15+ headers Promise
  });

  if (!session) {
    redirect("/");
  }

  return (
    <main className="p-8">
      <h1>Welcome back, {session.user.name}</h1>
      <p>Protected user ID: {session.user.id}</p>
    </main>
  );
}`}
        />

        {/* Quick Checklist */}
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-medium">
            <CheckCircleIcon size={16} />
            <span>Setup Checklist Summary</span>
          </div>
          <ul className="text-xs space-y-1 text-muted-foreground list-disc pl-5">
            <li>Installed <code className="text-foreground">better-auth</code> package.</li>
            <li>Created GitHub OAuth App with callback <code className="text-foreground">/api/auth/callback/github</code>.</li>
            <li>Added <code className="text-foreground">GITHUB_CLIENT_ID</code>, <code className="text-foreground">GITHUB_CLIENT_SECRET</code>, <code className="text-foreground">BETTER_AUTH_SECRET</code> to <code className="text-foreground">.env.local</code>.</li>
            <li>Mounted route handler in <code className="text-foreground">app/api/auth/[...all]/route.ts</code>.</li>
            <li>Exported <code className="text-foreground">authClient</code> in <code className="text-foreground">lib/auth-client.ts</code>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
