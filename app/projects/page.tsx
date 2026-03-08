import data from "../../../data/projects.json"

export default function ProjectPage({ params }: { params: { slug: string } }) {

  const project = data.find(p => p.slug === params.slug)

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
