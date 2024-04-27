/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AmountContextProvider } from "./context/AmountContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AmountContextProvider>
      <App />
    </AmountContextProvider>
  </>
);
