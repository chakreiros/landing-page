import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import Router from "@/routes/app.routes";

export function render({ path }) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={path}>
        <Router />
      </StaticRouter>
    </StrictMode>,
  );

  return { html };
}
