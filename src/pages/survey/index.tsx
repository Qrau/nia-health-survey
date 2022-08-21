import React from "react";
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
import { SuccessPopup } from "../../components/success-popup";
import { useSurveyReport } from "../../hooks/use-survey-report";
import { useApiResp } from "../../hooks/use-api-resp";
import { handleSurveySubmit } from "../../hooks/handle-survey-submit";
import useLocalStorage from "../../hooks/use-local-storage";

export const Survey = () => {
  const { storedValue: storage, setValue: setStorage } = useLocalStorage(
    "storage",
    {}
  );
  const [isVisible, setIsVisible] = useState<{
    error: boolean;
    success: boolean;
  }>({ error: false, success: false });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [allReports, setAllReports] = useState([]);
  const { resp } = useApiResp();
  const { report, setReport } = useSurveyReport(setIsVisible);

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

  return !report.loading && resp.questions?.length > 0 ? (
    <SurveyForm>
      <Title title={resp.label} />
      {resp.questions.map((e: any) => (
        <Wrapper key={e.question_id}>
          <Question question={e.question_content} />
          <Answer
            possible_answers={JSON.parse(e.possible_answer)}
            question_id={e.question_id}
            question_title={e.question_content}
            storage={storage}
            setStorage={setStorage}
          />
          <Attachment
            question_id={e.question_id}
            report={report}
            setReport={setReport}
            checkMark={<CheckMark />}
          />
        </Wrapper>
      ))}
      <Submit onClick={handleSubmit} />
      {isVisible.error && (
        <ErrorPopup setIsVisible={setIsVisible} message={errorMessage} />
      )}
      {isVisible.success && <SuccessPopup setIsVisible={setIsVisible} />}
    </SurveyForm>
  ) : (
    <Loader />
  );
};
