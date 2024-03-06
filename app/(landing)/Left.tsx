import { Button } from '../components/Button';
import { Textarea } from '../components/Textarea';

export default function Left() {
  return (
    <div className="flex w-1/2 flex-col gap-24 px-24">
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <Textarea />
        <Button>Submit</Button>
      </form>
    </div>
  );
}
