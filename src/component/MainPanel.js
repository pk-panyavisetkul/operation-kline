import React from "react";
import Layout from '@shopify/polaris';

function MainPanel(props) {
  return (
    <Layout>
      <Layout.Section>{props.children}</Layout.Section>
    </Layout>
  );
}

export default MainPanel;