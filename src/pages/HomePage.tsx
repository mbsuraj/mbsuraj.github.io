import { FiLinkedin, FiGithub, FiMail, FiFileText } from "react-icons/fi";
import { SiGooglescholar } from "react-icons/si";
import { skills } from "../data/skills";

const socialLinks = [
  { href: "https://github.com/mbsuraj", icon: FiGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/mbsuraj/", icon: FiLinkedin, label: "LinkedIn" },
  { href: "https://scholar.google.com/citations?user=Cy3h5JoAAAAJ", icon: SiGooglescholar, label: "Google Scholar" },
  { href: "mailto:mbsuraj.asu@gmail.com", icon: FiMail, label: "Email" },
  { href: "#/cv", icon: FiFileText, label: "Resume" },
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="space-y-6 pt-8 sm:pt-16">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-teal-600 dark:text-teal-400 font-mono">
          Data Scientist at Amazon Inc.
        </p>
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter leading-none">
          BHANU SURAJ
          <br />
          MALLA
        </h1>

        {/* Social row */}
        <div className="flex items-center gap-4 pt-2">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("#") ? undefined : "_blank"}
              rel={href.startsWith("#") ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="space-y-4">
        <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 font-mono">
          About
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
          Building production-grade ML systems that turn uncertainty into
          actionable insight — from probabilistic demand forecasting at Amazon
          to scalable data platforms at Circle K. Deep expertise in
          probabilistic forecasting, scalable ML systems, and infrastructure
          engineering, combining strong statistical foundations with modern
          engineering practices.
        </p>
      </section>

      {/* Skills */}
      <section className="space-y-4">
        <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 font-mono">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 text-xs font-medium rounded-full border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-white/5"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
      {/* Collaborate */}
      <section className="rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-6 space-y-3">
        <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 font-mono">
          Open to Collaboration
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-w-2xl">
          Interested in research collaborations around Bayesian statistics,
          time-series forecasting, and applied ML. If you're working on
          something in these areas, I'd love to connect.
        </p>
        <a
          href="mailto:mbsuraj.asu@gmail.com"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white transition-colors"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
}
