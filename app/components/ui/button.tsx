"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "default" | "outline";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "default",
  className,
}) => {
  const baseClass = "px-4 py-2 rounded font-semibold transition-colors duration-200";
  const variantClass =
    variant === "outline"
      ? "border border-blue-500 text-blue-500 bg-transparent hover:bg-blue-50"
      : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClass} ${variantClass} ${className ?? ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
