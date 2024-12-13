import React from "react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";

export default function Skills() {
  const frontend = [
    { name: "Tailwind", icon: <RiTailwindCssFill /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
  ];
  return (
    <div>
      <div>
        <h1>Language</h1>
      </div>
      <div>
        <h1>Frontend</h1>
        <div className="flex flex-wrap">
          {frontend.map((f) => {
            return (
              <div className="flex">
                <p>{f.icon}</p>
                <p>{f.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1>Backend</h1>
        <div className="flex">
          <p>Logo</p>
          <p>name</p>
        </div>
      </div>
      <div>
        <h1>Database</h1>
        <div className="flex">
          <p>Logo</p>
          <p>name</p>
        </div>
      </div>
    </div>
  );
}
