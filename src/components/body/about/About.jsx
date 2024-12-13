import Button from "../../reusable/Button";

export default function About() {
  return (
    <div>
      <h1 className="text-2xl sticky top-0">About</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt omnis
        dolorem quam est, natus at molestias corrupti ex dolorum itaque?
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
        dolore.
      </p>
      <Button text={"Download My Resume"} height={50} width={200} />
    </div>
  );
}
