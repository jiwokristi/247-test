interface TextareaProps extends React.ComponentProps<'textarea'> {}

export const Textarea = ({ ...props }: TextareaProps) => {
  return (
    <textarea
      rows={5}
      placeholder="Place text here..."
      className="bg-primary tracking-0.25 w-full resize-none rounded-xl p-24 text-[1.8rem] placeholder-white/40"
      {...props}
    />
  );
};
