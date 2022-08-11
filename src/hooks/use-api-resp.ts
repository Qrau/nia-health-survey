import { useEffect, useState } from "react";
import { ApiResp } from "../model";

// simulate api call to receive survey data
export const useApiResp = (data: any) => {
  const [resp, setResp] = useState<ApiResp>({
    label: "",
    status: "",
    start_date: null,
    end_date: null,
    questions: [],
  });

  useEffect(() => {
    let getData = window.setTimeout(() => {
      setResp(data);
    }, 3000);
    return () => window.clearTimeout(getData);
  }, []);

  return { resp };
};
