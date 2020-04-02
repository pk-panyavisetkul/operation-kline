import React from "react";
import { AppProvider, Page } from "@shopify/polaris";
import ListDownloadComponent from "../component/ListDownloadComponent";

function ViewApplicationDetail() {
  return (
    <AppProvider>
      <Page title="View Application Detail">
        <ListDownloadComponent />
      </Page>
    </AppProvider>
  );
}

export default ViewApplicationDetail;
