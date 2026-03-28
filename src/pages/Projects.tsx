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
      'Focused on usability for day-to-day invertebrate care taking.',
    ],
    stack: ['React', 'TypeScript', 'UI Architecture'],
    url: 'https://github.com/mantis00/hivemind',
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
    url: 'https://nayethecoder.github.io/CatholicRosaryApp/',
  },
  {
    name: 'Raytracer',
    type: 'Java Graphics Project',
    period: 'COMS 336 Course',
    summary:
      'Educational raytracing engine built from first principles to deeply understand graphics fundamentals and rendering concepts.',
    highlights: [
      'Implemented ray/sphere and ray/triangle intersections with barycentric coordinates.',
      'Built bounded volume hierarchies (BVH) with axis-aligned bounding boxes for performance.',
      'Added advanced rendering features: anti-aliasing, motion blur, and depth of field.',
      'Implemented multiple material types: specular, diffuse, dielectric, and emissive.',
      'Integrated texture loading and mapping for spheres and triangles.',
      'Incorporated Perlin noise for procedural effects and volumetric rendering.',
    ],
    stack: ['Java', 'Graphics', 'Ray Tracing', 'Rendering'],
    url: 'https://github.com/nazarit19/raytracer',
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
    url: 'https://slifeconsulting.com/',
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
    url: '',
  },
  {
    name: 'Absorb Ames',
    type: 'Web App',
    period: 'JS Web App',
    summary: 'Website designed as a directory for places around Ames to discover and explore.',
    highlights: [
      'Created a browsable directory experience for local spots around Ames.',
      'Organized place listings so users can quickly discover new areas to visit.',
      'Focused on clear navigation and layout to make exploration easy.',
    ],
    stack: ['JS', 'JSX', 'Node.js'],
    url: '',
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
          {projects.map((project) => {
            const isClickable = project.url.trim().length > 0;

            const content = (
              <>
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
              </>
            );

            if (isClickable) {
              return (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-white/15 bg-black/25 p-5 transition hover:border-white/30 hover:bg-black/35"
                >
                  {content}
                </a>
              );
            }

            return (
              <article
                key={project.name}
                className="rounded-xl border border-white/15 bg-black/25 p-5"
              >
                {content}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Projects;
