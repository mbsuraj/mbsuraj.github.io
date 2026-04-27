import { NavLink } from "react-router-dom";
import { tabRegistry } from "../data/tabRegistry";

export default function TabNavigation() {
  return (
    <nav className="flex gap-1">
      {tabRegistry.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          end={tab.path === "/"}
          className={({ isActive }) =>
            `px-3 py-1.5 text-xs font-medium uppercase tracking-wider rounded-md transition-colors ${
              isActive
                ? "bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`
          }
        >
          {tab.label}
        </NavLink>
      ))}
    </nav>
  );
}
