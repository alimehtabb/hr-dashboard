"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const datasets = {
  tasks: {
    label: "Tasks Completed",
    data: [30, 45, 28, 60, 50, 70],
    borderColor: "oklch(60% 0.15 240)",
  },
  ideas: {
    label: "Ideas Submitted",
    data: [5, 12, 8, 14, 10, 18],
    borderColor: "oklch(60% 0.19 180)",
  },
  goals: {
    label: "Weekly Goals Hit",
    data: [15, 20, 18, 25, 22, 30],
    borderColor: "oklch(60% 0.15 100)",
  },
};

const options = {
  responsive: true,
  plugins: { legend: { display: false } },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { stepSize: 10 },
    },
  },
};

export default function ChartTabs() {
  return (
    <Card className="rounded-2xl shadow-sm border">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-primary">📊 Performance Trends</h2>

        <Tabs defaultValue="tasks">
          <TabsList className="mb-4">
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="ideas">Ideas</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
          </TabsList>

          <TabsContent value="tasks">
            <Line data={{ labels, datasets: [datasets.tasks] }} options={options} />
          </TabsContent>

          <TabsContent value="ideas">
            <Line data={{ labels, datasets: [datasets.ideas] }} options={options} />
          </TabsContent>

          <TabsContent value="goals">
            <Line data={{ labels, datasets: [datasets.goals] }} options={options} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
