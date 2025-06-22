"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "destructive" | "ghost";
  size?: "sm" | "md" | "lg";
}

const variantStyles = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  outline: "border border-blue-500 text-blue-500 bg-transparent hover:bg-blue-50",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-2.5 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "default",
  size = "md",
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-xl font-medium transition-colors duration-200",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
