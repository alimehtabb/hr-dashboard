"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import  Button  from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Task {
  employee: string;
  department: string;
  task: string;
  deadline: string;
}

export default function TaskAssignForm({ onSubmit }: { onSubmit: (task: Task) => void }) {
  const [form, setForm] = useState<Task>({
    employee: "",
    department: "",
    task: "",
    deadline: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.employee && form.task && form.department && form.deadline) {
      onSubmit(form);
      setForm({ employee: "", department: "", task: "", deadline: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="employee">Employee</Label>
          <Input
            name="employee"
            id="employee"
            value={form.employee}
            onChange={handleChange}
            placeholder="Enter employee name"
            className="rounded-xl"
          />
        </div>
        <div>
          <Label htmlFor="department">Department</Label>
          <Input
            name="department"
            id="department"
            value={form.department}
            onChange={handleChange}
            placeholder="e.g. HR, IT"
            className="rounded-xl"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="task">Task</Label>
        <Textarea
          name="task"
          id="task"
          rows={3}
          value={form.task}
          onChange={handleChange}
          placeholder="Describe the task"
          className="rounded-xl resize-none"
        />
      </div>

      <div>
        <Label htmlFor="deadline">Deadline</Label>
        <Input
          name="deadline"
          id="deadline"
          type="date"
          value={form.deadline}
          onChange={handleChange}
          className="rounded-xl"
        />
      </div>

      <Button type="submit" className="w-full rounded-xl">
        Assign Task
      </Button>
    </form>
  );
}