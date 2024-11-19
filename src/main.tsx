import { StrictMode } from "react";
// import { createRoot } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import React from "react";
import ReactDOM from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./components/App/App";

// createRoot(document.getElementById("root") as HTMLElement).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
