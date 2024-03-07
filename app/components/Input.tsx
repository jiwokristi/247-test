'use client';

import { ChevronUp, ChevronDown } from '../components/icons';

interface InputProps extends React.ComponentProps<'input'> {
  increment?: () => void;
  decrement?: () => void;
}

export const Input = ({ increment, decrement, ...props }: InputProps) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Quantity (between 1 and 10000)"
        className="w-full rounded-xl bg-primary px-24 py-16 text-[1.8rem] tracking-0.25 placeholder-white/40"
        {...props}
      />
      {props.type === 'number' && (
        <>
          <button
            type="button"
            className="absolute right-24 top-4 rounded-sm transition-all ease-in hover:bg-initial-state active:bg-initial-state tablets:hidden"
            onClick={increment}
          >
            <ChevronUp />
          </button>
          <button
            type="button"
            className="absolute bottom-4 right-24 rounded-sm transition-all ease-in hover:bg-initial-state active:bg-initial-state tablets:hidden"
            onClick={decrement}
          >
            <ChevronDown />
          </button>
        </>
      )}
    </div>
  );
};
