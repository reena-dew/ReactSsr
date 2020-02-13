import { serverResponse, mockResponse } from "../common/send-response";
import { Request, Response } from "express";

export function LoginRoute(req: Request, resp: Response) {
    serverResponse(req, resp);
}

export function Dashboard(req: Request, resp: Response) {
    mockResponse(req, resp);
}