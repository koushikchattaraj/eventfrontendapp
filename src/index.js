import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./css/bootstrap.min.css";
import "./css/font-awesome.min.css";
import "./css/fonticons.css";
import "./css/magnific-popup.css";
import "./css/navmenu.css";
import "./css/normalize.css";
import "./css/plugins.css";
import "./css/responsive.css";
import "./css/style.css";
import { Provider } from "react-redux";
import store from "./redux/store/store";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
