import { useEffect, useState } from "react";

// simulate api call to receive survey data
export const useApiResp = (data) => {
  const [resp, setResp] = useState([]);

  useEffect(() => {
    let getData = window.setTimeout(() => {
      setResp(data);
    }, 3000);
    return () => window.clearTimeout(getData);
  }, []);

  return [resp];
};
