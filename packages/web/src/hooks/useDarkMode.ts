import { useState, useEffect } from "react"

export default function useDarkMode(): [boolean, (darkMode: boolean) => void] {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia?.('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia?.('(prefers-color-scheme: dark)')

    if (!mediaQuery) {
      return
    }

    const handleChange = () => {
      setDarkMode(mediaQuery.matches)
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return [darkMode, setDarkMode]
}
