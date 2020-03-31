import React from "react";
import { AppProvider, Page } from "@shopify/polaris";
import ListDownloadComponent from "../component/ListDownloadComponent";

function UploadStatement() {
  return (
    <AppProvider>
      <Page title="Download Statement">
        <ListDownloadComponent />
      </Page>
    </AppProvider>
  );
}

export default UploadStatement;
