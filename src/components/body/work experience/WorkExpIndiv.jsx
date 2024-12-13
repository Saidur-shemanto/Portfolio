export default function WorkExpIndiv({ timePeriod, position }) {
  return (
    <div className="flex">
      <p className="w-1/5">{timePeriod}</p>
      <div className="w-4/5">
        <p>{position}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem neque
          aliquid quas unde velit. Amet placeat asperiores quo consectetur
          expedita.
        </p>
      </div>
    </div>
  );
}
