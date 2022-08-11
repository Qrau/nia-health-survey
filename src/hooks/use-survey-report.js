import { useEffect, useState } from "react";

export const useSurveyReport = (setIsVisible) => {
  const [report, setReport] = useState({
    id: null,
    loading: false,
    date: null,
    answers: {},
    attachments: {},
    username: "",
  });

  useEffect(() => {
    let getData;
    if (report.loading) {
      setIsVisible((prevState) => ({ ...prevState, success: true }));
      getData = window.setTimeout(() => {
        setReport((prevState) => ({
          ...prevState,
          loading: false,
        }));
      }, 3000);
    }
    return () => window.clearTimeout(getData);
  }, [report.loading]);

  return [report, setReport];
};
