"use client";

import { Card, CardContent } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import DepartmentChart from "@/components/ui/Chart";
import TaskAssignForm from "@/components/ui/TaskAssignForm";
import TaskTable from "@/components/ui/TaskTable";
import DepartmentSuggestions from "@/components/ui/DepartmentSuggestions";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-muted p-8 space-y-10">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight text-primary">
          AI-Powered HR Dashboard
        </h1>
        <p className="text-muted-foreground">
          Monitor team performance, assign tasks, and boost productivity.
        </p>
      </header>

      {/* KPI and Suggestions Section */}
      <section className="grid gap-6 md:grid-cols-2">
        <Card className="rounded-2xl shadow">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Department Health</h2>
            <DepartmentChart />
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Department Suggestions</h2>
            <DepartmentSuggestions />
          </CardContent>
        </Card>
      </section>

      {/* Task Assignment and Notes Section */}
      <section className="grid gap-6 md:grid-cols-2">
        <Card className="rounded-2xl shadow">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Assign Tasks</h2>
            <TaskAssignForm />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button className="w-full">Assign Tasks</Button>
              <Button variant="outline" className="w-full">
                View Leaderboard
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Internal Notes</h2>
            <Textarea
              placeholder="Write your notes here..."
              rows={6}
              className="resize-none"
            />
            <Button className="w-full">Save Notes</Button>
          </CardContent>
        </Card>
      </section>

      {/* Task Table Section */}
      <section>
        <Card className="rounded-2xl shadow">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Task Table</h2>
            <TaskTable />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
