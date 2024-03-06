export const GoldenUnderline = ({ classes }: { classes: string }) => {
  return (
    <span
      className={`golden absolute inset-x-0 -bottom-1 h-1 transition-all ease-in ${classes}`}
    />
  );
};
