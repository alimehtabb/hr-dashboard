import * as React from "react";

export function Input({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full px-3 py-2 border border-input bg-background rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring ${className}`}
      {...props}
    />
  );
}
