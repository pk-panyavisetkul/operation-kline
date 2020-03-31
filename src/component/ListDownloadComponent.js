import React from "react";
import { List, Link } from "@shopify/polaris";

function ListDownloadComponent() {
  return (
    <div className="list-download">
      <List type="bullet">
        <List.Item>
          <Link url="www.google.co.th" external>KBank-Statement1.pdf</Link>
        </List.Item>
        <List.Item>
          <Link url="www.google.co.th" external>KBank-Statement2.pdf</Link>
        </List.Item>
        <List.Item>
          <Link url="www.google.co.th" external>KBank-Statement3.pdf</Link>
        </List.Item>
      </List>
    </div>
  );
}

export default ListDownloadComponent;
