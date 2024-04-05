import React from "react";

interface DataTableComponentProperties {
  data: Form1Data[];
}

interface Form1Data {
  field1: string;
  field2: string;
  notes: string;
  id: string;
}

const DataTableComponent = ({
  data,
}: DataTableComponentProperties): React.ReactElement => {
  return <DataTable data={data} />;
};

const DataTable = ({ data }: { data: Form1Data[] }): React.ReactElement => {
  const rows: React.ReactElement[] = data.map((d, i) => (
    <DataRow data={d} alternate={i % 2 === 0} />
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
