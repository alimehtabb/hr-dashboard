"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const suggestions = [
  "Assign follow-up HR tasks to new interns",
  "Send reminder for performance self-assessment",
  "Optimize attendance reports for July",
  "Shortlist candidates for upcoming interviews",
  "Auto-email policy updates to all departments",
];

export default function DepartmentSuggestions() {
  return (
    <div className="space-y-3">
      {suggestions.map((text, i) => (
        <Card key={i} className="bg-muted/70 p-3 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-primary mt-1" />
          <CardContent className="p-0 text-sm text-muted-foreground">
            {text}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
