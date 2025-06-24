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
  },
  {
    name: "Zaid Khan",
    department: "Marketing",
    points: 870,
    avatarUrl: "/avatars/zaid.png",
  },
  {
    name: "Anika Rahman",
    department: "HR",
    points: 820,
    avatarUrl: "/avatars/anika.png",
  },
];

const medals = ["🥇", "🥈", "🥉"];

export default function Leaderboard() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">🏆 Leaderboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leaderboard.map((user, index) => (
          <Card
            key={user.name}
            className="flex items-center gap-4 p-4 border shadow-sm rounded-2xl"
          >
            <div className="text-3xl">{medals[index]}</div>

            <Avatar className="w-12 h-12">
              <AvatarImage src={user.avatarUrl} alt={user.name} />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-1">
              <p className="font-semibold text-base text-primary">
                {user.name}
              </p>
              <p className="text-muted text-sm">{user.department}</p>
            </div>

            <div className="text-right">
              <p className="text-xl font-bold text-primary">
                {user.points}
              </p>
              <p className="text-xs text-muted">Points</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
