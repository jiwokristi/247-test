'use client';

import { useAppDispatch, useAppSelector } from '../lib/hooks/rtk';

import { deleteWord } from '../lib/store/glossarySlice';

export default function Right() {
  const { words } = useAppSelector(state => state.glossary);
  const dispatch = useAppDispatch();

  return (
    <div className="w-1/2 px-24">
      <table className="w-full -translate-y-16">
        <thead>
          <tr>
            <th className="p-16 text-left align-top text-[1.8rem] tracking-0.25">
              Unique Word
            </th>
            <th className="p-16 text-left align-top text-[1.8rem] tracking-0.25">
              Frequency
            </th>
            <th className="p-16 text-left align-top text-[1.8rem] tracking-0.25">
              &nbsp;
            </th>
          </tr>
        </thead>
        <tbody>
          {words.map(({ word, frequency }) => (
            <tr key={word} className="odd:bg-initial-state-medium">
              <td className="p-16 text-[1.8rem] tracking-0.25">{word}</td>
              <td className="p-16 text-[1.8rem] tracking-0.25">{frequency}</td>
              <td className="p-16 text-[1.8rem] tracking-0.25">
                <button onClick={() => dispatch(deleteWord(word))}>
                  <span>Delete</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
