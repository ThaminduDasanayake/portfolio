"use client";

export function Hero() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto pt-6 sm:pt-10">
        {/* Huge Display Name */}
        <div className="flex w-full flex-col items-center justify-center overflow-hidden px-8 pb-8 sm:pb-12">
          <h1 className="hero-display-title">
            <span className="block">THAMINDU</span>
            <span className="block">DASANAYAKE</span>
          </h1>
        </div>

        {/* Dual Showcase Cards (Bento Row matching Image 1 & 2) */}
        <div className="mb-16 grid grid-cols-1 gap-6 px-8 sm:mb-24 sm:gap-8 md:grid-cols-2">
          {/* Card 1 (Left): Light aesthetic interactive UI widgets showcase */}
          <div className="border-border relative flex aspect-16/11 items-center justify-center overflow-hidden rounded-3xl border bg-[#e4e6eb] p-4 text-neutral-900 shadow-xl transition-transform duration-500 hover:scale-[1.01] sm:aspect-16/10 sm:p-8 dark:bg-[#ebecef]"></div>

          {/* Card 2 (Right): Dark device mockup showcasing dark UI widgets */}
          <div className="border-border relative flex aspect-16/11 items-center justify-center overflow-hidden rounded-3xl border bg-[#0d0e12] p-4 text-white shadow-xl transition-transform duration-500 hover:scale-[1.01] sm:aspect-16/10 sm:p-6"></div>
        </div>

        {/* Editorial Split Bio (matching Image 2) */}
        <div className="grid grid-cols-1 items-start justify-center gap-8 px-8 py-30 pt-6 lg:grid-cols-6 lg:gap-12">
          <div className="lg:col-span-3">
            <h2 className="hero-description">
              Hi, I&apos;m Thamindu, a software engineer who loves to
              experiment, architect resilient systems, and build intuitive
              digital products.
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed sm:text-base lg:col-span-2">
            <p>
              Software Engineer specializing in full-stack architecture with
              Next.js, TypeScript, React, Node.js, and Generative AI pipelines.
            </p>

            {/*<div className="flex flex-wrap items-center gap-4 font-mono text-xs font-semibold tracking-wider text-foreground pt-2">*/}
            {/*  <a*/}
            {/*    href="#works"*/}
            {/*    className="underline underline-offset-4 hover:opacity-75 transition-opacity inline-flex items-center gap-1"*/}
            {/*  >*/}
            {/*    <span>VIEW SELECTED WORKS</span>*/}
            {/*    <ArrowDown size={14} />*/}
            {/*  </a>*/}
            {/*  <span className="text-border">•</span>*/}
            {/*  <a*/}
            {/*    href="#contact"*/}
            {/*    className="underline underline-offset-4 hover:opacity-75 transition-opacity inline-flex items-center gap-1"*/}
            {/*  >*/}
            {/*    <span>GET IN TOUCH</span>*/}
            {/*    <ArrowUpRight size={14} />*/}
            {/*  </a>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </section>
  );
}
