import { useEffect, useState } from "react";

export function useDebounce(initialVal, timer) {
  const [debounced, setDebounced] = useState("");
  useEffect(() => {
    const id = setTimeout(() => {
      setDebounced(initialVal);
    },timer);
    return () => clearTimeout(id);
  }, [initialVal,timer]);
  return debounced;
} 
