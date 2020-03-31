import React from "react";
import Heading from "@shopify/polaris";

function HeaderComponent(props) {
  return <Heading>{props.title}</Heading>;
}

export default HeaderComponent;