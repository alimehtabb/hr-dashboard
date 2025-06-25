"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar";

const leaderboard = [
  {
    name: "Sarah Ahmed",
    department: "Sales",
    points: 950,
    avatarUrl: "/avatars/sarah.png",
    rank: 1,
  },
  {
    name: "Zaid Khan",
    department: "Marketing",
    points: 870,
    avatarUrl: "/avatars/zaid.png",
    rank: 2,
  },
  {
    name: "Anika Rahman",
    department: "HR",
    points: 820,
    avatarUrl: "/avatars/anika.png",
    rank: 3,
  },
];

const medalEmoji = ["🥇", "🥈", "🥉"];

export default function Leaderboard() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">🏆 Leaderboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leaderboard.map((user, index) => (
          <Card key={index} className="rounded-2xl shadow border border-muted">
            <CardContent className="flex items-center gap-4 p-4">
              <Avatar className="h-14 w-14 border">
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="text-lg font-semibold text-foreground">{user.name}</div>
                <div className="text-sm text-muted-foreground">{user.department}</div>
              </div>

              <div className="text-right">
                <div className="text-lg font-bold text-primary">{user.points} pts</div>
                <div className="text-2xl">{medalEmoji[index]}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
