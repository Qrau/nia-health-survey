import { ApiResp, Report } from "../model";

export const handleSurveySubmit = (
  storage: any,
  setStorage: Function,
  resp: ApiResp,
  report: Report,
  setReport: Function,
  setAllReports: Function,
  setIsVisible: Function,
  setErrorMessage: Function
) => {
  // check if all answers were selected
  if (storage && Object.keys(storage).length === resp.questions.length) {
    setReport((prevState: any) => ({
      ...prevState,
      loading: true,
    }));
    // push the report and post it to the test array of reports
    setAllReports((prevState: any) => [
      ...prevState,
      {
        ...report,
        username: "testuser",
        id: +new Date(),
        date: new Date().toLocaleString(),
        answers: storage,
      },
    ]);
    setStorage({});
  } else {
    // show a popup reminder to select all answers
    setIsVisible((prevState: any) => ({ ...prevState, error: true }));
    setErrorMessage(
      "sorry! please select an answer for every question and try to submit again :)"
    );
  }
  // clear states and localStorage after successful post
  setReport((prevState: any) => ({
    ...prevState,
    id: null,
    date: null,
    answers: {},
    attachments: {},
    username: "",
  }));
};
