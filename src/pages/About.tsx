import { Link } from 'react-router-dom';

function About() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 md:px-8">
      <section className="rounded-2xl border border-white/20 bg-black/30 p-6 md:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-white/70">About Me</p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl">
          Building With Curiosity And Intention
        </h1>
        <p className="mt-4 max-w-3xl text-base text-white/85 md:text-lg">
          I&apos;m Oscar Nazarit, a Software Engineering student at Iowa State University who enjoys
          combining technical learning with practical product building.
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
            Contact Me
          </Link>
        </div>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-5">
        <article className="rounded-xl border border-white/15 bg-black/25 p-5 lg:col-span-2">
          <h2 className="text-lg font-semibold text-white">Profile Image</h2>
          <div className="mt-4 overflow-hidden rounded-xl border border-dashed border-white/30 bg-black/20">
            <img
              className="h-fit"
              src={`${import.meta.env.BASE_URL}profile_pic.jpeg`}
              alt="profile pic"
            />
          </div>
        </article>

        <article className="rounded-xl border border-white/15 bg-black/25 p-5 lg:col-span-3">
          <h2 className="text-lg font-semibold text-white">Quick Bio</h2>
          <p className="mt-3 text-sm leading-7 text-white/85">
            My interests sit at the intersection of software engineering, design-minded interfaces,
            and emerging technology. I enjoy learning how systems work, then applying that knowledge
            to build tools and experiences that are useful and polished.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-wide text-white/60">Location</p>
              <p className="mt-1 text-sm text-white/90">Ames, Iowa</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-wide text-white/60">Education</p>
              <p className="mt-1 text-sm text-white/90">Iowa State University</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-wide text-white/60">Current Focus</p>
              <p className="mt-1 text-sm text-white/90">Web development and software projects</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-wide text-white/60">Interests</p>
              <p className="mt-1 text-sm text-white/90">
                Tech history, UI, and practical product design
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="mt-10 rounded-2xl border border-white/15 bg-black/25 p-6">
        <h2 className="text-2xl font-semibold text-white">What I&apos;m Working On</h2>
        <ul className="mt-4 grid gap-3 text-sm text-white/85 md:grid-cols-2">
          <li className="rounded-lg border border-white/10 bg-black/20 p-4">
            Building stronger frontend architecture with React and TypeScript.
          </li>
          <li className="rounded-lg border border-white/10 bg-black/20 p-4">
            Creating portfolio projects that reflect both technical depth and clarity.
          </li>
          <li className="rounded-lg border border-white/10 bg-black/20 p-4">
            Learning modern tooling and best practices for scalable development.
          </li>
          <li className="rounded-lg border border-white/10 bg-black/20 p-4">
            Improving product thinking and communication through iterative design.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default About;
