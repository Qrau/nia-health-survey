import data from "../../resp.json";
import { useEffect, useState } from "react";
import { Question } from "../../components/question";
import { SurveyForm } from "../../components/survey-form";
import { Answer } from "../../components/answer";
import { Attachment } from "../../components/attachment";
import { Loader } from "../../components/loader";
import { Title } from "../../components/title";
import { Submit } from "../../components/submit";
import { Wrapper } from "../../components/wrapper";
import { CheckMark } from "../../components/check-mark";
import { ErrorPopup } from "../../components/error-popup";
import useLocalStorage from "../../hooks/use-local-storage";
import { SuccessPopup } from "../../components/success-popup";

export const Survey = () => {
  // to store all the recieved api data related to the survey
  const [resp, setResp] = useState([]);

  // to persist user answers states after page refresh
  const [storage, setStorage] = useLocalStorage({});

  // to handle the visibility of popup components
  const [isVisible, setIsVisible] = useState({
    error: false,
    success: false
  });

  // dynamic message content depending on the error
  const [errorMessage, setErrorMessage] = useState("");

  // data for the post request on submitting
  const [report, setReport] = useState({
    id: null,
    loading: false,
    date: null,
    answers: {},
    attachments: {},
    username: ""
  });

  // to store the pushed submit tests
  const [allReports, setAllReports] = useState([]);

  // simulate api call to recieve survey data
  useEffect(() => {
    let getData = window.setTimeout(() => {
      setResp(data);
    }, 3000);
    return () => window.clearTimeout(getData);
  }, []);

  // simulate api call to post the survey report
  useEffect(() => {
    if (report.loading) {
      setIsVisible((prevState) => ({ ...prevState, success: true }));
    }
    let getData = window.setTimeout(() => {
      setReport((prevState) => ({
        ...prevState,
        loading: false
      }));
    }, 3000);
    return () => window.clearTimeout(getData);
  }, [report.loading]);

  // submit the survey and push it to an array of objecs
  const handleSubmit = () => {
    // check if all answers were selected
    if (storage && Object.keys(storage).length === resp.questions.length) {
      setReport((prevState) => ({
        ...prevState,
        loading: true
      }));
      // push the report and post it to the test array of reports
      setAllReports((prevState) => [
        ...prevState,
        {
          ...report,
          username: "testuser",
          id: +new Date(),
          date: new Date().toLocaleString(),
          answers: storage
        }
      ]);
      setStorage({});
    } else {
      // show a popup reminder to select all answers
      setIsVisible((prevState) => ({ ...prevState, error: true }));
      setErrorMessage(
        "sorry! please select an answer for every question and try to submit again :)"
      );
    }
    // clear states and localStorage after successful post
    setReport((prevState) => ({
      ...prevState,
      id: null,
      date: null,
      answers: {},
      attachments: {},
      username: ""
    }));
  };

  console.log(isVisible);
  return !report.loading && resp.questions ? (
    <SurveyForm>
      <Title> {resp.label} </Title>
      {resp.questions.map((e) => (
        <Wrapper key={e.id}>
          <Question question={e.question} storage={storage} />
          <Answer
            possible_answers={e.possible_answers}
            question_id={e.id}
            storage={storage}
            setStorage={setStorage}
          />
          <Attachment
            question_id={e.id}
            report={report}
            setReport={setReport}
            checkMark={<CheckMark />}
          />
        </Wrapper>
      ))}
      <Submit onClick={handleSubmit} />
      {isVisible.error && (
        <ErrorPopup
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          message={errorMessage}
        />
      )}
      {isVisible.success && (
        <SuccessPopup
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          message={errorMessage}
        />
      )}
    </SurveyForm>
  ) : (
    <Loader />
  );
};
