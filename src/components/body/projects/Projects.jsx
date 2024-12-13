import ProjectIndiv from "./ProjectIndiv";
import anc from "../../../assets/media/projects/AnC.jpeg";

export default function Projects() {
  const projectArray = [
    {
      id: 1,
      image: anc,
      category: "Fullstack",
      name: "Paintify",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt quod ut rem provident eos cupiditate corporis aliquid error laboriosam!",
      links: ["google.com", "facebook.com"],
    },
    {
      id: 2,
      image: anc,
      category: "Fullstack",
      name: "Paintify",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt quod ut rem provident eos cupiditate corporis aliquid error laboriosam!",
      links: ["google.com", "facebook.com"],
    },
  ];
  return (
    <div>
      <h1 className="sticky top-0 text-2xl">Projects</h1>
      <div className="flex flex-col gap-8">
        {projectArray.map((project) => (
          <ProjectIndiv
            key={project.id}
            id={project.id}
            image={project.image}
            category={project.category}
            name={project.name}
            description={project.description}
            links={project.links}
          />
        ))}
      </div>
    </div>
  );
}
