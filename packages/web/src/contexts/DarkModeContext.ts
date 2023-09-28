import { createContext } from 'react';

const DarkModeContext = createContext({
  darkMode: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
  setDarkMode: (darkMode: boolean) => {}
})

export default DarkModeContext;
