import { useEffect, useState } from "react";

export function useFetch(url,perSec) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  async function fetchData() {
    try {
      const response = await fetch(url);
      const responseInJson = await response.json();
      setData(responseInJson);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [url]);
  useEffect(()=>{
    const time =setInterval(fetchData, perSec*1000);
    return ()=>clearInterval(time);
  },[url])
  return { data, loading };
}
