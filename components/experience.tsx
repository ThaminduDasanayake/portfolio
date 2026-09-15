"use client";

import * as React from "react";
import { EXPERIENCE_MILESTONES } from "@/lib/data";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export function Experience() {
  return (
    <section id="experience" className="px-8 py-16">
      <div className="mx-auto">
        {/* Section Heading & Intro */}
        <div className="mb-12 grid grid-cols-1 gap-4 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <h2 className="text-foreground text-2xl font-bold tracking-tight sm:text-3xl">
              Experiences
            </h2>
            <p className="text-muted-foreground mt-2 font-mono text-xs tracking-wider uppercase">
              Career Trajectory & Education
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 pt-2 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {EXPERIENCE_MILESTONES.map((item, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between rounded-xl p-6 ring-0 sm:p-7"
            >
              <CardHeader className="gap-3 p-0">
                <span className="text-foreground font-mono text-xl font-bold tracking-wider sm:text-2xl">
                  {item.year}
                </span>
                <div className="space-y-1">
                  <CardTitle className="text-foreground text-base font-medium">
                    {item.role}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground font-mono text-xs tracking-wide uppercase">
                    {item.organization}
                  </CardDescription>
                </div>
              </CardHeader>
              {item.details && (
                <CardContent className="text-muted-foreground p-0 pt-3 text-xs leading-relaxed tracking-wide">
                  {item.details}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
