import React, { useState, useCallback } from "react";
import {
  FormLayout,
  TextField,
  Form,
  Button,
  AppProvider
} from "@shopify/polaris";

import { AuthenProvider } from "../store/AuthenContext";
// import { Redirect } from "react-router-dom";

function Authentication() {
  // const { from } = this.props.location.state || { from: { pathname: "/" } };
  // const { redirectToReferrer } = this.state;

  // eslint-disable-next-line
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUser = useCallback(newValue => setUser(newValue), []);
  const handleChangePassword = useCallback(
    newValue => setPassword(newValue),
    []
  );

  const handleSubmit = () => setUser(user);

  return (
    <div className="login-page">
      <AuthenProvider value={user}>
        <AppProvider>
          <Form onSubmit={handleSubmit}>
          {/* <Form> */}
            <FormLayout>
              <TextField
                label="Account Email"
                type="email"
                value={user}
                onChange={handleChangeUser}
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={handleChangePassword}
              />
              <Button submit>Submit</Button>
            </FormLayout>
          </Form>
          <Button onClick={() => alert(user + ":" + password)}>Test</Button>
        </AppProvider>
      </AuthenProvider>
    </div>
  );
}

export default Authentication;
