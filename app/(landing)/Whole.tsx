import { increment, decrement, onChange } from '../lib/store/boxSlice';
import { AppDispatch } from '../lib/store';

import { Button } from '../components/Button';
import { Input } from '../components/Input';

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
        <Input
          type="number"
          max={10000}
          value={quantity ? quantity.toString().replace(/^0/g, '') : ''}
          onChange={e => {
            if (e.target.validity.valid) {
              dispatch(onChange(e.target.value));
            }
          }}
          increment={() => dispatch(increment())}
          decrement={() => dispatch(decrement())}
        />
        <Button>Submit</Button>
      </form>
    </div>
  );
}
