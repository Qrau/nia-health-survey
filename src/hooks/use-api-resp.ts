import Axios from "axios";
import { useEffect, useState } from "react";
import { ApiResp } from "../model";

export const useApiResp = () => {
  const [resp, setResp] = useState<ApiResp>({
    label: "",
    status: "",
    start_date: null,
    end_date: null,
    questions: [],
  });

  useEffect(() => {
    const getData = async (url: string) => {
      try {
        let res = await Axios({
          method: "get",
          url: url,
        });
        setResp({
          label: res.data[0].survey_label,
          status: "",
          start_date: null,
          end_date: null,
          questions: res.data,
        });
      } catch (error) {
        if (Axios.isAxiosError(error)) {
          console.log(error);
        }
      }
    };

    const surveyId = 1;
    const apiUrl = `http://localhost:8000/survey/id/${surveyId}`;
    getData(apiUrl);
  }, []);

  return { resp };
};
