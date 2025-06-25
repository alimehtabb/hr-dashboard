"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  BarChart,
  Users,
  ClipboardList,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Reports", href: "/reports", icon: BarChart },
  { name: "Teams", href: "/teams", icon: Users },
  { name: "Tasks", href: "/tasks", icon: ClipboardList },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 min-h-screen bg-muted border-r border-muted p-6 space-y-6">
      <div className="text-2xl font-bold text-primary">🏢 HR System</div>

      <nav className="flex flex-col gap-2">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent text-muted-foreground"
              )}
            >
              <link.icon className="w-5 h-5" />
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
