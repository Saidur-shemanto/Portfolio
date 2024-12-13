import { RiShareForwardBoxLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

export default function ProjectIndiv({
  id,
  image,
  category,
  name,
  description,
  links,
}) {
  return (
    <div className="flex relative h-[300px]">
      <img
        src={image}
        alt=""
        className={`${id % 2 == 0 ? " absolute right-0" : " "} w-3/5 h-full`}
      />

      <div
        className={`${
          id % 2 == 0 ? "text-left " : "text-right absolute right-0 h-full"
        }  w-3/5 flex flex-col justify-center text-white z-10 gap-1`}
      >
        <p className="">{category}</p>
        <p className="=">{name}</p>
        <p className="bg-[#112240] p-5">{description}</p>
        <p
          className={`${
            id % 2 == 0 ? "" : "ml-auto"
          } font-SfMono text-sm text-mildWhite w-2/3 `}
        >
          React Express Firebase Mongodb Framer Motion
        </p>
        <div
          className={`flex ${
            id % 2 == 0 ? "justify-start" : "justify-end"
          } gap-2`}
        >
          <a href={links[0]}>
            <RiShareForwardBoxLine className="text-3xl" />
          </a>

          <a href={links[1]}>
            <FaGithub className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
