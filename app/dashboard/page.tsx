"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import DepartmentChart from "@/components/ui/Chart";
import TaskAssignForm from "@/components/ui/TaskAssignForm";
import TaskTable from "@/components/ui/TaskTable";
import DepartmentSuggestions from "@/components/ui/DepartmentSuggestions";

export default function DashboardPage() {
  return (
    <main className="bg-background text-foreground min-h-screen px-6 py-10 space-y-10">
      {/* Test Box */}
      <div className="bg-red-500 text-white p-4 rounded-xl text-center">
        ✅ Tailwind v4 is working!
      </div>

      {/* Header */}
      <header className="space-y-2 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          AI-Powered HR Dashboard
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Monitor performance, assign tasks, and boost productivity with AI-based insights.
        </p>
      </header>

      {/* Top Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Department Health</h2>
            <DepartmentChart />
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">AI Suggestions</h2>
              <Button variant="outline">Generate New Suggestions</Button>
            </div>
            <DepartmentSuggestions />
          </CardContent>
        </Card>
      </section>

      {/* Task Assign & Notes */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Assign Tasks</h2>
            <TaskAssignForm />
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Internal Notes</h2>
            <Textarea placeholder="Write your notes here..." rows={6} className="resize-none" />
            <Button className="w-full mt-2">Save Notes</Button>
          </CardContent>
        </Card>
      </section>

      {/* Task Table */}
      <section>
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Task Table</h2>
            <TaskTable />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
