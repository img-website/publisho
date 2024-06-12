import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { FirebaseProvider } from "./context/Firebase.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <FirebaseProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>
);
