"use client";

import React from "react";
import DailyTaskCard from "./DailyTaskCard";

const mockData = [
  {
    employee: "Mehtab Ali",
    department: "HR/Admin",
    points: 78,
    colorClass: "bg-purple-600",
    tasks: [
      { title: "Update attendance records", completed: true },
      { title: "Review HR policy draft", completed: false },
    ],
  },
  {
    employee: "Kamrul Islam",
    department: "Accounts",
    points: 88,
    colorClass: "bg-orange-500",
    tasks: [
      { title: "Prepare budget summary", completed: true },
      { title: "Review ledger entries", completed: true },
      { title: "Send monthly report", completed: false },
    ],
  },
  {
    employee: "Nayem Hosen",
    department: "IT",
    points: 92,
    colorClass: "bg-sky-600",
    tasks: [
      { title: "Server backup", completed: true },
      { title: "Fix login issue", completed: false },
    ],
  },
];

export default function DailyTaskGrid() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">✅ Daily Task Tracker</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockData.map((entry, idx) => (
          <DailyTaskCard key={idx} {...entry} />
        ))}
      </div>
    </section>
  );
}
