'use client';

import { Provider } from 'react-redux';

import { TabProvider } from './lib/contexts/providers/Tab';

import store from './lib/store';

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <TabProvider>{children}</TabProvider>
    </Provider>
  );
};
