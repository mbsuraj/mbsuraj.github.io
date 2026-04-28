import { projects, presentations, recognitions, memberships, researchInterests } from "../data/research";

const applications = projects.filter((p) => p.category === "application");
const research = projects.filter((p) => p.category === "research");

function ProjectCard({ pkg }: { pkg: (typeof projects)[number] }) {
  return (
    <article className="rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-6">
      <h3 className="text-lg font-bold">
        {pkg.name}
        {pkg.fullName !== pkg.name && (
          <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
            ({pkg.fullName})
          </span>
        )}
      </h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {pkg.description}
      </p>
      <div className="flex gap-4 mt-3">
        {pkg.url && (
          <a href={pkg.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline">
            GitHub →
          </a>
        )}
        {pkg.demoUrl && (
          <a href={pkg.demoUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline">
            Live Demo →
          </a>
        )}
        {pkg.paperUrl && (
          <a href={pkg.paperUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline">
            Paper →
          </a>
        )}
        {pkg.pypiUrl && (
          <a href={pkg.pypiUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline">
            PyPI →
          </a>
        )}
      </div>
    </article>
  );
}

export default function ResearchPage() {
  return (
    <div className="space-y-14">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl">
          Applications I've built, research I've published (or about to), and talks I've given (or about to) — spanning ML tooling, time series analysis, and forecasting.
        </p>
      </header>

      {applications.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 font-mono">
            Applications
          </h2>
          <div className="space-y-6">
            {applications.map((p) => <ProjectCard key={p.name} pkg={p} />)}
          </div>
        </section>
      )}

      {research.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 font-mono">
            Research
          </h2>
          <div className="space-y-6">
            {research.map((p) => <ProjectCard key={p.name} pkg={p} />)}
          </div>
        </section>
      )}

      {presentations.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 font-mono">
            Presentations
          </h2>
          <div className="space-y-6">
            {presentations.map((pres) => (
              <article
                key={pres.title}
                className="rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-6 space-y-3"
              >
                <h3 className="text-lg font-bold leading-snug">
                  {pres.title}
                  {pres.upcoming && (
                    <span className="ml-2 inline-block px-2 py-0.5 text-[11px] font-medium rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 align-middle">
                      Upcoming
                    </span>
                  )}
                </h3>
                <p className="text-sm text-teal-600 dark:text-teal-400 font-medium">
                  {pres.venue} · {pres.location} · {pres.date}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {pres.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-2 py-0.5 text-[11px] rounded-full border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
      {recognitions.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 font-mono">
            Recognition
          </h2>
          <div className="space-y-6">
            {recognitions.map((rec) => (
              <article
                key={rec.title}
                className="rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-6 space-y-3"
              >
                <h3 className="text-lg font-bold leading-snug">{rec.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {rec.description}
                </p>
                <div className="flex gap-4">
                  {rec.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {researchInterests.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 font-mono">
            Research Interests
          </h2>
          <div className="flex flex-wrap gap-2">
            {researchInterests.map((interest) => (
              <span
                key={interest}
                className="px-3 py-1.5 text-xs font-medium rounded-full border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-white/5"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>
      )}

      {memberships.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 font-mono">
            Memberships
          </h2>
          <div className="space-y-3">
            {memberships.map((m) => (
              <div key={m.organization} className="flex items-baseline gap-2">
                {m.url ? (
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-teal-600 dark:text-teal-400 hover:underline"
                  >
                    {m.organization}
                  </a>
                ) : (
                  <span className="text-sm text-gray-700 dark:text-gray-300">{m.organization}</span>
                )}
                {m.abbreviation && (
                  <span className="text-[11px] text-gray-400 dark:text-gray-500">({m.abbreviation})</span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
