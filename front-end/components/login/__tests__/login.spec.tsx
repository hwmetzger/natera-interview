import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { LoginComponent } from "../login";

describe("Testing <LoginComponent>", () => {
  describe("As a user, I want the <InputFieldComponent>", () => {
    it("to render", () => {
      const { baseElement } = render(
        <LoginComponent onSignInClick={() => {}} />
      );
      expect(baseElement).not.toBeNull();
    });

    for (let i = 1; i <= 2; i++) {
      it(`to emit ${i} when Form ${i} is selected`, () => {
        const mockFn = jest.fn();
        const { getByTestId } = render(
          <LoginComponent onSignInClick={mockFn} />
        );
        const radio = getByTestId(`login-form-${i}-radio`);
        const button = getByTestId("login-button");
        fireEvent.click(radio);
        fireEvent.click(button);
        expect(mockFn).toHaveBeenCalledWith(i.toString());
      });
    }
  });
});
