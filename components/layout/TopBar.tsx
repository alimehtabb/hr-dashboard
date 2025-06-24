// components/layout/TopBar.tsx

export default function TopBar() {
  return (
    <header className="h-16 w-full bg-background border-b border-border flex items-center justify-end px-6">
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">Hi, HR</span>
        <div className="w-8 h-8 rounded-full bg-muted text-xs flex items-center justify-center font-bold">
          HR
        </div>
      </div>
    </header>
  );
}
