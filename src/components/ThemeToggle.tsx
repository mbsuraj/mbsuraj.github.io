import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
    >
      {theme === "dark" ? <FiMoon size={16} /> : <FiSun size={16} />}
    </button>
  );
}
