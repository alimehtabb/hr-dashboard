"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectItem } from "@/components/ui/select";

const departments = ["Sales", "Accounts", "IT", "HR", "Admin", "Legal", "Operations"];

export default function TaskAssignForm() {
  const [formData, setFormData] = useState({
    employee: "",
    department: "",
    task: "",
    due: "",
    priority: "Normal",
  });

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation example
    if (!formData.employee || !formData.department || !formData.task) {
      alert("Please fill in employee, department and task fields.");
      return;
    }

    console.log("Assigned Task:", formData);
    alert("Task Assigned! (Mock)");

    // Reset form
    setFormData({
      employee: "",
      department: "",
      task: "",
      due: "",
      priority: "Normal",
    });

    // TODO: connect to backend/store
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">Assign Task</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="employee">Employee Name</Label>
            <Input
              id="employee"
              placeholder="e.g. Mehtab Ali"
              value={formData.employee}
              onChange={(e) => handleChange("employee", e.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="department">Department</Label>
            <Select
              id="department"
              value={formData.department}
              onChange={(e) => handleChange("department", e.target.value)}
              required
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <SelectItem key={dept} value={dept}>
                  {dept}
                </SelectItem>
              ))}
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="task">Task Description</Label>
            <Textarea
              id="task"
              placeholder="e.g. Submit payroll report"
              value={formData.task}
              onChange={(e) => handleChange("task", e.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="due">Due Date</Label>
            <Input
              id="due"
              type="date"
              value={formData.due}
              onChange={(e) => handleChange("due", e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="priority">Priority</Label>
            <Select
              id="priority"
              value={formData.priority}
              onChange={(e) => handleChange("priority", e.target.value)}
            >
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Normal">Normal</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
            </Select>
          </div>

          <Button className="mt-4 w-full" onClick={handleSubmit}>
  Assign Task
</Button>
        </form>
      </CardContent>
    </Card>
  );
}
