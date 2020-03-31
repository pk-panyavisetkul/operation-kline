import React from "react";
import { AppProvider, Page } from "@shopify/polaris";

import DataTableComponent from "../component/DataTableComponent";

function ViewApplicationList() {
  return (
    <AppProvider>
      <Page title="Application List">
        <DataTableComponent />
      </Page>
    </AppProvider>
  );
}

export default ViewApplicationList;
