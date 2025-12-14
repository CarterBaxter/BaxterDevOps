import { ProjectList } from "../components/projects/project_list"

const Header = () => (
  <header className="max-w-4xl mx-auto px-6 py-20 text-center">
        <img src="/logo.png" alt="Baxter Dev Ops Logo" className="w-24 h-24 mx-auto mb-6" />
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[var(--brand-light)] to-[var(--accent)] bg-clip-text text-transparent">
          Baxter Dev Ops
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-[var(--text-secondary)] mb-4">
          Software Engineer & DevOps Specialist
        </p>
        <p className="text-lg text-[var(--text-muted)] mb-8 max-w-2xl mx-auto">
          Hi, I'm Carter Baxter. I build reliable, maintainable software and tooling that scales.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="#projects" className="btn-brand">View Projects</a>
          <a 
            href="mailto:CarterB@Baxter-Dev-Ops.com" 
            className="inline-block px-6 py-3 rounded-lg border-2 border-[var(--brand)] text-[var(--brand-light)] font-semibold hover:bg-[var(--brand)] hover:text-white transition-all duration-200"
          >
            Contact Me
          </a>
        </div>
      </header>
)

const ProjectsSection = () => (
  <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">Selected Projects</h2>
          <p className="text-[var(--text-muted)]">Some of the work I've done</p>
        </div>
        <ProjectList />
      </section>
)

const Footer = () => (
  <footer className="text-center py-12 px-6 border-t border-[var(--border)] mt-20">
        <p className="text-sm text-[var(--text-muted)] mb-2">
          Built with React, Typescript, Vite & Tailwind CSS
        </p>
        <p className="text-xs text-[var(--text-muted)]">
          © 2025 Baxter Dev Ops. All rights reserved.
        </p>
      </footer>
)


export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <Header />
      <ProjectsSection />
      <Footer />
    </main>
  )
}
