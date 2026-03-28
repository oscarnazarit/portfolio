import { Link } from 'react-router-dom';

function Contact() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 md:px-8">
      <section className="rounded-2xl border border-white/20 bg-black/30 p-6 md:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-white/70">Contact</p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl">
          Let&apos;s Build Something Great
        </h1>
        <p className="mt-4 max-w-3xl text-base text-white/85 md:text-lg">
          I&apos;m open to internships, collaborations, and conversations about software projects,
          frontend development, and product ideas.
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
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-white/15 bg-black/25 p-5">
          <h2 className="text-lg font-semibold text-white">Email</h2>
          <p className="mt-2 text-sm text-white/80">
            Best for detailed conversations and opportunities.
          </p>
          <a
            href="mailto:oscarnazarit65@gmail.com"
            className="mt-4 inline-block text-sm font-medium text-[#4a92f1] hover:underline"
          >
            oscarnazarit65@gmail.com
          </a>
        </article>

        <article className="rounded-xl border border-white/15 bg-black/25 p-5">
          <h2 className="text-lg font-semibold text-white">LinkedIn</h2>
          <p className="mt-2 text-sm text-white/80">
            Connect professionally and view background details.
          </p>
          <a
            href="https://linkedin.com/in/nazarit1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-[#4a92f1] hover:underline"
          >
            linkedin.com/in/nazarit1
          </a>
        </article>

        <article className="rounded-xl border border-white/15 bg-black/25 p-5">
          <h2 className="text-lg font-semibold text-white">Availability</h2>
          <p className="mt-2 text-sm text-white/80">
            Open to internships, project work, and collaboration chats.
          </p>
          <p className="mt-4 text-sm font-medium text-white/90">
            Response time: usually within 24-48 hours
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-2xl border border-white/15 bg-black/25 p-6">
        <h2 className="text-2xl font-semibold text-white">Quick Message Template</h2>
        <p className="mt-2 text-sm text-white/80">
          You can use this format when reaching out to make it easy for me to respond quickly:
        </p>
        <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-white/85">
          <p>Subject: Collaboration / Opportunity</p>
          <p className="mt-2">Name:</p>
          <p>Project or role:</p>
          <p>Timeline:</p>
          <p>Best way to follow up:</p>
        </div>
      </section>
    </main>
  );
}

export default Contact;
