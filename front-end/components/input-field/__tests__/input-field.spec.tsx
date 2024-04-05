import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { InputFieldComponent } from "../input-field";

describe("Testing <InputFieldComponent>", () => {
  describe("As a user, I want the <InputFieldComponent>", () => {
    it("to render", () => {
      const { baseElement } = render(
        <InputFieldComponent id="" placeholder="" />
      );
      expect(baseElement).not.toBeNull();
    });
    it("to display the placeholder test", () => {
      const placeholderTest = "InputFieldComponentPlaceholderText";
      const { getByPlaceholderText } = render(
        <InputFieldComponent id="" placeholder={placeholderTest} />
      );
      const input = getByPlaceholderText(placeholderTest);
      expect(input).not.toBeNull();
    });
    it("to emit the change event", () => {
      const mockEvent = jest.fn();
      const { getByTestId } = render(
        <InputFieldComponent id="" placeholder="" onChange={mockEvent} />
      );
      const input = getByTestId("input-filed-component-input");
      fireEvent.change(input, { target: { value: "ABC" } });
      expect(mockEvent).toHaveBeenCalled();
    });
  });
});
