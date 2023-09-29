import { createContext } from 'react';

interface DarkModeContext {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const DarkModeContext = createContext({
  darkMode: !!window.matchMedia?.('(prefers-color-scheme: dark)').matches,
  setDarkMode: (_: boolean) => {} // eslint-disable-line @typescript-eslint/no-empty-function
})

export default DarkModeContext;
