import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import Router from "@/routes/app.routes";
import { BrowserRouter } from "react-router-dom";
hydrateRoot(
  document.getElementById("root"),
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>,
);
