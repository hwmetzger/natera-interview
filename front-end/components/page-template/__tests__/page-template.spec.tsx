import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { PageTemplateComponent } from "../page-template";
import Context from "../barrel";

describe("Testing <PageTemplateComponent>", () => {
  describe("As a user, I want the <PageTemplateComponent>", () => {
    const useIdMock = jest.fn();
    const useStateSetMock = jest.fn();
    const useRouterMock = jest.fn();

    beforeEach(() => {
      jest.spyOn(Context, "useId").mockImplementation(useIdMock);
      jest.spyOn(Context, "useState").mockReturnValue(["", useStateSetMock]);
      jest.spyOn(Context, "useRouter").mockReturnValue({
        refresh: useRouterMock,
      } as any);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("to render", () => {
      const { baseElement } = render(
        <PageTemplateComponent formTitle="Test" formId={0} initialFormData={{}}>
          <></>
        </PageTemplateComponent>
      );
      expect(baseElement).not.toBeNull();
    });

    it("to display the form component", () => {
      const textTest = "PageTemplateFormTitle";
      const { getByTestId } = render(
        <PageTemplateComponent
          formTitle={textTest}
          formId={0}
          initialFormData={{}}
        >
          <></>
        </PageTemplateComponent>
      );
      const form = getByTestId("form-component-title");
      expect(form).not.toBeNull();
    });

    it("to display the notes component", () => {
      const textTest = "PageTemplateFormTitle";
      const { getByTestId } = render(
        <PageTemplateComponent
          formTitle={textTest}
          formId={0}
          initialFormData={{}}
        >
          <></>
        </PageTemplateComponent>
      );
      const notes = getByTestId("notes-component-textarea");
      expect(notes).not.toBeNull();
    });

    it("to display the submit button", () => {
      const textTest = "PageTemplateFormTitle";
      const { getByTestId } = render(
        <PageTemplateComponent
          formTitle={textTest}
          formId={0}
          initialFormData={{}}
        >
          <></>
        </PageTemplateComponent>
      );
      const button = getByTestId("submit-button");
      expect(button).not.toBeNull();
    });
  });
});
