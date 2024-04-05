import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { QuestionFieldComponent } from "../question-field";

describe("Testing <QuestionFieldComponent>", () => {
  describe("As a user, I want the <QuestionFieldComponent>", () => {
    it("to render", () => {
      const { baseElement } = render(
        <QuestionFieldComponent id="" title="" description="" label="" />
      );
      expect(baseElement).not.toBeNull();
    });
    it("to display the title", () => {
      const textTest = "QuestionFieldComponentTestText";
      const { getByText } = render(
        <QuestionFieldComponent
          id=""
          title={textTest}
          description=""
          label=""
        />
      );
      const input = getByText(textTest);
      expect(input).not.toBeNull();
    });
    it("to display the description", () => {
      const textTest = "QuestionFieldComponentTestText";
      const { getByText } = render(
        <QuestionFieldComponent
          id=""
          title=""
          description={textTest}
          label=""
        />
      );
      const input = getByText(textTest);
      expect(input).not.toBeNull();
    });
    it("to display the label", () => {
      const textTest = "QuestionFieldComponentTestText";
      const { getByText } = render(
        <QuestionFieldComponent
          id=""
          title=""
          description=""
          label={textTest}
        />
      );
      const input = getByText(textTest);
      expect(input).not.toBeNull();
    });

    it("to emit the change event", () => {
      const mockEvent = jest.fn();
      const { getByTestId } = render(
        <QuestionFieldComponent
          id=""
          title=""
          description=""
          label=""
          onChange={mockEvent}
        />
      );
      const input = getByTestId("question-field-checkbox");
      fireEvent.click(input);
      expect(mockEvent).toHaveBeenCalled();
    });
  });
});
