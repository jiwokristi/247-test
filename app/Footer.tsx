export const Footer = () => {
  const date = new Date('2024-03-06');

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const formattedDate = new Intl.DateTimeFormat('en-ID', options).format(date);

  return (
    <footer
      id="Footer"
      className="heading__primary pb-80 pt-96 text-center tablets:translate-y-full"
    >
      {formattedDate}
    </footer>
  );
};
