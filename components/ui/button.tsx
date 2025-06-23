import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export default function Button({
  className = "",
  variant = "default",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring";
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  };

  return (
    <button
      className={`${base} ${variants[variant]} px-4 py-2 ${className}`.trim()}
      {...props}
    />
  );
}
