// components/layout/Sidebar.tsx
"use client";

import React from "react";
import { Home, Building2, ClipboardList, Lightbulb } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Dashboard", icon: Home, href: "/dashboard" },
  { label: "Departments", icon: Building2, href: "/departments" },
  { label: "Daily Tasks", icon: ClipboardList, href: "/tasks" },
  { label: "Idea Box", icon: Lightbulb, href: "/ideas" },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-muted bg-card p-6 space-y-6 shadow-sm">
      <h1 className="text-xl font-bold text-primary">M A Tayab Limited</h1>
      <nav className="space-y-2">
        {navItems.map(({ label, icon: Icon, href }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition"
          >
            <Icon className="w-5 h-5" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
