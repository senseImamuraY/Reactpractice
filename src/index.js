import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const buttonEl = document.createElement("button");

buttonEl.textContent = "ボタン";

const divEl = document.querySelector(".container");

console.log(divEl);
// divEl.appendChild(buttonEl);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
