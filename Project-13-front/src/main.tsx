import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Router from "./Router.tsx";
import { store } from "./Store/store.tsx";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
