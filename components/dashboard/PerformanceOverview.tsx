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
    <Card className="rounded-2xl shadow border border-muted">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-primary">📈 Performance Trends</h2>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
            <YAxis stroke="#6b7280" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "0.5rem",
                border: "1px solid #ccc",
              }}
              labelStyle={{ color: "#6b7280" }}
            />
            <Line
              type="monotone"
              dataKey="performance"
              stroke="#4f46e5"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}