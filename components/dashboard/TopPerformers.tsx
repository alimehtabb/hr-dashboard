"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import DailyTaskCard from "@/components/ui/DailyTaskCard";

const tabs = [
  { value: "daily", label: "Daily Tasks" },
  { value: "ideas", label: "Idea Submissions" },
  { value: "weekly", label: "Weekly Goals" },
];

export default function TopPerformers() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">
        Top Performers of the Month
      </h2>

      <Tabs defaultValue="daily" className="w-full">
        <TabsList className="bg-muted p-1 rounded-lg">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-2 rounded-md"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="daily" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DailyTaskCard
              employee="Sarah Ahmed"
              department="Sales"
              points={950}
              colorClass="bg-blue-600"
              tasks={[
                { title: "Call 5 prospects", completed: true },
                { title: "Send follow-up emails", completed: true },
                { title: "Update CRM", completed: false },
              ]}
            />
            <DailyTaskCard
              employee="Zaid Khan"
              department="Marketing"
              points={870}
              colorClass="bg-pink-600"
              tasks={[
                { title: "Draft newsletter", completed: true },
                { title: "Schedule posts", completed: false },
                { title: "Review analytics", completed: false },
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="ideas" className="pt-6">
          <Card className="rounded-xl">
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                No ideas submitted yet.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weekly" className="pt-6">
          <Card className="rounded-xl">
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                Weekly goals will appear here.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
