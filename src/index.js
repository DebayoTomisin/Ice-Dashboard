import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./context/ContextProvider";

const root = document.getElementById("root");
render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  root
);
