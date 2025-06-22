import * as React from "react";

interface TabsProps {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
}

export function Tabs({ defaultValue, className = "", children }: TabsProps) {
  const [active, setActive] = React.useState(defaultValue);

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        // cast to any so TS lets us inject our own props
        return React.cloneElement(child as React.ReactElement<any>, {
          activeValue: active,
          setValue: setActive,
        });
      })}
    </div>
  );
}

export function TabsList({ children, className = "" }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`flex space-x-2 border-b ${className}`}>{children}</div>;
}

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  activeValue?: string;
  setValue?: (v: string) => void;
}

export function TabsTrigger({
  value,
  activeValue,
  setValue,
  children,
  className = "",
  ...props
}: TabsTriggerProps) {
  const isActive = value === activeValue;
  return (
    <button
      className={`px-4 py-2 text-sm font-medium border-b-2 ${
        isActive ? "border-primary text-primary" : "border-transparent text-muted-foreground"
      } ${className}`}
      onClick={() => setValue?.(value)}
      {...props}
    >
      {children}
    </button>
  );
}

interface TabsContentProps {
  value: string;
  activeValue?: string;
  children: React.ReactNode;
  className?: string;
}

export function TabsContent({
  value,
  activeValue,
  children,
  className = "",
}: TabsContentProps) {
  if (value !== activeValue) return null;
  return <div className={className}>{children}</div>;
}
