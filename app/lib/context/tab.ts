import { createContext } from 'react';

export type Tab = {
  tab: 'left' | 'right';
  setTab: (val: 'left' | 'right') => void;
};

export const TabContext = createContext<Tab>({
  tab: 'left',
  setTab: val => {},
});
