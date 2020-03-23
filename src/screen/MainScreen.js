import React, { useState } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Profile from "./Profile";
import Authentication from "./Authentication";

function MainScreen(props) {

  // eslint-disable-next-line
  const [user, setUser] = useState("");
  
  return (
    <BrowserRouter>
      <Redirect
        to={{
          pathname: "/login",
          state: { from: user }
        }}
      />
      <Route exact path={`/`}></Route>
      <Route exact path={`/login`} component={Authentication} />
      <Route exact path={`/profile`} component={Profile} />
    </BrowserRouter>
  );
}

export default MainScreen;
