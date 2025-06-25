"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { month: "Jan", performance: 30 },
  { month: "Feb", performance: 45 },
  { month: "Mar", performance: 25 },
  { month: "Apr", performance: 50 },
  { month: "May", performance: 42 },
  { month: "Jun", performance: 60 },
];

export default function PerformanceOverview() {
  return (
    <Card className="rounded-2xl shadow-sm border border-muted bg-card hover:shadow-md transition">
      <CardContent className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            📈 Performance Trends
          </h2>
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data} margin={{ top: 10, right: 30, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--muted)" />
            <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={12} />
            <YAxis stroke="var(--muted-foreground)" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "0.5rem",
                border: "1px solid var(--muted)",
              }}
              labelStyle={{ color: "var(--muted-foreground)" }}
            />
            <Line
              type="monotone"
              dataKey="performance"
              stroke="oklch(55% 0.17 260)"
              strokeWidth={3}
              dot={{ r: 4, fill: "oklch(55% 0.17 260)" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
