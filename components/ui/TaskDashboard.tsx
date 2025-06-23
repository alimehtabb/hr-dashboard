"use client";

import React, { useState, useMemo } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";
import { Input } from "./input";
import { Label } from "./label";
import { Checkbox } from "./checkbox";
import Button from "./button";

interface Task { id:number; employee:string; department:string; task:string; deadline:string; completed:boolean; points:number; }
const dummyTasks: Task[] = [
  { id:1, employee:"Mehtab Ali", department:"HR/Admin", task:"Prepare July HR report", deadline:"2025-07-05", completed:false, points:15 },
  { id:2, employee:"Kamrul Islam", department:"Accounts", task:"Reconcile bank payments", deadline:"2025-07-03", completed:true, points:20 },
  { id:3, employee:"Nayem Hosen", department:"IT", task:"Design Eid flyer", deadline:"2025-06-30", completed:false, points:10 },
];

export default function TaskDashboard() {
  const [search,setSearch] = useState("");
  const [tasks,setTasks] = useState<Task[]>(dummyTasks);
  const [suggestions,setSuggestions] = useState<string[]>([]);

  const toggleCompletion=(id:number)=>
    setTasks(prev=>prev.map(t=>t.id===id?{...t,completed:!t.completed}:t));

  const generateSuggestions=()=>{
    const ideas=[
      "Implement micro-rewards for daily logins",
      "Introduce dept-based goal charts",
      "Use color-coded badges for task completion",
      "Reward idea submissions monthly",
      "Gamify attendance tracking with streaks"
    ];
    setSuggestions(ideas.sort(()=>0.5-Math.random()).slice(0,3));
  };

  const filtered = useMemo(
    ()=>tasks.filter(t=>t.employee.toLowerCase().includes(search.toLowerCase())),
    [search,tasks]
  );
  const leaderboard = useMemo(()=>[...tasks].sort((a,b)=>b.points-a.points),[tasks]);

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
            <Input id="filter" placeholder="e.g. Mehtab"
              value={search}
              onChange={e=>setSearch(e.target.value)} />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border text-sm bg-white shadow rounded">
              <thead className="bg-accent text-accent-foreground">
                <tr>
                  <th className="px-4 py-2 border-border border-b text-left">Employee</th>
                  <th className="px-4 py-2 border-border border-b text-left">Dept</th>
                  <th className="px-4 py-2 border-border border-b text-left">Task</th>
                  <th className="px-4 py-2 border-border border-b text-left">Deadline</th>
                  <th className="px-4 py-2 border-border border-b text-center">Done</th>
                  <th className="px-4 py-2 border-border border-b text-center">Pts</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length===0 ? (
                  <tr>
                    <td colSpan={6} className="p-4 text-center text-muted-foreground">
                      No matching tasks.
                    </td>
                  </tr>
                ) : filtered.map(t=>(
                  <tr key={t.id}>
                    <td className="px-4 py-2 border-border border-b">{t.employee}</td>
                    <td className="px-4 py-2 border-border border-b">{t.department}</td>
                    <td className="px-4 py-2 border-border border-b">{t.task}</td>
                    <td className="px-4 py-2 border-border border-b">{t.deadline}</td>
                    <td className="px-4 py-2 border-border border-b text-cent er">
                      <Checkbox checked={t.completed} onCheckedChange={()=>toggleCompletion(t.id)} />
                    </td>
                    <td className="px-4 py-2 border-border border-b text-center">{t.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="leaderboard">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Top Performers</h3>
          <ul className="list-decimal ml-6 text-foreground">
            {leaderboard.map((t,i)=><li key={i}>{t.employee} — {t.points} pts</li>)}
          </ul>
        </div>
      </TabsContent>

      <TabsContent value="ai">
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">AI Suggestions</h3>
          <Button variant="outline" onClick={generateSuggestions}>
            Generate New Suggestions
          </Button>
          <ul className="list-disc ml-6 text-foreground">
            {suggestions.map((s,i)=><li key={i}>{s}</li>)}
          </ul>
        </div>
      </TabsContent>
    </Tabs>
  );
}
