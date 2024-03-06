'use client';

import { ReactNode, useState } from 'react';

import { Tab, TabContext } from '../tab';

export const TabProvider = ({ children }: { children: ReactNode }) => {
  const [{ tab, setTab }, set] = useState<Tab>({
    tab: 'left',
    setTab: val => set(p => ({ ...p, tab: val })),
  });

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
};
