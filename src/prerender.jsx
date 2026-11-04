import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
export function renderPage(path) {
  return renderToString(
    <HelmetProvider context={{}}>
      <StaticRouter location={path}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  );
}
