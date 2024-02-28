import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";

export function Togglebtn(): JSX.Element {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="flex items-center gap-1 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <>
          <FiSun className="h-6 w-6 text-yellow-500" />
          <span className="sr-only">Switch to Dark Mode</span>
        </>
      ) : (
        <>
          <FiMoon className="h-6 w-6  dark:text-white" />
          <span className="sr-only">Switch to Light Mode</span>
        </>
      )}
    </button>
  );
}
