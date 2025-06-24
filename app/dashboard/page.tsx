"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import  Button  from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import DepartmentChart from "@/components/ui/Chart";
import TaskAssignForm from "@/components/ui/TaskAssignForm";
import TaskTable from "@/components/ui/TaskTable";
import DepartmentSuggestions from "@/components/ui/DepartmentSuggestions";
import DailyTaskCard from "@/components/ui/DailyTaskCard";

export default function DashboardPage() {
  return (
    <main className="bg-background text-foreground min-h-screen px-6 py-10 space-y-10">
      {/* Tailwind Working Notice */}
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

      {/* Charts & Suggestions */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-2xl shadow">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Department Health</h2>
            <DepartmentChart />
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow">
          <CardContent className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">AI Suggestions</h2>
              <Button variant="outline">Generate New Suggestions</Button>
            </div>
            <DepartmentSuggestions />
          </CardContent>
        </Card>
      </section>

      {/* Assign Task + Notes */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-2xl shadow">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Assign Task</h2>
            <TaskAssignForm />
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
            <h2 className="text-2xl font-semibold mb-4">Task Table</h2>
            <TaskTable />
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
      </section>
    </main>
  );
}