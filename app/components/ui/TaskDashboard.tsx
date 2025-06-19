"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import  Button  from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";


interface Task {
  id: number;
  employee: string;
  department: string;
  task: string;
  deadline: string;
  completed: boolean;
  points: number;
}

const dummyTasks: Task[] = [
  { id: 1, employee: "Mehtab Ali", department: "HR/Admin", task: "Prepare July HR report", deadline: "2025-07-05", completed: false, points: 15 },
  { id: 2, employee: "Kamrul Islam", department: "Accounts", task: "Reconcile bank payments", deadline: "2025-07-03", completed: true, points: 20 },
  { id: 3, employee: "Nayem Hosen", department: "IT", task: "Design Eid flyer", deadline: "2025-06-30", completed: false, points: 10 },
];

const TaskTable = () => {
  const [search, setSearch] = useState("");
  const [tasks, setTasks] = useState<Task[]>(dummyTasks);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const toggleCompletion = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const generateSuggestions = () => {
    const ideas = [
      "Implement micro-rewards for daily logins",
      "Introduce department-based goal charts",
      "Use color-coded badges for task completion",
      "Reward idea submissions monthly",
      "Gamify attendance tracking with streaks"
    ];
    const shuffled = [...ideas].sort(() => 0.5 - Math.random());
    setSuggestions(shuffled.slice(0, 3));
  };

  const filteredTasks = tasks.filter((task) =>
    task.employee.toLowerCase().includes(search.toLowerCase())
  );

  const leaderboard = [...tasks].sort((a, b) => b.points - a.points);

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
            <table className="min-w-full border text-sm text-gray-800 bg-white shadow rounded">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-4 py-2 border-b">Employee</th>
                  <th className="text-left px-4 py-2 border-b">Department</th>
                  <th className="text-left px-4 py-2 border-b">Task</th>
                  <th className="text-left px-4 py-2 border-b">Deadline</th>
                  <th className="text-center px-4 py-2 border-b">Completed</th>
                  <th className="text-center px-4 py-2 border-b">Points</th>
                </tr>
              </thead>
              <tbody>
                {filteredTasks.map((task) => (
                  <tr key={task.id}>
                    <td className="px-4 py-2 border-b">{task.employee}</td>
                    <td className="px-4 py-2 border-b">{task.department}</td>
                    <td className="px-4 py-2 border-b">{task.task}</td>
                    <td className="px-4 py-2 border-b">{task.deadline}</td>
                    <td className="text-center px-4 py-2 border-b">
                      <Checkbox
                        checked={task.completed}
                        onCheckedChange={() => toggleCompletion(task.id)}
                      />
                    </td>
                    <td className="text-center px-4 py-2 border-b">{task.points}</td>
                  </tr>
                ))}
                {filteredTasks.length === 0 && (
                  <tr>
                    <td colSpan={6} className="text-center text-gray-500 p-4">
                      No matching tasks found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="leaderboard">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Top Performers</h3>
          <ul className="list-decimal ml-6 text-gray-800">
            {leaderboard.map((task, index) => (
              <li key={index}>
                {task.employee} ({task.department}) — {task.points} pts
              </li>
            ))}
          </ul>
        </div>
      </TabsContent>

      <TabsContent value="ai">
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Department AI Suggestions</h3>
          <Button variant="outline" onClick={generateSuggestions}>Generate New Suggestions</Button>
          <ul className="list-disc ml-6 text-gray-800">
            {suggestions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TaskTable;