import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { NotesComponent } from "../notes";

describe("Testing <NotesComponent>", () => {
  describe("As a user, I want the <NotesComponent>", () => {
    it("to render", () => {
      const { baseElement } = render(<NotesComponent text="" />);
      expect(baseElement).not.toBeNull();
    });
    it("to display text", () => {
      const textTest = "NotesComponentTestText";
      const { getByText } = render(<NotesComponent text={textTest} />);
      const input = getByText(textTest);
      expect(input).not.toBeNull();
    });
    it("to emit the change event", () => {
      const mockEvent = jest.fn();
      const { getByTestId } = render(
        <NotesComponent text="" onTextChange={mockEvent} />
      );
      const input = getByTestId("notes-component-textarea");
      fireEvent.change(input, { target: { value: "ABC" } });
      expect(mockEvent).toHaveBeenCalled();
    });
  });
});
