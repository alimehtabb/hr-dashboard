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
    <aside className="hidden md:flex h-screen w-64 flex-col border-r border-muted bg-card px-4 py-6 space-y-6 shadow-sm">
      <h1 className="text-xl font-bold text-primary px-2">M A Tayab Limited</h1>
      <nav className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition"
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}