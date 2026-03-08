import data from "../../data/projects.json"

export default function Projects() {
  return (
    <div>
      <h1>All Projects</h1>

      {data.map((p) => (
        <div key={p.slug}>
          <h2>
            <a href={"/projects/" + p.slug}>{p.name}</a>
          </h2>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  )
}
