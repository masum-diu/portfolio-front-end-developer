import Link from "next/link";
import React, { useState } from "react";

function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        className={`flex flex-col sm:flex-row  items-center p-4 ${
          isMenuOpen
            ? "fixed inset-0 bg-[#121212] z-40 flex flex-col justify-center items-center"
            : ""
        }`}
      >
        <div className="mb-4 sm:mb-0">
          <h1 className="text-sm">Md</h1>
          <h1 className="text-sm">Masum Mollah</h1>
        </div>

        {/* Navigation Links - hidden on mobile unless menu is open */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row gap-5 items-center`}
        >
          <Link href="#" onClick={() => setIsMenuOpen(false)}>
            <p className="text-sm hover:text-gray-300">About</p>
          </Link>
          <Link href="#" onClick={() => setIsMenuOpen(false)}>
            <p className="text-sm hover:text-gray-300">Projects</p>
          </Link>
          <Link href="#" onClick={() => setIsMenuOpen(false)}>
            <p className="text-sm hover:text-gray-300">Contacts</p>
          </Link>
        </div>

        <Link
          href="#"
          className={`${isMenuOpen ? "block mt-4" : "hidden"} sm:block`}
        >
          <p className="underline text-sm hover:text-gray-300">En</p>
        </Link>
      </div>

      {/* Page Content */}
      <div className={`${isMenuOpen ? "opacity-25" : ""} transition-opacity`}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
