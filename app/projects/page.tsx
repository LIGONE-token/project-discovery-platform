import data from "../../data/projects.json";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>

      {data.map((project) => (
        <div key={project.slug}>
          <h2>
            <a href={"/projects/" + project.slug}>{project.name}</a>
          </h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
