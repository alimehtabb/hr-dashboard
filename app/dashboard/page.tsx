"use client";

import React, { useState } from "react";
import TopPerformers from "@/components/dashboard/TopPerformers";
import DepartmentGrid from "@/components/dashboard/DepartmentGrid";
import PerformanceOverview from "@/components/dashboard/PerformanceOverview";
import Leaderboard from "@/components/dashboard/Leaderboard";
import DepartmentSuggestions from "@/components/ui/DepartmentSuggestions";
import TaskAssignForm from "@/components/ui/TaskAssignForm";
import TaskTable from "@/components/ui/TaskTable";
import DailyTaskGrid from "@/components/ui/DailyTaskGrid";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/ui/button";

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
    <main className="min-h-screen bg-background text-foreground px-4 md:px-8 py-10 space-y-16">
      {/* Intro */}
      <div className="text-center space-y-2 fade-in fade-in-delay-100">
        <h1 className="text-4xl font-bold text-primary">AI-Powered HR Dashboard</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base">
          Monitor performance, assign tasks, and boost productivity with AI-based insights.
        </p>
      </div>

      {/* Top Performers */}
      <div className="fade-in fade-in-delay-200">
        <TopPerformers />
      </div>

      {/* Department Progress */}
      <div className="fade-in fade-in-delay-300">
        <DepartmentGrid />
      </div>

      {/* Performance Charts + AI Suggestions */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-muted/40 p-6 rounded-2xl shadow-sm fade-in fade-in-delay-400">
        <PerformanceOverview />
        <Card className="rounded-2xl shadow border border-muted">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-primary">🧠 AI Suggestions</h2>
            <DepartmentSuggestions />
          </CardContent>
        </Card>
      </section>

      {/* Task Assignment + Notes */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-in fade-in-delay-500">
        <Card className="rounded-2xl shadow border border-muted">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-primary">📝 Assign Task</h2>
            <TaskAssignForm onSubmit={handleAddTask} />
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow border border-muted">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-primary">📌 Internal Notes</h2>
            <Textarea placeholder="Write your notes here..." rows={6} className="resize-none" />
            <Button className="w-full">Save Notes</Button>
          </CardContent>
        </Card>
      </section>

      {/* Task Table */}
      <section className="fade-in fade-in-delay-600">
        <Card className="rounded-2xl shadow border border-muted">
          <CardContent className="p-6">
            <TaskTable tasks={tasks} />
          </CardContent>
        </Card>
      </section>

      {/* Daily Tasks Grid */}
      <div className="fade-in fade-in-delay-700">
        <DailyTaskGrid />
      </div>

      {/* Leaderboard */}
      <div className="fade-in fade-in-delay-800">
        <Leaderboard />
      </div>

      {/* Footer Divider */}
      <hr className="border-t border-muted my-6" />
    </main>
  );
}
