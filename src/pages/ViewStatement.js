import React from "react";
import { AppProvider, Page } from "@shopify/polaris";
import ListDownloadComponent from "../component/ListDownloadComponent";

function ViewStatement() {
  return (
    <AppProvider>
      <Page title="View Statement">
        <ListDownloadComponent />
      </Page>
    </AppProvider>
  );
}

export default ViewStatement;
