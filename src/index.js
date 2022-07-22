import React from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./context/authContext";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>
);
