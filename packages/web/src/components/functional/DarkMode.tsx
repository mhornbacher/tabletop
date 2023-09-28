import { useMemo } from "react"
import useDarkMode from "../../hooks/useDarkMode"
import DarkModeContext from "../../contexts/DarkModeContext"

export default function DarkMode({ children }: { children?: JSX.Element }) {
  const [darkMode, setDarkMode] = useDarkMode()

  useMemo(() => {
    if (darkMode) {
      document.body.classList.add('bp5-dark')
    } else {
      document.body.classList.remove('bp5-dark')
    }
  }, [darkMode])

  return <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
    {children}
  </DarkModeContext.Provider>
}
