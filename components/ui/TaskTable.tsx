"use client";

import React, { useState, useMemo } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Button from "@/components/ui/button";

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
    <Tabs defaultValue="tasks" className="mt-6">
      <TabsList className="mb-4">
        <TabsTrigger value="tasks">Task Table</TabsTrigger>
        <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
        <TabsTrigger value="ai">AI Suggestions</TabsTrigger>
      </TabsList>

      <TabsContent value="tasks">
        <div className="space-y-4">
          <div>
            <Label htmlFor="filter">Filter by Employee</Label>
            <Input
              id="filter"
              placeholder="e.g. Mehtab"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border text-sm bg-white shadow rounded">
              <thead className="bg-accent text-accent-foreground">
                <tr>
                  <th className="px-4 py-2 border-b text-left">Employee</th>
                  <th className="px-4 py-2 border-b text-left">Department</th>
                  <th className="px-4 py-2 border-b text-left">Task</th>
                  <th className="px-4 py-2 border-b text-left">Deadline</th>
                  <th className="px-4 py-2 border-b text-center">Completed</th>
                  <th className="px-4 py-2 border-b text-center">Points</th>
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
                    <tr key={task.id}>
                      <td className="px-4 py-2 border-b">{task.employee}</td>
                      <td className="px-4 py-2 border-b">{task.department}</td>
                      <td className="px-4 py-2 border-b">{task.task}</td>
                      <td className="px-4 py-2 border-b">{task.deadline}</td>
                      <td className="px-4 py-2 border-b text-center">
                        <Checkbox
                          checked={task.completed}
                          onCheckedChange={() => toggleCompletion(task.id)}
                        />
                      </td>
                      <td className="px-4 py-2 border-b text-center">{task.points}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="leaderboard">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Top Performers</h3>
          <ul className="list-decimal ml-6 text-foreground">
            {leaderboard.map((t, i) => (
              <li key={i}>
                {t.employee} — {t.points} pts
              </li>
            ))}
          </ul>
        </div>
      </TabsContent>

      <TabsContent value="ai">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">AI Suggestions</h3>
          <Button variant="outline" onClick={generateSuggestions}>
            Generate New Suggestions
          </Button>
          <ul className="list-disc ml-6 text-foreground">
            {suggestions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      </TabsContent>
    </Tabs>
  );
}
