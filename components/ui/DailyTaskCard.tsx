"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar";
import clsx from "clsx";

type Task = {
  title: string;
  completed: boolean;
};

type DailyTaskCardProps = {
  employee: string;
  department: string;
  points: number;
  colorClass: string;
  tasks: Task[];
};

export default function DailyTaskCard({
  employee,
  department,
  points,
  colorClass,
  tasks,
}: DailyTaskCardProps) {
  const initials = employee
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Card className="rounded-2xl shadow border border-muted">
      <div className={clsx("h-2 rounded-t-2xl", colorClass)} />
      <CardContent className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={`/avatars/${employee.toLowerCase().replace(/\s+/g, "")}.png`} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold leading-tight">{employee}</p>
              <p className="text-sm text-muted-foreground">{department}</p>
            </div>
          </div>
          <div className="text-sm font-medium text-muted-foreground">{points} pts</div>
        </div>

        <div className="space-y-2">
          {tasks.map((task, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <Checkbox checked={task.completed} />
              <span className={clsx("text-sm", task.completed && "line-through text-muted-foreground")}>
                {task.title}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
