import React from "react";
import ReactDOM from "react-dom/client";
import "../src/style/index.css";
import { Routes } from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
