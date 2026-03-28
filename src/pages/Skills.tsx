import { Link } from 'react-router-dom';

const skillGroups = [
  {
    title: 'Languages',
    description: 'Core languages I use to build and iterate quickly.',
    items: ['TypeScript', 'JavaScript', 'Java', 'HTML', 'CSS'],
  },
  {
    title: 'Frontend',
    description: 'Libraries and frameworks I use for modern interfaces.',
    items: ['React', 'Next.js', 'Material UI', 'Tailwind CSS', 'ShadCN'],
  },
  {
    title: 'Tools',
    description: 'Workflow tools for collaboration and delivery.',
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'AWS'],
  },
];

const focusAreas = [
  'Component architecture and reusable UI systems',
  'Responsive design across desktop and mobile',
  'Readable, maintainable TypeScript code',
  'Iterative improvement based on product goals',
];

function Skills() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 md:px-8">
      <section className="rounded-2xl border border-white/20 bg-black/30 p-6 md:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-white/70">Skills</p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl">
          My Technical Toolkit
        </h1>
        <p className="mt-4 max-w-3xl text-base text-white/85 md:text-lg">
          A practical overview of the technologies, frameworks, and tools I use to build polished
          web experiences and collaborative software projects.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="rounded-full border border-[#4a92f1] px-5 py-2 text-sm font-medium text-[#4a92f1] transition hover:bg-[#4a92f1]/10"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Contact
          </Link>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-xl border border-white/15 bg-black/25 p-5">
            <h2 className="text-lg font-semibold text-white">{group.title}</h2>
            <p className="mt-2 text-sm text-white/75">{group.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/85"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-2xl border border-white/15 bg-black/25 p-6">
        <h2 className="text-2xl font-semibold text-white">Current Focus Areas</h2>
        <ul className="mt-4 grid gap-3 text-sm text-white/85 md:grid-cols-2">
          {focusAreas.map((item) => (
            <li key={item} className="rounded-lg border border-white/10 bg-black/20 p-4">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Skills;
