export const SurveyForm = ({ children }) => {
  const handleOnSubmit = (e) => {
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
        minHeight: "100%"
      }}
      onSubmit={handleOnSubmit}
    >
      {children}
    </form>
  );
};
