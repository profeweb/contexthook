import React, {useContext} from "react";

import { AuthContext } from './Auth.context.js';
import Login from './Login.js';
import Dashboard from './Dashboard.js';

const App = () => {
  const { state } = useContext(AuthContext);

  if (!state.isLoggedIn) 
    return <Login />;
  else
    return <Dashboard />
}

export default App;