import { workExperience } from "../data/workExperience";

export default function WorkPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-extrabold tracking-tight">
        Work Experience
      </h1>

      <div className="space-y-6">
        {workExperience.map((entry) => (
          <article
            key={`${entry.company}-${entry.title}`}
            className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
              <div>
                <h2 className="text-xl font-bold">{entry.company}</h2>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {entry.title}
                </p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                {entry.dateRange}
              </span>
            </div>

            {entry.accomplishments.length > 0 && (
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {entry.accomplishments.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
