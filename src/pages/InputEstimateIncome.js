import React from "react";
import { AppProvider, Page } from "@shopify/polaris";
import InputIncomeComponent from "../component/InputIncomeComponent";

function InputEstimateIncome() {
  return (
    <AppProvider>
      <Page title="Input Estimate Income">
        <InputIncomeComponent />
      </Page>
    </AppProvider>
  );
}

export default InputEstimateIncome;
