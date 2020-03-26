import React, { useState, useCallback, useContext } from "react";
import {
  FormLayout,
  TextField,
  Form,
  Button,
  AppProvider
} from "@shopify/polaris";

import AuthenContext from "../store/AuthenContext";
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

  // eslint-disable-next-line
  const [authen, setAuthen] = useContext(AuthenContext);

  const handleSubmit = () => setAuthen(authen => ({
    token: "dfjs9dsfj4457asssfjg"
  }));

  return (
    <div className="container login-page">
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
        <Button onClick={() => alert(authen.token)}>Test</Button>
      </AppProvider>
    </div>
  );
}

export default Authentication;
