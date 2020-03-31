import React from "react";
import { AppProvider, DataTable, Card, Button } from "@shopify/polaris";

function DataTableComponent(props) {
  const rows = [
    [1, "AAPL000412", "CIF3301", "Pending", <Button url="/ViewApplicationDetail/CIF3301" outline>View</Button>],
    [2, "AAPL000413", "CIF3302", "Pending", <Button url="/ViewApplicationDetail/CIF3302" outline>View</Button>],
    [3, "AAPL000414", "CIF3303", "Pending", <Button url="/ViewApplicationDetail/CIF3303" outline>View</Button>]
  ];

  return (
    <AppProvider>
      <Card>
        {/* <DataTable
          columnContentTypes={props.columnContentTypes}
          headings={props.headings}
          rows={props.rows}
          totals={props.totals}
        ></DataTable> */}
        <DataTable
          showTotalsInFooter
          columnContentTypes={[
            "numeric",
            "text",
            "text",
            "text",
            "text"
          ]}
          headings={[
            "Id",
            "App",
            "CIF Id",
            "Status",
            "Action"
          ]}
          rows={rows}
          totals={["", "", "", "", "3"]}
          totalsName={{
            singular: "Total Application List",
            plural: "Total Application List"
          }}
        ></DataTable>
      </Card>
    </AppProvider>
  );
}

export default DataTableComponent;
