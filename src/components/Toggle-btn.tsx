// Import necessary dependencies
import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

// ModeToggle component
export function ModeToggle(): JSX.Element  {
  // Get the setTheme function from useTheme hook
  const { theme, setTheme } = useTheme()

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button
      className="flex items-center gap-1 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <>
          <SunIcon className="h-6 w-6 text-yellow-500" />
          <span className="sr-only">Switch to Dark Mode</span>
        </>
      ) : (
        <>
          <MoonIcon className="h-6 w-6 text-gray-700" />
          <span className="sr-only">Switch to Light Mode</span>
        </>
      )}
    </button>
  )
}

<!-- // Import necessary dependencies
import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

// ModeToggle component
export function ModeToggle(): JSX.Element {
  // Get the setTheme function from useTheme hook
  const { theme, setTheme } = useTheme()

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button
      className="flex items-center gap-1 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <>
          <SunIcon className="h-6 w-6 text-yellow-500" />
          <span className="sr-only">Switch to Dark Mode</span>
        </>
      ) : (
        <>
          <MoonIcon className="h-6 w-6 text-gray-700" />
          <span className="sr-only">Switch to Light Mode</span>
        </>
      )}
    </button>
  )
}
 -->
