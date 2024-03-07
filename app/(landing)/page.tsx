'use client';

import { useContext } from 'react';

import { useAppDispatch, useAppSelector } from '../lib/hooks/rtk';

import { TabContext } from '../lib/contexts/tab';

import LeftPanel from './Left';
import RightPanel from './Right';
import WholePanel from './Whole';

export default function Page() {
  const tabCtx = useContext(TabContext);

  const { raw, words } = useAppSelector(({ glossary }) => glossary);
  const { quantity, show } = useAppSelector(({ box }) => box);
  const dispatch = useAppDispatch();

  return (
    <div id="Landing__Page" className="py-96">
      {tabCtx.tab === 'left' ? (
        <div className="flex">
          <LeftPanel raw={raw} dispatch={dispatch} />
          <RightPanel words={words} dispatch={dispatch} />
        </div>
      ) : (
        <WholePanel quantity={quantity} show={show} dispatch={dispatch} />
      )}
    </div>
  );
}
