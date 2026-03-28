import { Link } from 'react-router-dom';

const featuredProjects = [
  {
    name: 'Hivemind',
    type: 'Senior Design Project',
    summary: 'Team collaboration platform focused on planning and communication.',
    stack: ['React', 'TypeScript', 'Team Collaboration'],
  },
  {
    name: 'Talk Stalk',
    type: 'Android Application',
    summary: 'Mobile project exploring social and communication-focused interactions.',
    stack: ['Android', 'Mobile UI', 'App Development'],
  },
  {
    name: 'A Catholic Resource',
    type: 'React Web App',
    summary: 'Web experience for faith discovery and learning',
    stack: ['React', 'Frontend', 'UX'],
  },
];

const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Java', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks',
    items: ['React', 'Next.js', 'Material UI', 'Tailwind CSS'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Figma'],
  },
];

function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 md:px-8">
      <section className="rounded-2xl border border-white/20 bg-black/30 p-6 md:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-white/70">Quick Overview</p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl">
          Oscar Nazarit
        </h1>
        <p className="mt-4 max-w-3xl text-base text-white/85 md:text-lg">
          Software Engineering student at Iowa State University with a focus on web development,
          practical product building, and learning emerging technologies.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="rounded-full border border-[#4a92f1] px-5 py-2 text-sm font-medium text-[#4a92f1] transition hover:bg-[#4a92f1]/10"
          >
            View Projects
          </Link>
          <Link
            to="/about"
            className="rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            About Me
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
        <article className="rounded-xl border border-white/15 bg-black/25 p-5">
          <h2 className="text-lg font-semibold text-white">About</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>Software Engineering student at Iowa State University</li>
            <li>Interested in technology history and hands-on building</li>
            <li>Focused on turning ideas into polished applications</li>
          </ul>
          <Link
            to="/about"
            className="mt-4 inline-block text-sm font-medium text-[#4a92f1] hover:underline"
          >
            Read more
          </Link>
        </article>

        <article className="rounded-xl border border-white/15 bg-black/25 p-5">
          <h2 className="text-lg font-semibold text-white">Projects</h2>
          <p className="mt-3 text-sm text-white/80">Built across web and mobile experiences.</p>
          <ul className="mt-3 space-y-1 text-sm text-white/80">
            <li>Hivemind</li>
            <li>Talk Stalk</li>
            <li>A Catholid Resource</li>
            <li>Slife Consulting</li>
          </ul>
          <Link
            to="/projects"
            className="mt-4 inline-block text-sm font-medium text-[#4a92f1] hover:underline"
          >
            See all projects
          </Link>
        </article>

        <article className="rounded-xl border border-white/15 bg-black/25 p-5">
          <h2 className="text-lg font-semibold text-white">Contact</h2>
          <p className="mt-3 text-sm text-white/80">
            Open to collaboration, work, and project conversations.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-block text-sm font-medium text-[#4a92f1] hover:underline"
          >
            Connect with me
          </Link>
        </article>
      </section>

      <section className="mt-10">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="text-2xl font-semibold text-white">Featured Projects</h2>
          <Link to="/projects" className="text-sm font-medium text-[#4a92f1] hover:underline">
            Full list
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.name}
              className="rounded-xl border border-white/15 bg-black/25 p-5"
            >
              <p className="text-xs uppercase tracking-wide text-white/60">{project.type}</p>
              <h3 className="mt-1 text-xl font-semibold text-white">{project.name}</h3>
              <p className="mt-3 text-sm text-white/80">{project.summary}</p>
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

      <section className="mt-10 rounded-2xl border border-white/15 bg-black/25 p-6">
        <h2 className="text-2xl font-semibold text-white">Skills At A Glance</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-xl border border-white/10 bg-black/20 p-4"
            >
              <h3 className="text-base font-semibold text-white">{group.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
