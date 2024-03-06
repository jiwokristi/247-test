import { forwardRef, Ref } from 'react';

interface TextareaProps extends React.ComponentProps<'textarea'> {
  ref?: Ref<HTMLTextAreaElement>;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={5}
        placeholder="Enter text here..."
        className="w-full resize-none rounded-xl bg-primary p-24 text-[1.8rem] tracking-0.25 placeholder-white/40"
        {...props}
      />
    );
  },
);

Textarea.displayName = 'Textarea';
