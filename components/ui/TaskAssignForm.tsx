"use client";

import React, { useState } from "react";
import { Card, CardContent } from "./card";
import { Input } from "./input";
import { Label } from "./label";
import { Select, SelectItem } from "./select";
import Button from "./button";
import { Textarea } from "./textarea";

const departments = ["Sales", "Accounts", "IT", "HR", "Admin", "Legal", "Operations"];

export default function TaskAssignForm({ onSubmit }: { onSubmit: (task: any) => void }) {
  const [data, setData] = useState({
    employee: "",
    department: "",
    task: "",
    due: "",
    priority: "Normal",
  });

  function onChange<K extends keyof typeof data>(key: K, value: string) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!data.employee || !data.department || !data.task) {
      alert("Fill required fields");
      return;
    }
    onSubmit(data);
    setData({ employee: "", department: "", task: "", due: "", priority: "Normal" });
  }

  return (
    <Card className="w-full">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">📝 Assign Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-1">
            <Label htmlFor="employee">Employee Name</Label>
            <Input
              id="employee"
              value={data.employee}
              onChange={(e) => onChange("employee", e.target.value)}
              required
              placeholder="e.g. Mehtab Ali"
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="department">Department</Label>
            <Select
              id="department"
              value={data.department}
              onChange={(e) => onChange("department", e.target.value)}
            >
              <SelectItem value="">Select Department</SelectItem>
              {departments.map((dept) => (
                <SelectItem key={dept} value={dept}>
                  {dept}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="grid gap-1">
            <Label htmlFor="task">Task Description</Label>
            <Textarea
              id="task"
              value={data.task}
              onChange={(e) => onChange("task", e.target.value)}
              required
              placeholder="e.g. Submit payroll report"
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="due">Due Date</Label>
            <Input
              id="due"
              type="date"
              value={data.due}
              onChange={(e) => onChange("due", e.target.value)}
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="priority">Priority</Label>
            <Select
              id="priority"
              value={data.priority}
              onChange={(e) => onChange("priority", e.target.value)}
            >
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Normal">Normal</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
            </Select>
          </div>
          <Button type="submit" className="w-full mt-2">
            Assign Task
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
