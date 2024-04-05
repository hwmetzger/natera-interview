import React from "react";
import { DataTableComponentProperties, Form1Data } from "./models/data-table";

/**
 * This is a non-reusable table component used by the Form1 Page. (Dumb Component)
 * @param params <DataTableComponentProperties>
 * @returns React.ReactElement
 */
const DataTableComponent = ({
  data,
}: DataTableComponentProperties): React.ReactElement => {
  return <DataTable data={data} />;
};

const DataTable = ({ data }: { data: Form1Data[] }): React.ReactElement => {
  // Mapping data for alternating background color pattern
  const rows: React.ReactElement[] = data.map((d, i) => (
    <DataRow key={`Form1_Row_${i}`} data={d} alternate={i % 2 === 0} />
  ));

  return (
    <div className="table w-full">
      <div className="table-header-group  bg-black">
        <div className="table-row text-white">
          <div className="table-cell text-left py-4 pl-1 font-black">
            Field 1
          </div>
          <div className="table-cell text-left py-4 pl-1 font-black">
            Field 2
          </div>
          <div className="table-cell text-left py-4 pl-1 font-black">Notes</div>
        </div>
      </div>
      <div className="table-row-group">{rows}</div>
    </div>
  );
};

const DataRow = ({
  data,
  alternate,
}: {
  data: Form1Data;
  alternate: boolean;
}): React.ReactElement => {
  return (
    <div
      id={data.id}
      className={`table-row ${alternate ? " bg-slate-100" : ""}`}
    >
      <div className="table-cell px-1 py-4">{data.field1}</div>
      <div className="table-cell px-1 py-4">{data.field2}</div>
      <div className="table-cell px-1 py-4">{data.notes}</div>
    </div>
  );
};

export default DataTableComponent;
