import React from "react";
import {
  InputFieldComponent,
  PageTemplateComponent,
  QuestionFieldComponent,
} from "@/components/index";
import { DataService } from "@/services/index";
import DataTableComponent from "./components/data-table";

// NextJS Convention, assigning page's metadata
export const metadata = {
  title: `Henry "Hank" Well Metzger - Interview Solution - Form 2`,
};

/**
 * This is the NextJS SSR Page for route '/form2'.
 * @returns Promise<React.ReactElement>
 */
export default async function Page(): Promise<React.ReactElement> {
  const response = await DataService.DataEntry.getFormData(2);

  // Flatten the response to merge the key with the value
  const data = response.map((r: any) => ({
    ...r.value,
    id: r.key,
  }));

  const initialFormData = {
    question1: false,
    question2: false,
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
