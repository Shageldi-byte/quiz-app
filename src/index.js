import React from "react";
import ReactDOM from "react-dom/client";
import './TikTok/i18n.mjs'
import {Provider} from 'react-redux'
import Index from "./Admin/Index";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Sidebar from "./Admin/Sidebar";
import Category from "./Admin/page/Category";
import SubCategory from "./Admin/page/SubCategory";
import Login from "./Admin/page/Login";
import Lottie from "./Lottie";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

