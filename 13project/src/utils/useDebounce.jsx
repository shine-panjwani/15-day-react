import { useEffect, useState } from "react";

function useDebounce(input,time = 500){
    const [debounceVal,setDebouncedVal] = useState(input);
    useEffect(()=>{
        let timeId = setTimeout(()=>{
            setDebouncedVal(input)
        },time)
        return ()=> clearTimeout(timeId)
    },[input,time])
    return debounceVal;
}
export default useDebounce;