import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import "dotenv/config";
// require("dotenv").config();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider
    clientId={
      "721327633323-lmdbqk4lplcrhmi35im8f6i9lqsm37m5.apps.googleusercontent.com"
    }
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GoogleOAuthProvider>
);
