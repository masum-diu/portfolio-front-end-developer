import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ScrollToTopButton from "./ScrollToTopButton";

function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/projects");
  };
  // Initialize theme after component mounts
  useEffect(() => {
    setHasMounted(true);
    const savedMode =
      typeof window !== "undefined" && localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(systemPrefersDark);
    }
  }, []);

  // Apply dark mode class
  useEffect(() => {
    if (hasMounted) {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        typeof window !== "undefined" &&
          localStorage.setItem("darkMode", "true");
      } else {
        document.documentElement.classList.remove("dark");
        typeof window !== "undefined" &&
          localStorage.setItem("darkMode", "false");
      }
    }
  }, [darkMode, hasMounted]);

  // Listen for system changes
  useEffect(() => {
    if (!hasMounted) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (
        !(typeof window !== "undefined" && localStorage.getItem("darkMode"))
      ) {
        setDarkMode(mediaQuery.matches);
      }
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [hasMounted]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (!hasMounted) {
    return null; // or return a loading state
  }

  return (
    <div>
      {/* Mobile Menu Button (only visible on small screens) */}
      <button
        className="sm:hidden fixed top-10 right-10 z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isMenuOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>

      {/* Header/Navigation */}
      <div
        className={`flex flex-col sm:flex-row md:justify-between items-center p-4 ${
          isMenuOpen
            ? "fixed inset-0 bg-white dark:bg-[#121212] z-40 flex flex-col justify-center items-center"
            : ""
        }`}
      >
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          <div
            style={{ cursor: "pointer" }}
            className="mb-4 sm:mb-0 flex flex-row sm:flex-col gap-1 sm:gap-0 text-gray-600 dark:text-gray-300"
          >
            <h1 className="text-sm">Md</h1>
            <h1 className="text-sm">Masum Mollah</h1>
          </div>
        </Link>
        {/* Navigation Links - hidden on mobile unless menu is open */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row gap-5 justify-between items-center`}
        >
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <p className="text-sm hover:text-gray-300 text-gray-600 dark:text-gray-300">
              Home
            </p>
          </Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>
            <p className="text-sm hover:text-gray-300 text-gray-600 dark:text-gray-300">
              About
            </p>
          </Link>
          <Link href="/projects" onClick={() => setIsMenuOpen(false)}>
            <p className="text-sm hover:text-gray-300 text-gray-600 dark:text-gray-300">
              Projects
            </p>
          </Link>
          <Link href="/contacts" onClick={() => setIsMenuOpen(false)}>
            <p className="text-sm hover:text-gray-300 text-gray-600 dark:text-gray-300">
              Contacts
            </p>
          </Link>
        </div>
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row gap-5 justify-between items-center`}
        >
          {/* System-Aware Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="mt-5 sm:mt-0 group relative flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {/* Sun/Moon Icons that transition */}
            <div className="relative w-5 h-5">
              <svg
                className={`absolute w-5 h-5 text-gray-600 dark:text-gray-300 transition-all duration-300 ${
                  darkMode ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <svg
                className={`absolute w-5 h-5 text-gray-600 dark:text-gray-300 transition-all duration-300 ${
                  darkMode ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>

            {/* System indicator dot */}
            {!localStorage?.getItem("darkMode") && (
              <span className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-blue-500 border border-white dark:border-gray-900"></span>
            )}
          </button>

          {/* Language Selector */}
          <Link
            href="/documents/Md Masum Mollah_resume.pdf"
            download="Md Masum Mollah_resume.pdf"
            target="_blank"
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 flex items-center group"
          >
            <span className="underline">Download Resume</span>
            <svg
              className="w-3 h-3 ml-1 transition-transform group-hover:translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Page Content */}
      <div className={`${isMenuOpen ? "opacity-25" : ""}  transition-opacity`}>
        {children}
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default Layout;
