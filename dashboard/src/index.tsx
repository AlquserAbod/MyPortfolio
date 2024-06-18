
import React from "react";
import { createRoot } from "react-dom/client";
import { runFlmngrLoad } from "@/config/flmngrConfig"; // Adjust the path as necessary

import App from "./App";

runFlmngrLoad();

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
