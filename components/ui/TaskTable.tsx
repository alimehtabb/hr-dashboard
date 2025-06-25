"use client";

import React, { useState, useMemo } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Button from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface Task {
  id: number;
  employee: string;
  department: string;
  task: string;
  deadline: string;
  completed: boolean;
  points: number;
}

export default function TaskTable({ tasks }: { tasks: Task[] }) {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [localTasks, setLocalTasks] = useState<Task[]>(tasks);

  const toggleCompletion = (id: number) =>
    setLocalTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

  const generateSuggestions = () => {
    const ideas = [
      "Implement micro-rewards for daily logins",
      "Introduce department-based goal charts",
      "Use color-coded badges for task completion",
      "Reward idea submissions monthly",
      "Gamify attendance tracking with streaks",
    ];
    setSuggestions(ideas.sort(() => 0.5 - Math.random()).slice(0, 3));
  };

  const filtered = useMemo(
    () => localTasks.filter((t) => t.employee.toLowerCase().includes(search.toLowerCase())),
    [search, localTasks]
  );

  const leaderboard = useMemo(
    () => [...localTasks].sort((a, b) => b.points - a.points),
    [localTasks]
  );

  return (
    <Card className="rounded-2xl shadow-sm border">
      <CardContent className="p-6">
        <Tabs defaultValue="tasks" className="w-full space-y-6">
          <TabsList className="bg-muted p-1 rounded-md">
            <TabsTrigger value="tasks">📋 Tasks</TabsTrigger>
            <TabsTrigger value="leaderboard">🏆 Leaderboard</TabsTrigger>
            <TabsTrigger value="ai">🧠 AI Suggestions</TabsTrigger>
          </TabsList>

          <TabsContent value="tasks">
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="filter">Filter by Employee</Label>
                <Input
                  id="filter"
                  placeholder="e.g. Mehtab"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="overflow-x-auto rounded-lg border">
                <table className="min-w-full text-sm">
                  <thead className="bg-accent text-accent-foreground">
                    <tr>
                      <th className="px-4 py-2 text-left">Employee</th>
                      <th className="px-4 py-2 text-left">Department</th>
                      <th className="px-4 py-2 text-left">Task</th>
                      <th className="px-4 py-2 text-left">Deadline</th>
                      <th className="px-4 py-2 text-center">Completed</th>
                      <th className="px-4 py-2 text-center">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="p-4 text-center text-muted-foreground">
                          No matching tasks found.
                        </td>
                      </tr>
                    ) : (
                      filtered.map((task) => (
                        <tr key={task.id} className="border-t">
                          <td className="px-4 py-2">{task.employee}</td>
                          <td className="px-4 py-2">{task.department}</td>
                          <td className="px-4 py-2">{task.task}</td>
                          <td className="px-4 py-2">{task.deadline}</td>
                          <td className="px-4 py-2 text-center">
                            <Checkbox
                              checked={task.completed}
                              onCheckedChange={() => toggleCompletion(task.id)}
                            />
                          </td>
                          <td className="px-4 py-2 text-center">{task.points}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="leaderboard">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Top Performers</h3>
              <ul className="list-decimal ml-6 text-muted-foreground space-y-1">
                {leaderboard.map((t, i) => (
                  <li key={i}>
                    <span className="text-foreground font-medium">{t.employee}</span> — {t.points} pts
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="ai">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">AI Suggestions</h3>
              <Button variant="outline" onClick={generateSuggestions}>
                🔄 Generate New Suggestions
              </Button>
              <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                {suggestions.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}