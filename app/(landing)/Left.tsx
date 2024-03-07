import { Button } from '../components/Button';
import { Textarea } from '../components/Textarea';

import { onChange, submitGlossary } from '../lib/store/glossarySlice';
import { AppDispatch } from '../lib/store';

export default function Left({
  raw,
  dispatch,
}: {
  raw: string;
  dispatch: AppDispatch;
}) {
  return (
    <div className="w-1/2 px-24">
      <form
        className="flex flex-col gap-24"
        onSubmit={e => {
          e.preventDefault();
          dispatch(submitGlossary(raw));
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
