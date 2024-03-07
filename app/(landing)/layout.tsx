'use client';

import { useContext } from 'react';
import clsx from 'clsx';

import { GoldenUnderline } from '../components/GoldenUnderline';

import { TabContext } from '../lib/contexts/tab';

export default function Layout({ children }: { children: React.ReactNode }) {
  const tabCtx = useContext(TabContext);

  return (
    <section id="Landing__Layout" className="tablets:translate-y-[24.34rem]">
      <div className="flex">
        <button
          className="relative flex-1 border-b border-white px-32 py-16 text-24 tracking-0.25 focus:shadow-none"
          onClick={() => tabCtx.setTab('left')}
        >
          <span
            className={clsx('transition-all ease-in', {
              'opacity-100': tabCtx.tab === 'left',
              'opacity-40': tabCtx.tab !== 'left',
            })}
          >
            Left
          </span>
          <GoldenUnderline
            classes={tabCtx.tab === 'left' ? 'opacity-100' : 'opacity-0'}
          />
        </button>
        <button
          className="relative flex-1 border-b border-white px-32 py-16 text-24 tracking-0.25 focus:shadow-none"
          onClick={() => tabCtx.setTab('right')}
        >
          <span
            className={clsx('transition-all ease-in', {
              'opacity-100': tabCtx.tab === 'right',
              'opacity-40': tabCtx.tab !== 'right',
            })}
          >
            Right
          </span>
          <GoldenUnderline
            classes={tabCtx.tab === 'right' ? 'opacity-100' : 'opacity-0'}
          />
        </button>
      </div>
      {children}
    </section>
  );
}
