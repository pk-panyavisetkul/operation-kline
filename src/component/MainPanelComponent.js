import React from "react";
import Layout from "@shopify/polaris";

function MainPanelComponent(props) {
  return (
    <Layout>
      <Layout.Section>{props.children}</Layout.Section>
    </Layout>
  );
}

export default MainPanelComponent;