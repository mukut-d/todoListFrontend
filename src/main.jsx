import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TodoContext from "./store/todoContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoContext>
      <App />
    </TodoContext>
  </StrictMode>
);
