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
    <section id="experience" className="py-16 px-8">
      <div className="mx-auto">
        {/* Section Heading & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Experiences
            </h2>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-2">
              Career Trajectory & Education
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-2">
          {EXPERIENCE_MILESTONES.map((item, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-xl ring-0"
            >
              <CardHeader className="p-0 gap-3">
                <span className="font-mono text-xl sm:text-2xl font-bold text-foreground tracking-wider">
                  {item.year}
                </span>
                <div className="space-y-1">
                  <CardTitle className="font-medium text-foreground text-base">
                    {item.role}
                  </CardTitle>
                  <CardDescription className="font-mono text-xs text-muted-foreground uppercase tracking-wide">
                    {item.organization}
                  </CardDescription>
                </div>
              </CardHeader>
              {item.details && (
                <CardContent className="p-0 pt-3 text-xs tracking-wide text-muted-foreground leading-relaxed">
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
