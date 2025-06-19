"use client"

import { Card, CardContent } from "@/components/ui/card"
import Button from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import DepartmentChart from "@/components/ui/Chart"
import TaskAssignForm from "@/components/ui/TaskAssignForm"
import TaskTable from "@/components/ui/TaskTable"
import DepartmentSuggestions from "@/components/ui/DepartmentSuggestions"

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-muted p-6 space-y-6">
      <h1 className="text-3xl font-bold text-primary">AI-Powered HR Dashboard</h1>

      {/* Top Row: Chart + Suggestions */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Department Health</h2>
            <DepartmentChart />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">Department Suggestions</h2>
            <DepartmentSuggestions />
          </CardContent>
        </Card>
      </div>

      {/* Middle Row: Task Assignment + Notes */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-4 space-y-4">
            <h2 className="text-xl font-semibold">Assign Tasks</h2>
            <TaskAssignForm />
            <Button className="w-full">Assign Tasks</Button>
            <Button variant="outline" className="w-full">View Leaderboard</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Internal Notes</h2>
            <Textarea placeholder="Add your notes here..." rows={6} className="resize-none" />
            <Button className="mt-4 w-full">Save Notes</Button>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row: Task Table */}
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-4">Task Table</h2>
          <TaskTable />
        </CardContent>
      </Card>
    </main>
  )
}
