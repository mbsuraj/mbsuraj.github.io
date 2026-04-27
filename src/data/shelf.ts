export type ShelfCategory = "book" | "movie" | "anime";

export interface ShelfItem {
  title: string;
  category: ShelfCategory;
  url: string;
  cover: string;
  description: string;
  note?: string;
}

export const shelf: ShelfItem[] = [
  // Books
  {
    title: "The Name of the Wind",
    category: "book",
    url: "https://www.goodreads.com/book/show/186074",
    cover: "/covers/name-of-the-wind.jpg",
    description: "A gifted young man grows from an orphan into a legend in this beautifully written fantasy.",
  },
  {
    title: "The Institute",
    category: "book",
    url: "https://www.goodreads.com/book/show/43798285",
    cover: "/covers/the-institute.jpg",
    description: "Kidnapped kids with psychic abilities fight back against a sinister government facility.",
  },
  {
    title: "Three-Body Problem",
    category: "book",
    url: "https://www.goodreads.com/book/show/20518872",
    cover: "/covers/three-body-problem.jpg",
    description: "A secret signal to space triggers first contact with a civilization facing its own extinction.",
  },
  {
    title: "Eragon",
    category: "book",
    url: "https://www.goodreads.com/book/show/113436",
    cover: "/covers/eragon.jpg",
    description: "A farm boy discovers a dragon egg and is thrust into an epic battle against a tyrannical king.",
  },
  {
    title: "Beginner's Guide to Stoicism",
    category: "book",
    url: "https://www.goodreads.com/book/show/48944397",
    cover: "/covers/stoicism.jpg",
    description: "Practical tools for emotional resilience drawn from ancient Stoic philosophy.",
  },

  // Movies
  {
    title: "The Pursuit of Happyness",
    category: "movie",
    url: "https://www.imdb.com/title/tt0454921/",
    cover: "/covers/pursuit-of-happyness.jpg",
    description: "A homeless father fights to build a better life for his son through sheer determination.",
  },
  {
    title: "Nil Battey Sannata",
    category: "movie",
    url: "https://www.imdb.com/title/tt5005684/",
    cover: "/covers/nil-battey-sannata.jpg",
    description: "A single mother goes back to school to inspire her daughter to dream bigger.",
    note: "Hindi",
  },
  {
    title: "YOLO",
    category: "movie",
    url: "https://www.imdb.com/title/tt28151876/",
    cover: "/covers/yolo.jpg",
    description: "A reclusive woman rediscovers herself through the discipline of boxing.",
    note: "Chinese",
  },

  // Anime
  {
    title: "Attack on Titan",
    category: "anime",
    url: "https://www.imdb.com/title/tt2560140/",
    cover: "/covers/attack-on-titan.jpg",
    description: "Humanity fights for survival behind massive walls against terrifying man-eating giants.",
  },
  {
    title: "Fullmetal Alchemist: Brotherhood",
    category: "anime",
    url: "https://www.imdb.com/title/tt1355642/",
    cover: "/covers/fma-brotherhood.jpg",
    description: "Two brothers use alchemy to search for a way to restore their bodies after a failed experiment.",
  },
  {
    title: "One Piece",
    category: "anime",
    url: "https://www.imdb.com/title/tt0388629/",
    cover: "/covers/one-piece.jpg",
    description: "A rubber-powered pirate and his crew sail the Grand Line chasing the ultimate treasure.",
  },
];
