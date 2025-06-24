// components/layout/Sidebar.tsx

import { Home, BarChart2, Users, Settings } from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Home },
  { label: "Performance", icon: BarChart2 },
  { label: "Employees", icon: Users },
  { label: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-card border-r border-border p-6 flex flex-col gap-6">
      <h1 className="text-xl font-bold text-primary">HR Dashboard</h1>
      <nav className="flex flex-col gap-4">
        {navItems.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg hover:bg-muted"
          >
            <Icon className="w-5 h-5 text-muted-foreground" />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
