import React, { useContext } from "react";
// eslint-disable-next-line
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import './../style/MainScreen.scss';

import Profile from "./Profile";
import Authentication from "./Authentication";
import AuthenContext from "../store/AuthenContext";
import ViewApplicationList from './ViewApplicationList';
import ViewApplicationDetail from './ViewApplicationDetail';
import InputEstimateIncome from './InputEstimateIncome';
import ViewStatement from './ViewStatement';
import SendNotificationToCustomer from './SendNotificationToCustomer';
import SendNotificationToCustomer1 from './SendNotificationToCustomer1';

function MainScreen(props) {
  // eslint-disable-next-line
  const [authen, setAuthen] = useContext(AuthenContext);

  return (
    <BrowserRouter>
      {/* <Redirect
        to={{
          pathname: "/login",
          state: { from: authen }
        }}
      /> */}
      <Route exact path={`/`}></Route>
      <Route exact path={`/login`} component={Authentication} />
      <Route exact path={`/profile`} component={Profile} />
      <Route exact path={`/ViewApplicationList`} component={ViewApplicationList} />
      <Route exact path={`/ViewApplicationDetail/:id`}  component={ViewApplicationDetail} />
      <Route exact path={`/InputEstimateIncome`} component={InputEstimateIncome} />
      <Route exact path={`/ViewStatement`} component={ViewStatement} />
      <Route exact path={`/SendNotificationToCustomer`} component={SendNotificationToCustomer} />
      <Route exact path={`/SendNotificationToCustomer1`} component={SendNotificationToCustomer1} />
    </BrowserRouter>
  );
}

export default MainScreen;
