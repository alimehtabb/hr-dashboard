"use client";

import React, { useState } from "react";
import  Input  from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import  Label  from "@/components/ui/label";
import Button from "@/components/ui/button";

interface TaskAssignFormProps {
  onSubmit: (task: {
    employee: string;
    department: string;
    task: string;
    deadline: string;
  }) => void;
}

export default function TaskAssignForm({ onSubmit }: TaskAssignFormProps) {
  const [form, setForm] = useState({
    employee: "",
    department: "",
    task: "",
    deadline: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.employee || !form.task || !form.deadline) return;
    onSubmit(form);
    setForm({ employee: "", department: "", task: "", deadline: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="employee">Employee Name</Label>
          <Input
            id="employee"
            name="employee"
            value={form.employee}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="department">Department</Label>
          <Select
            id="department"
            name="department"
            value={form.department}
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            <option value="HR">HR</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="IT">IT</option>
            <option value="Logistics">Logistics</option>
            <option value="Accounts">Accounts</option>
          </Select>
        </div>
      </div>
      <div>
        <Label htmlFor="task">Task</Label>
        <Input
          id="task"
          name="task"
          value={form.task}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="deadline">Deadline</Label>
        <Input
          id="deadline"
          name="deadline"
          type="date"
          value={form.deadline}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Assign Task
      </Button>
    </form>
  );
}
