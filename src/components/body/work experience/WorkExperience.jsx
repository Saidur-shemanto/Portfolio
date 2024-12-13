import WorkExpIndiv from "./WorkExpIndiv";

export default function WorkExperience() {
  return (
    <div className="space-y-5">
      <p className="sticky top-0 text-2xl">Work Experience</p>
      <WorkExpIndiv
        timePeriod={"2024-present"}
        position={"Front-end developer intern, AI Byters"}
      />
    </div>
  );
}
