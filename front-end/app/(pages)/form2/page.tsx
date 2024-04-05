import {
  InputFieldComponent,
  PageTemplateComponent,
  QuestionFieldComponent,
} from "@/components/index";
import { DataService } from "@/services/index";
import DataTableComponent from "./components/data-table";

export const metadata = {
  title: `Henry "Hank" Well Metzger - Interview Solution - Form 2`,
};

export default async function Page() {
  const res = await DataService.DataEntry.getFormData(2);
  const data = res.map((r: any) => ({
    ...r.value,
    id: r.key,
  }));
  const initialFormData = {
    question1: "off",
    question2: "off",
    field1: "",
    notes: "",
  };

  return (
    <>
      <PageTemplateComponent
        formTitle="Form 2"
        formId={2}
        initialFormData={initialFormData}
      >
        <QuestionFieldComponent
          key="question1"
          id="question1"
          title="Question 1"
          description="Description 1"
          label="Checkbox 1"
        />
        <QuestionFieldComponent
          key="question2"
          id="question2"
          title="Question 2"
          description="Description 2"
          label="Checkbox 2"
        />
        <InputFieldComponent
          key="field1"
          id="field1"
          placeholder="Field number 1 - one line"
        />
      </PageTemplateComponent>
      <DataTableComponent data={data} />
    </>
  );
}
