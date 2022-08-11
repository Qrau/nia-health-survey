import { render, createEvent, fireEvent } from "@testing-library/react";
import { SurveyForm } from ".";

it("should detect if the imported component is defined", () => {
  const { getByTestId } = render(<SurveyForm />);
  expect(getByTestId("survey-form")).toBeDefined();
});

it("should prevent default on form submit", () => {
  const { getByTestId } = render(<SurveyForm />);
  const mockEvent = createEvent.submit(getByTestId("survey-form"));
  fireEvent(getByTestId("survey-form"), mockEvent);
  expect(mockEvent.defaultPrevented).toBeTruthy();
});
