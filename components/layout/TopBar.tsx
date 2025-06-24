"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import  Button  from "@/components/ui/button";

export default function TopBar() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-background sticky top-0 z-50">
      <div className="text-xl font-semibold text-primary">
        🌟 HR Dashboard
      </div>

      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle Dark Mode"
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </Button>
    </header>
  );
}