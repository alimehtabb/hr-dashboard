"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import ProgressBar from "@/components/ui/ProgressBar";

const departments = [
  { name: "HR", progress: 78, color: "bg-green-500" },
  { name: "Sales", progress: 64, color: "bg-blue-500" },
  { name: "Marketing", progress: 52, color: "bg-pink-500" },
  { name: "IT", progress: 91, color: "bg-purple-500" },
  { name: "Logistics", progress: 43, color: "bg-orange-500" },
];

export default function DepartmentGrid() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">🏢 Department Progress</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept, i) => (
          <Card key={i} className="rounded-2xl shadow border border-muted">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">{dept.name}</h3>
                <span className="text-sm text-muted-foreground">{dept.progress}%</span>
              </div>
              <ProgressBar percentage={dept.progress} colorClass={dept.color} />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
