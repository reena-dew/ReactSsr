import React from "react";
import { renderToString } from "react-dom/server";
import App from "../App";
import { StaticRouter } from "react-router";
import { routes } from "Core/routes/routes.server";

export function serverRender(initialData: any, url: string) {
    const content = renderToString(
        <StaticRouter location={url} context={initialData}>
            <App routes={routes} url={url} />
        </StaticRouter>
    );
    return { content };
}
