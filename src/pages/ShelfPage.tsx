import { shelf } from "../data/shelf";

const books = shelf.filter((i) => i.category === "book");
const movies = shelf.filter((i) => i.category === "movie");
const anime = shelf.filter((i) => i.category === "anime");

function ShelfCard({ item }: { item: (typeof shelf)[number] }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 overflow-hidden hover:border-teal-400/50 dark:hover:border-teal-400/30 transition-colors"
    >
      <div className="aspect-[2/3] bg-gray-200 dark:bg-white/10 overflow-hidden">
        <img
          src={item.cover}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3">
        <p className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-snug">
          {item.title}
        </p>
        <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1 leading-relaxed line-clamp-2">
          {item.description}
        </p>
        {item.note && (
          <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
            {item.note}
          </p>
        )}
      </div>
    </a>
  );
}

function ShelfSection({ label, items }: { label: string; items: typeof shelf }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 font-mono">
        {label}
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {items.map((item) => (
          <ShelfCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

export default function ShelfPage() {
  return (
    <div className="space-y-14">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Shelf</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl">
          Books, movies, and anime that have shaped how I think — or just kept me up way too late.
        </p>
      </header>

      <ShelfSection label="Books" items={books} />
      <ShelfSection label="Movies" items={movies} />
      <ShelfSection label="Anime" items={anime} />
    </div>
  );
}
