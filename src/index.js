import React from "react";
import ReactDOM from "react-dom/client";
import './TikTok/i18n.mjs'
import RApp from "./Redux/RApp";
import {Provider} from 'react-redux'
import {store} from './Redux/state/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <RApp/>
    </Provider>
  </React.StrictMode>
);

