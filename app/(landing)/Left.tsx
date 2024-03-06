'use client';

import { Button } from '../components/Button';
import { Textarea } from '../components/Textarea';

import { useAppDispatch, useAppSelector } from '../lib/hooks/rtk';

import { onChange, submitGlossary } from '../lib/store/glossarySlice';

import { calculateFrequency } from '../lib/helpers/format';

export default function Left() {
  const dispatch = useAppDispatch();
  const { raw } = useAppSelector(state => state.glossary);

  const submitHandler = () => {
    const payload = calculateFrequency(raw.split(' ')).sort((a, b) => {
      const wordA = a.word;
      const wordB = b.word;

      if (wordA < wordB) {
        return -1;
      }
      if (wordA > wordB) {
        return 1;
      }
      return 0;
    });
    dispatch(submitGlossary(payload));
  };

  return (
    <div className="w-1/2 px-24">
      <form
        className="flex flex-col gap-24"
        onSubmit={e => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <Textarea
          value={raw}
          onChange={e => dispatch(onChange(e.target.value))}
        />
        <Button>Submit</Button>
      </form>
    </div>
  );
}
