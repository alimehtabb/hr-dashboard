"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import  Button  from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar";

export default function TopBar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-muted shadow-sm bg-background/70 backdrop-blur-lg sticky top-0 z-30">
      <h1 className="text-xl font-semibold text-primary hidden md:block">HR Dashboard</h1>

      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          <span className="sr-only">Toggle Theme</span>
        </Button>
        

        <Avatar>
          <AvatarImage src="/avatars/mehtab.png" alt="Mehtab Ali" />
          <AvatarFallback>MA</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
