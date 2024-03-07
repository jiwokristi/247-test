import { deleteWord } from '../lib/store/glossarySlice';
import { AppDispatch } from '../lib/store';

import { Column, Table } from '../components/Table';

const columns: Column<{ word: string; frequency: number }>[] = [
  {
    header: 'Word',
    key: 'word',
  },
  {
    header: 'Frequency',
    key: 'frequency',
  },
];

export default function Right({
  words,
  dispatch,
}: {
  words: { word: string; frequency: number }[];
  dispatch: AppDispatch;
}) {
  return (
    <div className="w-1/2 px-24">
      <Table
        data={words}
        columns={columns}
        classes="-translate-y-16"
        action={row => dispatch(deleteWord(row.word))}
      />
    </div>
  );
}
