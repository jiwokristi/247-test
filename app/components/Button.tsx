interface ButtonProps extends React.ComponentProps<'button'> {}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="gradient__blue tracking-0.25 text-20 shadow-glow/30 hover:shadow-glow/40 active:shadow-glow/40 rounded-xl px-32 py-16 font-semibold shadow-xl transition-all duration-300 ease-in"
      {...props}
    >
      {children}
    </button>
  );
};
