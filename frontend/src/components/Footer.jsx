// src/components/Footer.jsx
import React from "react";

export default function Footer({ toggleTheme, theme }) {
  return (
    <footer
      style={{ background: "var(--page-gradient)" }}
      className="mt-20 pt-16 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h4
            style={{ color: "var(--text)" }}
            className="text-lg font-bold mb-4"
          >
            Lorem
          </h4>
          <ul className="space-y-3 text-sm">
            <li style={{ color: "var(--muted)" }} className="transition-colors">
              Lorem ipsum
            </li>
            <li style={{ color: "var(--muted)" }} className="transition-colors">
              Lorem ipsum
            </li>
            <li style={{ color: "var(--muted)" }} className="transition-colors">
              Lorem ipsum
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-14 pb-10">
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ borderTop: "1px solid var(--ui-border)" }}
        >
          <div className="flex items-center gap-4">
            <div
              className="
    w-12 h-12 rounded-lg
    bg-gradient-to-br from-blue-700 to-indigo-800
    flex items-center justify-center
    text-white text-xl font-extrabold shadow-lg
  "
            >
              V
            </div>

            <div
              style={{ color: "var(--text)" }}
              className="text-2xl font-extrabold"
            >
              VyomGarud
            </div>

            <div style={{ color: "var(--muted)" }} className="text-sm pl-4">
              © {new Date().getFullYear()} All Rights Reserved
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="py-2 px-4 rounded-md transition"
              style={{
                border: "1px solid var(--ui-border)",
                background: "transparent",
                color: "var(--text)",
              }}
            >
              English
            </button>

            <button
              onClick={toggleTheme}
              className="py-2 px-4 rounded-md transition"
              style={{
                border: "1px solid var(--ui-border)",
                background: "transparent",
                color: "var(--text)",
              }}
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
