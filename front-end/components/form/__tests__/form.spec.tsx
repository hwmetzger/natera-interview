import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { FormComponent } from "../form";

describe("Testing <FormComponent>", () => {
  describe("As a user, I want the <FormComponent>", () => {
    it("to render", () => {
      const { baseElement } = render(<FormComponent title="" />);
      expect(baseElement).not.toBeNull();
    });
    it("to display the title", () => {
      const testTitle = "FormComponentTestTitle";
      const { getByTestId } = render(<FormComponent title={testTitle} />);
      const title = getByTestId("form-component-title");
      expect(title.innerHTML).toEqual(testTitle);
    });
    it("to display child components", () => {
      const testText = "TestChildComponentTest";
      const { getByTestId } = render(
        <FormComponent title="">
          <span data-testid="test-child-component">{testText}</span>
        </FormComponent>
      );
      const title = getByTestId("test-child-component");
      expect(title.innerHTML).toEqual(testText);
    });
  });
});
