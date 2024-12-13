export default function Button({ text, height, width }) {
  return (
    <div className="relative" style={{ height: height, width: width }}>
      <div
        className="
      bg-[#0a192f] border-2 border-customCyan
        rounded-md 
        absolute
        transition ease-in-out delay-150 duration-300
        hover:-translate-y-1
        hover:-translate-x-1
        flex
        items-center
        justify-center
        cursor-pointer"
        style={{ height: height, width: width }}
      >
        {text}
      </div>
      <div
        className=" bg-customCyan rounded-md"
        style={{ height: height, width: width }}
      ></div>
    </div>
  );
}
