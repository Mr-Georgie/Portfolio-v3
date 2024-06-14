import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [onDarkMode, setOnDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("darkTheme");

    if (storedTheme) {
      setOnDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (onDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkTheme", "yes");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkTheme", "");
    }
  }, [onDarkMode]);

  const toggleTheme = () => {
    setOnDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ onDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
