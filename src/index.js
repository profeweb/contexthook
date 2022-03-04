import React from "react";
import ReactDOM from "react-dom";

import { ContextProvider } from './Auth.context.js';

import App from './App.js'
import "./styles.css";


function AppWithProvider() {
  return (
    <ContextProvider value={500}>
      <div className="card error fluid">
        <h4>Login React Context</h4>
      </div>
      
      <App />
    </ContextProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppWithProvider />, rootElement);