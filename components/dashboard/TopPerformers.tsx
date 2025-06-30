"use client";

import React, { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar";
import { Card } from "@/components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

interface Performer {
  id: number;
  name: string;
  avatar: string;
  points: string;
  ring: string;
}
const topPerformers: Performer[] = [
  { id: 1, name: "Fatima Khan",  avatar: "/avatars/fatima.png", points: "1,250", ring: "blue-500" },
  { id: 2, name: "Mehtab Ali",   avatar: "/avatars/mehtab.png", points: "1,180", ring: "purple-500" },
  { id: 3, name: "Ahmed Rahman", avatar: "/avatars/ahmed.png", points: "1,150", ring: "orange-400" },
];

export default function TopPerformers() {
  const [tab, setTab] = useState<"daily" | "ideas" | "weekly">("daily");

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">🏅 Top Performers of the Month</h2>
        <span className="text-sm font-medium text-muted-foreground">
          M A Tayab Limited
        </span>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {topPerformers.map((p) => (
          <Card key={p.id} className="flex items-center space-x-4 p-4">
            <Avatar className={`h-16 w-16 ring-4 ring-${p.ring}`}>
              <AvatarImage
                src={p.avatar}
                alt={p.name}
                className="h-full w-full object-cover"
              />
              <AvatarFallback>
                {p.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="text-lg font-medium">{p.name}</div>
              <div className="text-sm text-muted-foreground">{p.points}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <Tabs
        value={tab}
        onValueChange={(value) => {
          if (value === "daily" || value === "ideas" || value === "weekly") {
            setTab(value);
          }
        }}
      >
        <TabsList className="border-b">
          <TabsTrigger value="daily">Daily Tasks</TabsTrigger>
          <TabsTrigger value="ideas">Idea Submissions</TabsTrigger>
          <TabsTrigger value="weekly">Weekly Goals</TabsTrigger>
        </TabsList>

        <TabsContent value="daily" className="py-4">
          {/* ... your daily grid here */}
          <div className="text-center text-muted-foreground">
            {/* stub or your real component */}
            Daily Tasks Grid goes here.
          </div>
        </TabsContent>

        <TabsContent
          value="ideas"
          className="py-8 text-center text-muted-foreground"
        >
          No idea submissions yet.
        </TabsContent>
        <TabsContent
          value="weekly"
          className="py-8 text-center text-muted-foreground"
        >
          Weekly goals coming soon.
        </TabsContent>
      </Tabs>
    </section>
  );
}
