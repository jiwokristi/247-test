import { increment, decrement, onChange } from '../lib/store/boxSlice';
import { AppDispatch } from '../lib/store';

import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { ChevronUp, ChevronDown } from '../components/icons';

export default function Whole({
  quantity,
  dispatch,
}: {
  quantity: number;
  dispatch: AppDispatch;
}) {
  return (
    <div className="px-24">
      <form className="flex items-center justify-center gap-24">
        <div className="relative flex-1">
          <Input
            type="number"
            max={10000}
            value={quantity ? quantity.toString().replace(/^0/g, '') : ''}
            onChange={e => {
              if (e.target.validity.valid) {
                dispatch(onChange(e.target.value));
              }
            }}
          />
          <button
            type="button"
            className="absolute right-24 top-4 rounded-sm transition-all ease-in hover:bg-initial-state active:bg-initial-state"
            onClick={() => dispatch(increment())}
          >
            <ChevronUp />
          </button>
          <button
            type="button"
            className="absolute bottom-4 right-24 rounded-sm transition-all ease-in hover:bg-initial-state active:bg-initial-state"
            onClick={() => dispatch(decrement())}
          >
            <ChevronDown />
          </button>
        </div>
        <Button>Submit</Button>
      </form>
    </div>
  );
}
