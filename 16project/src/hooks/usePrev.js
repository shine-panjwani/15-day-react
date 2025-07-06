import { useEffect, useRef } from "react";
export function usePrev(initialVal) {
  const ref = useRef();
  console.log("re-render happened with new Val " + initialVal);
  useEffect(() => {
    console.log("updated the ref to be " + initialVal);
    
    ref.current = initialVal;
  }, [initialVal]);
  console.log("returned " + ref.current);
  
  return ref.current;
}
