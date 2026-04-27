import { projects, presentations } from "../data/research";

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
    </div>
  );
}
