import { initializeAnalytics } from "./editorial/config";
import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

initializeAnalytics();

const application = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
const root = document.getElementById("root");
const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
if (root.hasChildNodes() && root.dataset.renderedPath === currentPath)
  hydrateRoot(root, application);
else createRoot(root).render(application);
