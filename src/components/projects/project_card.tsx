export const ProjectCard = (p: {
  title: string
  description: string
  tech?: string
  link?: string
}) => {
  return (

<article key={p.title} className="card group">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--brand-light)] transition-colors">
                  {p.title}
                </h3>
                <span className="text-2xl">🚀</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                {p.description}
              </p>
              {p.tech && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {p.tech.split(', ').map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-[var(--bg-tertiary)] text-[var(--text-muted)] text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {p.link && (
                <a 
                  href={p.link} 
                  className="inline-flex items-center gap-2 text-sm text-[var(--brand-light)] hover:text-[var(--brand)] font-semibold transition-colors"
                >
                  View Project
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              )}
            </article>
  )
}