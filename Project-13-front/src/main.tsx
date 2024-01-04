import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
/* router */
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import Router from "./Router.tsx";
import store from "./services/store.tsx";

//components
import { Layout } from "./layout/Layout/Layout.tsx";
import User from "./pages/user/User.tsx";
import Home from "./pages/home/Home.tsx";
import Login from "./pages/login/Login.tsx";
import { AuthGuard } from "./components/AuthGuard/AuthGuard";
import { NoAuthGuard } from "./components/NoAuthGuard/NoAuthGuard";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Router /> */}
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user" element={<AuthGuard Child={User} />} />
            <Route path="/login" element={<NoAuthGuard Child={Login} />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
