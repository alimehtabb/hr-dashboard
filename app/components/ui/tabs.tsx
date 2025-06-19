'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type TabsContextType = {
  value: string;
  setValue: (val: string) => void;
};

const TabsContext = createContext<TabsContextType | null>(null);

// Main Tabs wrapper
export function Tabs({ defaultValue, children, className }: {
  defaultValue: string;
  children: ReactNode;
  className?: string;
}) {
  const [value, setValue] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

// Tab buttons container
export function TabsList({ children, className }: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

// Individual tab button
export function TabsTrigger({ value: tabValue, children, className }: {
  value: string;
  children: ReactNode;
  className?: string;
}) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsTrigger must be used inside Tabs');

  const isActive = context.value === tabValue;

  return (
    <button
      onClick={() => context.setValue(tabValue)}
      className={`px-4 py-2 rounded ${isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'} ${className}`}
    >
      {children}
    </button>
  );
}

// Tab content panel
export function TabsContent({ value: tabValue, children }: {
  value: string;
  children: ReactNode;
}) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsContent must be used inside Tabs');
  return context.value === tabValue ? <div>{children}</div> : null;
}
