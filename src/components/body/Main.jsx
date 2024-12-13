import Button from "../reusable/Button";
import About from "./about/About";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import WorkExperience from "./work experience/WorkExperience";

export default function Main() {
  return (
    <div className="ml-[50%] flex flex-col justify-evenly gap-5 text-mildWhite">
      <About />
      <WorkExperience />
      <Projects />
      <Skills />
    </div>
  );
}
