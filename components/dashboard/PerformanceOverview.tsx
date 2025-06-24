"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Sparkle } from "lucide-react";

const metrics = [
  {
    title: "Attendance",
    value: "95%",
    progress: 95,
    color: "bg-green-600",
  },
  {
    title: "Task Completion",
    value: "78%",
    progress: 78,
    color: "bg-blue-600",
  },
  {
    title: "Engagement",
    value: "62%",
    progress: 62,
    color: "bg-yellow-500",
  },
  {
    title: "Idea Submission",
    value: "41%",
    progress: 41,
    color: "bg-pink-600",
  },
];

export default function PerformanceOverview() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2 text-primary">
        <Sparkle className="h-5 w-5 text-primary" />
        Performance Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {metrics.map((item) => (
          <Card key={item.title} className="rounded-2xl shadow-sm">
            <CardContent className="p-6 space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <span className="text-sm font-medium text-muted-foreground">
                  {item.value}
                </span>
              </div>
              <ProgressBar
                value={item.progress}
                barClassName={item.color}
                className="bg-muted"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
