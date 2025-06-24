"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ChartTabs from "@/components/ui/ChartTabs";
import TaskAssignForm from "@/components/ui/TaskAssignForm";
import TaskTable from "@/components/ui/TaskTable";
import DepartmentSuggestions from "@/components/ui/DepartmentSuggestions";
import DailyTaskCard from "@/components/ui/DailyTaskCard";
import TopPerformers from "@/components/dashboard/TopPerformers";
import DepartmentGrid from "@/components/dashboard/DepartmentGrid";
import Leaderboard from "@/components/dashboard/Leaderboard";

export default function DashboardPage() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      employee: "Mehtab Ali",
      department: "HR/Admin",
      task: "Prepare July HR report",
      deadline: "2025-07-05",
      completed: false,
      points: 15,
    },
    {
      id: 2,
      employee: "Kamrul Islam",
      department: "Accounts",
      task: "Reconcile bank payments",
      deadline: "2025-07-03",
      completed: true,
      points: 20,
    },
    {
      id: 3,
      employee: "Nayem Hosen",
      department: "IT",
      task: "Design Eid flyer",
      deadline: "2025-06-30",
      completed: false,
      points: 10,
    },
  ]);

  const handleAddTask = (task: any) => {
    const newEntry = {
      ...task,
      id: tasks.length + 1,
      completed: false,
      points: 10,
    };
    setTasks((prev) => [...prev, newEntry]);
  };

  return (
    <main className="bg-background text-foreground min-h-screen px-6 py-10 space-y-10">
      {/* Tailwind Status */}
      <div className="bg-green-100 text-green-800 text-sm px-4 py-2 rounded-xl text-center border border-green-300">
        ✅ Tailwind v4 is working!
      </div>

      {/* Header */}
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-primary">AI-Powered HR Dashboard</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Monitor performance, assign tasks, and boost productivity with AI-based insights.
        </p>
      </header>

      {/* Top Performers */}
      <TopPerformers />

      {/* Department Grid */}
      <DepartmentGrid />

      {/* Charts & Suggestions */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartTabs />
        <Card className="rounded-2xl shadow">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">🧠 AI Suggestions</h2>
            <DepartmentSuggestions />
          </CardContent>
        </Card>
      </section>

      {/* Assign Task & Notes */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-2xl shadow">
          <CardContent className="p-6 space-y-4">
            <TaskAssignForm onSubmit={handleAddTask} />
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Internal Notes</h2>
            <Textarea placeholder="Write your notes here..." rows={6} className="resize-none" />
            <Button className="w-full">Save Notes</Button>
          </CardContent>
        </Card>
      </section>

      {/* Task Table */}
      <section>
        <Card className="rounded-2xl shadow">
          <CardContent className="p-6">
            <TaskTable tasks={tasks} />
          </CardContent>
        </Card>
      </section>

      {/* Daily Task Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            { title: "Post 2 stories", completed: true },
            { title: "Coordinate ad run", completed: false },
          ]}
        />
        <DailyTaskCard
          employee="Anika Rahman"
          department="HR"
          points={820}
          colorClass="bg-orange-600"
          tasks={[
            { title: "Conduct onboarding", completed: true },
            { title: "Update attendance sheet", completed: false },
          ]}
        />
      </section>

      {/* Leaderboard */}
      <Leaderboard />
    </main>
  );
}
