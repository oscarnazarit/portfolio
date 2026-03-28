import { Link } from 'react-router-dom';

const projects = [
  {
    name: 'Hivemind',
    type: 'Senior Design Project',
    period: 'Team Project',
    summary:
      'Collaboration-focused application built to improve planning, communication, and workflow visibility.',
    highlights: [
      'Worked on core frontend experience and interface consistency.',
      'Contributed to structured feature planning with teammates.',
      'Focused on usability for day-to-day project coordination.',
    ],
    stack: ['React', 'TypeScript', 'UI Architecture'],
  },
  {
    name: 'Talk Stalk',
    type: 'Android Application',
    period: 'Mobile Build',
    summary:
      'Android app prototype centered on social discovery and communication-oriented interactions.',
    highlights: [
      'Built mobile-first screens and interaction flows.',
      'Practiced app structure and component organization.',
      'Explored patterns for smooth user navigation.',
    ],
    stack: ['Android', 'Mobile UX', 'App Development'],
  },
  {
    name: 'A Catholic Resource',
    type: 'React Web App',
    period: 'Web Project',
    summary:
      'Resource hub concept designed to make faith-centered content easier to access and explore.',
    highlights: [
      'Designed clear information hierarchy for readability.',
      'Built reusable sections for scalable content.',
      'Emphasized simplicity and focused user journeys.',
    ],
    stack: ['React', 'Frontend', 'Content Design'],
  },
  {
    name: 'Slife Consulting',
    type: 'Next.js Web App',
    period: 'Client-Oriented Build',
    summary:
      'Business web experience with emphasis on clean presentation, responsiveness, and clear messaging.',
    highlights: [
      'Implemented responsive layout patterns across breakpoints.',
      'Improved visual clarity through focused sectioning.',
      'Worked with modern web tooling for production-ready output.',
    ],
    stack: ['Next.js', 'TypeScript', 'Responsive UI'],
  },
];

function Projects() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 md:px-8">
      <section className="rounded-2xl border border-white/20 bg-black/30 p-6 md:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-white/70">Projects</p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl">
          Things I&apos;ve Built
        </h1>
        <p className="mt-4 max-w-3xl text-base text-white/85 md:text-lg">
          A snapshot of projects across web and mobile, with a focus on practical implementation,
          iterative learning, and user-centered experiences.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/about"
            className="rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            About Me
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-[#4a92f1] px-5 py-2 text-sm font-medium text-[#4a92f1] transition hover:bg-[#4a92f1]/10"
          >
            Contact
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-white">Project Details</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-xl border border-white/15 bg-black/25 p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs uppercase tracking-wide text-white/60">{project.type}</p>
                <p className="text-xs text-white/60">{project.period}</p>
              </div>

              <h3 className="mt-2 text-xl font-semibold text-white">{project.name}</h3>
              <p className="mt-3 text-sm text-white/85">{project.summary}</p>

              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-[#4a92f1]/40 bg-[#4a92f1]/10 p-6">
        <h2 className="text-xl font-semibold text-white">Want To See More?</h2>
        <p className="mt-2 text-sm text-white/85">
          I&apos;m always building and improving. Reach out if you&apos;d like to discuss project
          details or collaboration ideas.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-[#4a92f1] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#3d7dd3]"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Projects;
