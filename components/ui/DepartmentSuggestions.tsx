"use client";

import React, { useState } from "react";
import Button from "./button";

const departments = ["Sales", "Accounts", "IT", "Admin"];

const allSuggestions: Record<string, string[]> = {
  Sales: [
    "Focus on lead conversion rate this week",
    "Add 2 new clients",
    "Follow up on 5 pending proposals",
  ],
  Accounts: [
    "Automate invoice reminders",
    "Review quarterly budget",
    "Match payment receipts with expenses",
  ],
  IT: [
    "Upgrade server security patches",
    "Migrate to new cloud region",
    "Audit device access logs",
  ],
  Admin: [
    "Optimize office supply ordering",
    "Schedule team-building event",
    "Ensure attendance logs are updated",
  ],
};

export default function DepartmentSuggestions() {
  const [activeDept, setActiveDept] = useState("Sales");
  const [list, setList] = useState(allSuggestions["Sales"]);

  const changeDept = (dept: string) => {
    setActiveDept(dept);
    setList(allSuggestions[dept]);
  };

  const regenerate = () => {
    setList((prev) => [...prev].sort(() => 0.5 - Math.random()));
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => changeDept(dept)}
            className={`px-3 py-1 rounded text-sm font-medium transition ${
              dept === activeDept
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {dept}
          </button>
        ))}
      </div>
      <ul className="list-disc ml-5 text-muted-foreground space-y-1 text-sm">
        {list.map((suggestion, i) => (
          <li key={i}>{suggestion}</li>
        ))}
      </ul>
      <Button variant="outline" className="w-full" onClick={regenerate}>
        🔄 Generate New Suggestions
      </Button>
    </div>
  );
}