'use client';

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import  Button  from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const initialSuggestions = {
  Sales: ["Focus on lead conversion rate this week", "Add 2 new clients"],
  Accounts: ["Audit last week's cash logs", "Update supplier payments"],
  IT: ["Backup servers tonight", "Update website sliders"],
  Admin: ["Verify attendance entries", "Print payslips for field staff"],
};

const departments = Object.keys(initialSuggestions) as (keyof typeof initialSuggestions)[];

export default function DepartmentSuggestions() {
  const [suggestions, setSuggestions] = useState(initialSuggestions);

  const regenerate = () => {
    // Fake random logic
    const newSuggestions = { ...suggestions };
    for (const dept of departments) {
      newSuggestions[dept] = [
        `New AI Suggestion for ${dept} - ${Math.floor(Math.random() * 1000)}`,
        `Improve ${dept} metrics today`,
      ];
    }
    setSuggestions(newSuggestions);
  };

  return (
    <Card className="mt-6">
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-4">AI-Based Suggestions by Department</h2>

        <Tabs defaultValue="Sales" className="w-full">
          <TabsList className="mb-4 flex gap-2 overflow-x-auto">
            {departments.map((dept) => (
              <TabsTrigger
                key={dept}
                value={dept}
                className="capitalize whitespace-nowrap"
              >
                {dept}
              </TabsTrigger>
            ))}
          </TabsList>

          {departments.map((dept) => (
            <TabsContent key={dept} value={dept}>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                {suggestions[dept].map((sug, index) => (
                  <li key={index}>{sug}</li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-4 text-right">
          <Button onClick={regenerate} variant="outline">
            <Sparkles className="w-4 h-4 mr-2" />
            Generate New Suggestions
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
