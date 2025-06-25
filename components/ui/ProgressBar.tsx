"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  percentage: number;
  colorClass: string;
}

export default function ProgressBar({ percentage, colorClass }: ProgressBarProps) {
  return (
    <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
      <div
        className={cn("h-full transition-all duration-500 ease-out", colorClass)}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
