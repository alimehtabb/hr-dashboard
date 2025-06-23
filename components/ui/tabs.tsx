"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  HTMLAttributes
} from "react";

interface Context { active: string; setActive: (val:string)=>void }
const Ctx = createContext<Context|null>(null);

export function Tabs({ defaultValue, children, className="" }: {
  defaultValue: string; children: ReactNode; className?:string
}) {
  const [active, setActive] = useState(defaultValue);
  return (
    <Ctx.Provider value={{ active,setActive }}>
      <div className={className}>{children}</div>
    </Ctx.Provider>
  );
}

export function TabsList(props: HTMLAttributes<HTMLDivElement>) {
  return <div className={`flex gap-2 ${props.className||""}`}>{props.children}</div>;
}

export function TabsTrigger({ value, children, className="", ...rest }: {
  value: string; children: ReactNode; className?:string
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const ctx = useContext(Ctx)!;
  const isActive = ctx.active===value;
  return (
    <button
      {...rest}
      onClick={()=>ctx.setActive(value)}
      className={`${className} px-4 py-2 rounded text-sm font-medium ${
        isActive
          ? "bg-primary text-primary-foreground"
          : "bg-muted text-muted-foreground"
      }`.trim()}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, className="" }: {
  value: string; children: ReactNode; className?:string
}) {
  const ctx = useContext(Ctx)!;
  return ctx.active===value ? <div className={className}>{children}</div> : null;
}
