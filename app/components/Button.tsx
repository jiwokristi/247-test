'use client';

interface ButtonProps extends React.ComponentProps<'button'> {
  classes?: string;
}

export const Button = ({ classes = '', children, ...props }: ButtonProps) => {
  return (
    <button
      className={`gradient__blue rounded-xl px-32 py-16 text-20 font-semibold tracking-0.25 shadow-xl shadow-glow/30 transition-all duration-300 ease-in hover:shadow-glow/40 active:shadow-glow/40 ${classes}`}
      {...props}
    >
      {children}
    </button>
  );
};
