import { render, screen, fireEvent } from "@testing-library/react";
import { Submit } from ".";

it("should render the component", () => {
  // We render the component
  render(<Submit />);
  // We check that there is an element on the page with the text Submit
  expect(screen.getByText("submit")).toBeDefined();
});

it("should call the onClick function when user clicks", () => {
  const mockFunction = jest.fn();
  render(<Submit onClick={mockFunction} />);
  fireEvent.click(screen.getByText("submit"));
  expect(mockFunction).toHaveBeenCalled();
});
