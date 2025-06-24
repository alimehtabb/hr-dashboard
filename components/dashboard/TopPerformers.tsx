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
  const [tab, setTab] = useState<TabKey>("Daily Tasks");

  return (
    <section className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-bold text-primary">🏅 Top Performers of the Month</h2>
        <TabsList className="mt-4 md:mt-0 w-full md:w-auto">
          {(Object.keys(topPerformersData) as TabKey[]).map((key) => (
            <TabsTrigger
              key={key}
              value={key}
              className={
                tab === key
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              }
              onClick={() => setTab(key)}
            >
              {key}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      <Tabs value={tab} className="w-full">
        {(Object.keys(topPerformersData) as TabKey[]).map((key) => (
          <TabsContent key={key} value={key} className="mt-4">
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