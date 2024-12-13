import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="flex gap-2">
      <a href="">
        <FaGithub className="text-3xl text-white" />
      </a>
      <a href="">
        <CiLinkedin className="text-3xl text-white" />
      </a>
    </div>
  );
}
