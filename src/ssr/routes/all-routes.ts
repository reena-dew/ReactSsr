import * as express from "express";
import { LoginRoute, Dashboard } from "./login-route";

export function allRoutes(app: express.Express) {
    app.use(express.static("dist"));
    app.get('/login', LoginRoute);
    app.get('/dashboard', Dashboard);
    app.get('/*', LoginRoute);
}