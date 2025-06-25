"use client";

import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar";
import  Button  from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function TopBar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-background border-b border-muted px-6 py-4 shadow-sm">
      <div className="text-sm text-muted-foreground">Management Assistant</div>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </Button>
        <Avatar className="w-8 h-8">
          <AvatarImage src="/avatars/mehtab.png" alt="Mehtab Ali" />
          <AvatarFallback>MA</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}