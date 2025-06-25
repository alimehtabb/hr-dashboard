"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface Task {
  id: number;
  employee: string;
  department: string;
  task: string;
  deadline: string;
  completed: boolean;
  points: number;
}

interface TaskTableProps {
  tasks: Task[];
}

export default function TaskTable({ tasks }: TaskTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left border rounded-xl">
        <thead>
          <tr className="bg-muted text-muted-foreground">
            <th className="p-3 font-medium">Done</th>
            <th className="p-3 font-medium">Employee</th>
            <th className="p-3 font-medium">Department</th>
            <th className="p-3 font-medium">Task</th>
            <th className="p-3 font-medium">Deadline</th>
            <th className="p-3 font-medium">Points</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr
              key={task.id}
              className={cn(
                "border-t",
                task.completed ? "bg-green-50 dark:bg-green-900/10" : "bg-white dark:bg-background"
              )}
            >
              <td className="p-3">
                <Checkbox checked={task.completed} readOnly />
              </td>
              <td className="p-3">{task.employee}</td>
              <td className="p-3">{task.department}</td>
              <td className="p-3">{task.task}</td>
              <td className="p-3">{task.deadline}</td>
              <td className="p-3 font-semibold">{task.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
