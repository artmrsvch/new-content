import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';

import { Header } from './components';
import Auth from './pages/Auth/Auth';
import Workspace from './pages/Workspace/Workspace';
import Profile from './pages/Profile/Profile';
import Quality from './pages/ProductVerification/Quality';

interface RootState {
  isLoggedIn: boolean;
}

const App: React.FC = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state);

  return (
    <div className="wrapper">
      {isLoggedIn && <Header />}
      <Switch>
        <Route path="/login" component={Auth} />
        <Route path="/workspace" component={Workspace} />
        <Route path="/quality" component={Quality} />
        <Route path="/profile" component={Profile} />
        <Redirect to="/login" />
      </Switch>
    </div>
  );
};

export default App;
