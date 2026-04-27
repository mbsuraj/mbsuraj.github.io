import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

const links = [
  { href: "https://www.linkedin.com/in/mbsuraj/", icon: FiLinkedin, label: "LinkedIn" },
  { href: "https://github.com/mbsuraj", icon: FiGithub, label: "GitHub" },
  { href: "mailto:mbsuraj.asu@gmail.com", icon: FiMail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-auto border-t border-gray-200 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-4">
        <div className="flex gap-5">
          {links.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} Bhanu Suraj Malla
        </p>
      </div>
    </footer>
  );
}
