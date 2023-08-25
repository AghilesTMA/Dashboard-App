import { useEffect, useState } from "react";
import { createContext } from "react";

export const darkTheme = createContext();

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(localStorage.getItem("theme")==="dark");
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);
  return (
    <darkTheme.Provider value={{ dark, setDark }}>
      {children}
    </darkTheme.Provider>
  );
};

export default ThemeProvider;
