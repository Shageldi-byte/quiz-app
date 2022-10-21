import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import BackendApp from "./BackendApp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
      <BackendApp/>
  </React.StrictMode>
);

