import { useEffect, useState } from "react";
import { Report } from "../model";

export const useSurveyReport = (setIsVisible: any) => {
  const [report, setReport] = useState<Report>({
    id: null,
    loading: false,
    date: null,
    answers: [],
    attachments: {},
    username: "",
  });

  useEffect(() => {
    let getData: any;
    if (report.loading) {
      setIsVisible((prevState: any) => ({ ...prevState, success: true }));
      getData = window.setTimeout(() => {
        setReport((prevState) => ({
          ...prevState,
          loading: false,
        }));
      }, 3000);
    }
    return () => window.clearTimeout(getData);
  }, [report.loading]);

  // return [report, setReport];
  return { report, setReport };
};
