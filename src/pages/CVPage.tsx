import { FiDownload } from "react-icons/fi";

export default function CVPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Resume</h1>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white transition-colors"
          >
            <FiDownload size={14} />
            Download PDF
          </a>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl">
          A snapshot of my professional experience, education, and skills. Download the PDF for the full version.
        </p>
      </header>

      <div className="w-full rounded-lg overflow-hidden border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
        <iframe
          src="/resume.pdf"
          title="Resume"
          className="w-full bg-white"
          style={{ height: "calc(100vh - 260px)", minHeight: "600px" }}
        />
      </div>
    </div>
  );
}
