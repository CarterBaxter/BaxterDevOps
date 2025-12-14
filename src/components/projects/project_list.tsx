import { projects } from '../../constants/projects'
import { ProjectCard } from './project_card'

export function ProjectList() {
  return projects.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
            <ProjectCard {...p} key={p.title} />
        ))}
    </div>
    ) : (
    <p className="text-center text-[var(--text-muted)]">No projects available at the moment.</p>
    )
}
