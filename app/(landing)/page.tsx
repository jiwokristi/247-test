import Left from './Left';
import Right from './Right';

export default function Page() {
  return (
    <div id="Landing__Page" className="py-96">
      <div className="flex">
        <Left />
        <Right />
      </div>
    </div>
  );
}
