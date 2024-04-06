import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { LoginComponent } from "../login";

describe("Testing <LoginComponent>", () => {
  describe("As a user, I want the <InputFieldComponent>", () => {
    it("to render", () => {
      const { baseElement } = render(<LoginComponent />);
      expect(baseElement).not.toBeNull();
    });
  });
});
