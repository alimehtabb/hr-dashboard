"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DailyTaskCard from "@/components/ui/DailyTaskCard";

type TabKey = "Daily Tasks" | "Idea Submissions" | "Weekly Goals";

const tabData: Record<TabKey, {
  employee: string;
  department: string;
  points: number;
  colorClass: string;
  tasks: { title: string; completed: boolean }[];
}[]> = {
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
      colorClass: "bg-orange-600",
      tasks: [
        { title: "Conduct onboarding", completed: true },
        { title: "Update attendance sheet", completed: false },
      ],
    },
  ],
  "Idea Submissions": [],
  "Weekly Goals": [],
};

export default function TopPerformers() {
  const [activeTab, setActiveTab] = useState<TabKey>("Daily Tasks");

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">🏅 Top Performers of the Month</h2>

      <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as TabKey)} className="w-full space-y-4">
        <TabsList className="bg-muted rounded-xl p-1 w-fit">
          {(Object.keys(tabData) as TabKey[]).map((key) => (
            <TabsTrigger key={key} value={key} className="px-4 py-2 text-sm font-medium rounded-lg">
              {key}
            </TabsTrigger>
          ))}
        </TabsList>

        {(Object.keys(tabData) as TabKey[]).map((key) => (
          <TabsContent key={key} value={key} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tabData[key].length === 0 ? (
              <div className="col-span-full text-center text-muted-foreground py-6">
                No data available for <strong>{key}</strong>
              </div>
            ) : (
              tabData[key].map((data, index) => <DailyTaskCard key={index} {...data} />)
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
