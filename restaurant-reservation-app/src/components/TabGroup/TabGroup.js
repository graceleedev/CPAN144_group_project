'use client';
import React, { createContext, useContext, useState } from 'react';

export const TabContext = createContext();

export function TabGroup({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <TabContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div>{children}</div>
    </TabContext.Provider>
  );
}
