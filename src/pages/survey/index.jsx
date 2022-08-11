import data from "../../resp.json";
import { useState } from "react";
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
import { useSurveyReport } from "./../../hooks/use-survey-report";
import { useApiResp } from "./../../hooks/use-api-resp";
import { handleSurveySubmit } from "./../../hooks/handle-survey-submit";

export const Survey = () => {
  const [storage, setStorage] = useLocalStorage({});
  const [isVisible, setIsVisible] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [allReports, setAllReports] = useState([]);
  const [resp] = useApiResp(data);
  const [report, setReport] = useSurveyReport(setIsVisible);

  const handleSubmit = () => {
    handleSurveySubmit(
      storage,
      setStorage,
      resp,
      report,
      setReport,
      setAllReports,
      setIsVisible,
      setErrorMessage
    );
  };

  console.log("all reports", allReports);

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
