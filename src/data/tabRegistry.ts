export interface TabEntry {
  path: string;
  label: string;
}

export const tabRegistry: TabEntry[] = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/shelf", label: "Shelf" },
  { path: "/cv", label: "CV" },
];
