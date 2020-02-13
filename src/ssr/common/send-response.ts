import { serverRender } from "../../server/server";
import { template } from "../../template";
import { Response, Request } from "express";
import CommonService from "../../core/services/common.service";

export function serverResponse(req: Request, resp: Response) {
    const initialData: any = {
        username: "Reena Tarkar",
        designation: "Software Engineer"
    }
    const { content } = serverRender(initialData, req.url);
    const response = template("Test Luxury Marketplace", content, initialData);
    resp.set("Content-Type", "text/html");
    resp.send(response);
}

export function mockResponse(req: Request, resp: Response) {
    let initialData;
     CommonService.fetchUserDetails().subscribe((userData: any) => {
        initialData = userData;
        const {content} = serverRender(initialData, req.url);
        const response =  template("Dashboard", content, initialData);
        resp.set("Content-Type", "text/html");
        resp.send(response);
    });
   
}