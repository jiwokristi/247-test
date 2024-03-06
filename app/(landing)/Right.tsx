export default function Right() {
  return (
    <div className="w-1/2 px-24">
      <table className="w-full -translate-y-16">
        <thead>
          <tr>
            <th className="p-16 text-left align-top text-[1.8rem] tracking-0.25">
              Unique Word
            </th>
            <th className="p-16 text-left align-top text-[1.8rem] tracking-0.25">
              Frequency
            </th>
            <th className="p-16 text-left align-top text-[1.8rem] tracking-0.25">
              &nbsp;
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-initial-state-medium">
            <td className="p-16 text-[1.8rem] tracking-0.25">this</td>
            <td className="p-16 text-[1.8rem] tracking-0.25">1</td>
            <td className="p-16 text-[1.8rem] tracking-0.25">Delete</td>
          </tr>
          <tr className="odd:bg-initial-state-medium">
            <td className="p-16 text-[1.8rem] tracking-0.25">is</td>
            <td className="p-16 text-[1.8rem] tracking-0.25">1</td>
            <td className="p-16 text-[1.8rem] tracking-0.25">Delete</td>
          </tr>
          <tr className="odd:bg-initial-state-medium">
            <td className="p-16 text-[1.8rem] tracking-0.25">a</td>
            <td className="p-16 text-[1.8rem] tracking-0.25">1</td>
            <td className="p-16 text-[1.8rem] tracking-0.25">Delete</td>
          </tr>
          <tr className="odd:bg-initial-state-medium">
            <td className="p-16 text-[1.8rem] tracking-0.25">new</td>
            <td className="p-16 text-[1.8rem] tracking-0.25">1</td>
            <td className="p-16 text-[1.8rem] tracking-0.25">Delete</td>
          </tr>
          <tr className="odd:bg-initial-state-medium">
            <td className="p-16 text-[1.8rem] tracking-0.25">word</td>
            <td className="p-16 text-[1.8rem] tracking-0.25">1</td>
            <td className="p-16 text-[1.8rem] tracking-0.25">Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
