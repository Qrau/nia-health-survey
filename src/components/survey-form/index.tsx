import React from 'react';

export const SurveyForm = ({ children }: {
  children: React.ReactNode[];
}) => {
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <form
      data-testid="survey-form"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        minHeight: "100%",
      }}
      onSubmit={handleOnSubmit}
    >
      {children}
    </form>
  );
};
