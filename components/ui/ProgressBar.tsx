"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  barClassName?: string;
}

export function ProgressBar({
  value,
  className,
  barClassName,
  ...props
}: ProgressBarProps) {
  return (
    <div
      className={cn("w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2", className)}
      {...props}
    >
      <div
        className={cn("h-full rounded-full transition-all", barClassName)}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}