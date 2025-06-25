"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DailyTaskCard from "@/components/ui/DailyTaskCard";

const topPerformersData = {
  "Daily Tasks": [
    {
      employee: "Sarah Ahmed",
      department: "Sales",
      points: 950,
      colorClass: "bg-blue-600",
      tasks: [
        { title: "Call 5 prospects", completed: true },
        { title: "Send follow-up emails", completed: true },
        { title: "Update CRM", completed: false },
      ],
    },
    {
      employee: "Zaid Khan",
      department: "Marketing",
      points: 870,
      colorClass: "bg-pink-600",
      tasks: [
        { title: "Post 2 stories", completed: true },
        { title: "Coordinate ad run", completed: false },
      ],
    },
    {
      employee: "Anika Rahman",
      department: "HR",
      points: 820,
      colorClass: "bg-green-600",
      tasks: [
        { title: "Conduct onboarding", completed: true },
        { title: "Update attendance sheet", completed: false },
      ],
    },
  ],
  "Idea Submissions": [],
  "Weekly Goals": [],
};

type TabKey = keyof typeof topPerformersData;

export default function TopPerformers() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">🏅 Top Performers of the Month</h2>

      <Tabs defaultValue="Daily Tasks" className="space-y-4">
        <TabsList className="w-full md:w-auto flex flex-wrap justify-start gap-2 bg-muted p-1 rounded-xl">
          {(Object.keys(topPerformersData) as TabKey[]).map((key) => (
            <TabsTrigger
              key={key}
              value={key}
              className="px-4 py-2 text-sm font-medium rounded-lg"
            >
              {key}
            </TabsTrigger>
          ))}
        </TabsList>

        {(Object.keys(topPerformersData) as TabKey[]).map((key) => (
          <TabsContent key={key} value={key}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topPerformersData[key].length === 0 ? (
                <p className="text-muted-foreground col-span-full">No data available for this tab.</p>
              ) : (
                topPerformersData[key].map((item, idx) => (
                  <DailyTaskCard
                    key={idx}
                    employee={item.employee}
                    department={item.department}
                    points={item.points}
                    colorClass={item.colorClass}
                    tasks={item.tasks}
                  />
                ))
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
