"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress";

const departments = [
  {
    name: "Sales",
    completed: 72,
    color: "bg-blue-600",
  },
  {
    name: "Marketing",
    completed: 58,
    color: "bg-pink-600",
  },
  {
    name: "HR",
    completed: 90,
    color: "bg-green-600",
  },
  {
    name: "Finance",
    completed: 40,
    color: "bg-yellow-500",
  },
];

export default function DepartmentGrid() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">📊 Department Progress</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {departments.map((dept) => (
          <Card key={dept.name} className="rounded-2xl shadow-sm">
            <CardContent className="p-6 space-y-3">
              <div className="flex justify-between">
                <div className="font-semibold">{dept.name}</div>
                <div className="text-sm text-muted-foreground">
                  {dept.completed}%
                </div>
              </div>
              <ProgressBar
                value={dept.completed}
                className="bg-muted"
              >
                <div
                  className={`h-full rounded-full transition-all ${dept.color}`}
                  style={{ width: `${dept.completed}%` }}
                />
              </ProgressBar>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
