"use client";

import React from "react";
import { cn } from "@/lib/utils"; // Make sure this points to your actual path

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "default",
  size = "md",
  className,
  ...props
}) => {
  const baseClasses =
    "rounded font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses =
    variant === "outline"
      ? "border border-blue-500 text-blue-500 bg-transparent hover:bg-blue-50"
      : "bg-blue-600 text-white hover:bg-blue-700";

  const sizeClasses =
    size === "sm"
      ? "px-3 py-1.5 text-sm"
      : size === "lg"
      ? "px-5 py-2.5 text-lg"
      : "px-4 py-2 text-base"; // default md

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(baseClasses, variantClasses, sizeClasses, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
