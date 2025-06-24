"use client";

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
const bgClasses = ["bg-yellow-100", "bg-gray-100", "bg-orange-100"];

export default function Leaderboard() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">🏆 Leaderboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leaderboard.map((user, index) => (
          <Card
            key={user.name}
            className={`rounded-2xl shadow transition hover:shadow-lg ${bgClasses[index] || "bg-muted"}`}
          >
            <CardContent className="flex items-center gap-4 p-4">
              <div className="relative">
                <Avatar className="w-14 h-14 border border-muted-foreground">
                  <AvatarImage src={user.avatarUrl} alt={user.name} />
                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="absolute -top-2 -right-2 text-2xl">{medals[index]}</span>
              </div>

              <div className="space-y-1">
                <h3 className="font-semibold text-lg leading-tight">{user.name}</h3>
                <p className="text-sm text-muted-foreground">{user.department}</p>
                <p className="text-sm font-medium text-primary">{user.points} pts</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
