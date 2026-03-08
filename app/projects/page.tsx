import data from "../../../data/projects.json"

export default function ProjectPage({ params }: any) {

  const project = data.find((p: any) => p.slug === params.slug)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <p>Category: {project.category}</p>
      <a href={project.url}>Visit website</a>
    </div>
  )
}
