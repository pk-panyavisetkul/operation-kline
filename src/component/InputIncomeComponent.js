import React, { useState, useCallback } from "react";
import {
  AppProvider,
  Form,
  FormLayout,
  TextField,
  Button
} from "@shopify/polaris";

function InputIncomeComponent() {
  const [inputIncome, setInputIncome] = useState();

  const handleIncomeChange = useCallback(value => setInputIncome(value), []);

  const handleSubmit = () => {
    setInputIncome(inputIncome);
  };

  return (
    <AppProvider>
      <Form onSubmit={handleSubmit}>
        <FormLayout>
          <FormLayout.Group>
            <TextField
              value={inputIncome}
              onChange={handleIncomeChange}
              type="number"
              prefix="฿"
              placeholder="Income"
            />
            <Button submit>Submit</Button>
          </FormLayout.Group>
        </FormLayout>
      </Form>
    </AppProvider>
  );
}

export default InputIncomeComponent;
