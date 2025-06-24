"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface Task {
  title: string;
  completed: boolean;
}

interface DailyTaskCardProps {
  employee: string;
  department: string;
  tasks: Task[];
  points: number;
  colorClass: string;
}

export default function DailyTaskCard({
  employee,
  department,
  tasks,
  points,
  colorClass,
}: DailyTaskCardProps) {
  const completedCount = tasks.filter((t) => t.completed).length;
  const progress = Math.round((completedCount / tasks.length) * 100);

  return (
    <Card className="rounded-2xl shadow-md hover:shadow-lg transition-all bg-white dark:bg-zinc-950 border border-muted">
      <CardContent className="p-5 space-y-4">
        <div className={`text-white text-sm font-medium px-3 py-1 rounded-md ${colorClass} w-fit`}>
          {department}
        </div>

        <div className="space-y-0.5">
          <h3 className="text-xl font-semibold tracking-tight">{employee}</h3>
          <p className="text-muted-foreground text-sm">{points} pts</p>
        </div>

        <ProgressBar value={progress} className="bg-muted" barClassName="bg-primary" />

        <div className="space-y-2">
          {tasks.map((task, i) => (
            <div key={i} className="flex items-start gap-2">
              <Checkbox checked={task.completed} />
              <span className={task.completed ? "line-through text-muted-foreground" : ""}>
                {task.title}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
