import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";

import Auth from "./pages/Auth/Auth";
import {Header} from "./components";
import Workspace from "./pages/Workspace/Workspace";

interface RootState {
  isLoggedIn: boolean
}

const App: React.FC = () => {
  const {isLoggedIn} = useSelector((state: RootState) => state);

  return (
    <div className="wrapper">
      {isLoggedIn && <Header/>}
      <Switch>
        <Route path="/login" component={Auth} />
        <Route path="/workspace" component={Workspace} />
        <Redirect to="/login" />
      </Switch>
    </div>
  );
};

export default App;
