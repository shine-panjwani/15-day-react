import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(()=>{
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  })
  useEffect(()=>{
      const root = document.documentElement;
    localStorage.setItem("theme" , isDark ? "dark" : "light")
    if(isDark){
      root.classList.add("dark")
    }else{
      root.classList.remove("dark")
    }
  },[isDark])
  function themeSetter() {
    setIsDark((p) => !p);
  }
  return (
    <ThemeContext.Provider value={{ isDark, themeSetter }}>
      {children}
    </ThemeContext.Provider>
  );
}
