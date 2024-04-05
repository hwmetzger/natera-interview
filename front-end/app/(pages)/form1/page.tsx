import React from "react";
import { InputFieldComponent, PageTemplateComponent } from "@/components/index";
import DataTableComponent from "./components/data-table";
import { DataService } from "@/services/index";

// NextJS Convention, assigning page's metadata
export const metadata = {
  title: `Henry "Hank" Well Metzger - Interview Solution - Form 1`,
};

/**
 * This is the NextJS SSR Page for route '/form1'.
 * @returns Promise<React.ReactElement>
 */
export default async function Page(): Promise<React.ReactElement> {
  const response = await DataService.DataEntry.getFormData(1);

  // Flatten the response to merge the key with the value
  const data = response.map((r: any) => ({
    ...r.value,
    id: r.key,
  }));

  const initialFormData = {
    field1: "",
    field2: "",
    notes: "",
  };

  return (
    <>
      <PageTemplateComponent
        formTitle="Form 1"
        formId={1}
        initialFormData={initialFormData}
      >
        <InputFieldComponent
          key="field1"
          id="field1"
          placeholder="Field number 1 - one line"
        />
        <InputFieldComponent
          key="field2"
          id="field2"
          placeholder="Field number 2 - one line"
        />
      </PageTemplateComponent>
      <DataTableComponent data={data} />
    </>
  );
}
