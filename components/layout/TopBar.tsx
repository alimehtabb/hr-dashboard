// components/layout/TopBar.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar";
import Button from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function TopBar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between bg-background border-b border-muted px-6 py-4 shadow-sm">
      <div className="text-sm text-muted-foreground">Management Assistant</div>
      <div className="flex items-center gap-4">
        {mounted && (
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
            aria-label="Toggle Theme"
          >
            {resolvedTheme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </Button>
        )}
        <Avatar className="w-8 h-8">
          <AvatarImage src="/avatars/mehtab.png" alt="Mehtab Ali" className="h-full w-full object-cover" />
          <AvatarFallback>MA</AvatarFallback>
        </Avatar>
      </div>
    </header>
);
}
