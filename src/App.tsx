import { HashRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import TabNavigation from "./components/TabNavigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ResearchPage from "./pages/ResearchPage";
import ShelfPage from "./pages/ShelfPage";
import CVPage from "./pages/CVPage";
import { tabRegistry } from "./data/tabRegistry";

const componentMap: Record<string, React.ComponentType> = {
  "/": HomePage,
  "/projects": ResearchPage,
  "/shelf": ShelfPage,
  "/cv": CVPage,
};

function PageTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    const tab = tabRegistry.find((t) => t.path === pathname);
    document.title = tab && tab.path !== "/"
      ? `${tab.label} | Suraj Malla`
      : "Suraj Malla";
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <PageTitle />
        <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0f] text-gray-900 dark:text-gray-100">
          <header className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto w-full">
            <span className="text-lg font-bold tracking-tight font-mono">SM</span>
            <div className="flex items-center gap-4">
              <TabNavigation />
              <ThemeToggle />
            </div>
          </header>
          <main className="flex-1 px-6 py-8 max-w-5xl mx-auto w-full">
            <Routes>
              {tabRegistry.map((tab) => {
                const Component = componentMap[tab.path];
                return Component ? (
                  <Route key={tab.path} path={tab.path} element={<Component />} />
                ) : null;
              })}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}
