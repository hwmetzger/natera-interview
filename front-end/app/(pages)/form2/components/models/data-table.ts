/**
 * Interfaces to be used by the Form2 DataTableComponent.
 */
export interface DataTableComponentProperties {
  data: Form2Data[];
}

export interface Form2Data {
  question1: boolean;
  question2: boolean;
  field1: string;
  notes: string;
  id: string;
}
