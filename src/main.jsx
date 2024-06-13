import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { FirebaseProvider } from "./context/Firebase.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseProvider>
        <AuthProvider>
          <NextUIProvider>
            <Toaster expand={false} position="top-right" richColors />
            <App />
          </NextUIProvider>
        </AuthProvider>
      </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>
);
