import React from "react";
import ReactDOM from "react-dom/client";
import { FilterProvider } from "./context/filterContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FilterProvider>
      <App />
    </FilterProvider>
  </React.StrictMode>
);
