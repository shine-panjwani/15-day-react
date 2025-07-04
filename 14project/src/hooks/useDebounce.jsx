import { useEffect, useState } from "react";

export function useDebounce(input, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(input);
  useEffect(() => {
    let time = setTimeout(() => {
      setDebouncedValue(input);
    }, delay);
    return () => clearTimeout(time);
  }, [input, delay]);
  return {debouncedValue};
}
