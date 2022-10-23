import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import BackendApp from "./BackendApp";
import Pexels from "./Pexels";
import TikTokApp from "./TikTok/TikTokApp";
import './TikTok/i18n.mjs'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TikTokApp/>
  </React.StrictMode>
);

