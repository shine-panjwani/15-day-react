import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [users, setUsers] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  function signup(newUser) {
    localStorage.setItem("userInfo", JSON.stringify(newUser));
    setUsers(newUser);
    setIsAuth(true);
    return true;
  }
  function login(email, password) {
    const stored = localStorage.getItem("userInfo");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.email === email && parsed.password === password) {
        setUsers(parsed);
        setIsAuth(true);
        return true
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  function logout() {
    localStorage.removeItem("userInfo");
    setIsAuth(false);
    setUsers(null);
    return true;
  }
  useEffect(() => {
    const stored = localStorage.getItem("userInfo");
    if (stored) {
      const parse = JSON.parse(stored);
      setUsers(parse);
      setIsAuth(true);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ users, isAuth, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}
