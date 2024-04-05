/**
 * Interfaces to be used by the Form1 DataTableComponent.
 */
export interface DataTableComponentProperties {
  data: Form1Data[];
}

export interface Form1Data {
  field1: string;
  field2: string;
  notes: string;
  id: string;
}
