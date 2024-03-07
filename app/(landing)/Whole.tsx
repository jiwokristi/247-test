import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactLoading from 'react-loading';

import { increment, decrement, onChange, onShow } from '../lib/store/boxSlice';
import { AppDispatch } from '../lib/store';

import { Button } from '../components/Button';
import { Input } from '../components/Input';

export default function Whole({
  quantity,
  show,
  dispatch,
}: {
  quantity: number;
  show: boolean;
  dispatch: AppDispatch;
}) {
  const [count, setCount] = useState(3);
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalElement(document?.querySelector<HTMLElement>('#portal'));
  }, []);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        dispatch(onShow());
      }, 3000);
    }
  }, [dispatch, show]);

  useEffect(() => {
    if (count >= 1 && count <= 3 && show) {
      setTimeout(() => {
        setCount(p => p - 1);
      }, 1000);
    } else {
      setCount(3);
    }
  }, [count, show]);

  return (
    <div className="px-24">
      <form
        className="flex items-center justify-center gap-24"
        onSubmit={e => {
          e.preventDefault();
          dispatch(onShow());
        }}
      >
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
        <Button>Show</Button>
      </form>
      {show &&
        portalElement !== null &&
        ReactDOM.createPortal(
          <div className="fixed inset-x-0 inset-y-0 z-[9999] flex flex-wrap gap-2 bg-initial-state p-32">
            <>
              {Array.from({ length: quantity }, (_, i) => {
                return (
                  <div
                    key={i}
                    className="h-8 w-8 odd:bg-initial-state-light even:bg-initial-state-medium"
                  ></div>
                );
              })}
              <ReactLoading
                color="#FFF"
                type="spin"
                height={32}
                width={32}
                className="absolute bottom-24 right-24"
              />
              <span className="absolute bottom-[2.815rem] right-[3.6rem]">
                {count}
              </span>
            </>
          </div>,
          portalElement,
        )}
    </div>
  );
}
