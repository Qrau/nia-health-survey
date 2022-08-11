import { render } from "@testing-library/react";
import { Title } from ".";

it("should detect if the imported component is defined", () => {
  const { getByTestId } = render(<Title />);
  expect(getByTestId("title")).toBeDefined();
});
