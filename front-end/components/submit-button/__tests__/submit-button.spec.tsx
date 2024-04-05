import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { SubmitButtonComponent } from "../submit-button";

describe("Testing <SubmitButtonComponent>", () => {
  describe("As a user, I want the <SubmitButtonComponent>", () => {
    it("to render", () => {
      const { baseElement } = render(
        <SubmitButtonComponent onSubmit={() => {}} />
      );
      expect(baseElement).not.toBeNull();
    });
    it("to emit the click event", () => {
      const mockEvent = jest.fn();
      const { getByTestId } = render(
        <SubmitButtonComponent onSubmit={mockEvent} />
      );
      const input = getByTestId("submit-button");
      fireEvent.click(input);
      expect(mockEvent).toHaveBeenCalled();
    });
  });
});
