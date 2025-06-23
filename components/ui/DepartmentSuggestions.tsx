"use client";

import React, { useState } from "react";
import Button from "./button";

const departments = ["Sales","Accounts","IT","Admin"];
const allSuggestions: Record<string,string[]> = {
  Sales: ["Focus on lead conversion rate this week","Add 2 new clients"],
  Accounts: ["Automate invoice reminders","Review quarterly budget"],
  IT: ["Upgrade server security patches","Migrate to new cloud region"],
  Admin: ["Optimize office supply ordering","Schedule team-building event"]
};

export default function DepartmentSuggestions() {
  const [activeDept, setActiveDept] = useState("Sales");
  const [list, setList] = useState(allSuggestions["Sales"]);

  function changeDept(dept:string){
    setActiveDept(dept);
    setList(allSuggestions[dept]);
  }
  function regenerate(){
    setList(prev => [...prev].sort(()=>0.5 - Math.random()));
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {departments.map(d => (
          <button
            key={d}
            onClick={() => changeDept(d)}
            className={`px-3 py-1 rounded ${
              d===activeDept
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {d}
          </button>
        ))}
      </div>
      <ul className="list-disc ml-5 text-foreground">
        {list.map((s,i)=><li key={i}>{s}</li>)}
      </ul>
      <Button variant="outline" onClick={regenerate}>
        Generate New Suggestions
      </Button>
    </div>
  );
}
