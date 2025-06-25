"use client";

import DailyTaskCard from "./DailyTaskCard";

const dummyDailyTasks = [
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
    employee: "Zahid Hussain",
    department: "HR",
    points: 865,
    colorClass: "bg-green-600",
    tasks: [
      { title: "Conduct onboarding", completed: false },
      { title: "Schedule interviews", completed: false },
      { title: "Review applications", completed: false },
    ],
  },
  {
    employee: "Ayasha Karim",
    department: "Accounts",
    points: 910,
    colorClass: "bg-orange-500",
    tasks: [
      { title: "Reconcile accounts", completed: true },
      { title: "Prepare invoices", completed: false },
      { title: "Update ledger", completed: false },
    ],
  },
  {
    employee: "Hasan Chowdhury",
    department: "Operations",
    points: 1040,
    colorClass: "bg-purple-600",
    tasks: [
      { title: "Monitor production", completed: true },
      { title: "Coordinate shipments", completed: true },
      { title: "Check inventory", completed: true },
    ],
  },
];

export default function DailyTasksGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {dummyDailyTasks.map((data, i) => (
        <DailyTaskCard key={i} {...data} />
      ))}
    </div>
  );
}