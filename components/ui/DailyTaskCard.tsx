"use client";

import { Progress } from "./progress";
import { Checkbox } from "./checkbox";
import { Card, CardContent } from "./card";

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
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-5 space-y-3">
        <div className={`text-white font-semibold px-3 py-1 rounded-md ${colorClass} w-fit`}>
          {department}
        </div>
        <div>
          <h3 className="text-xl font-bold">{employee}</h3>
          <p className="text-muted-foreground">{points} pts</p>
        </div>
        <Progress value={progress} />
        <div className="space-y-1">
          {tasks.map((task, i) => (
            <div key={i} className="flex items-center gap-2">
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
