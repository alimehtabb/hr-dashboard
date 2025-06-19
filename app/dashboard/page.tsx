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
    <main className="p-6 max-w-7xl mx-auto space-y-8">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1 md:col-span-2 flex flex-col">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Department Overview</h2>
            <DepartmentChart />
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Suggestions</h2>
            <DepartmentSuggestions />
          </CardContent>
        </Card>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 flex flex-col">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Assign Tasks</h2>
            <TaskAssignForm />
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Notes</h2>
            <Textarea placeholder="Add your notes here..." rows={6} className="resize-none" />
            <Button className="mt-4 w-full">Save Notes</Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Task Table</h2>
            <TaskTable />
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
