import * as express from "express";
import bodyParser from "body-parser";
import { allRoutes } from "./src/ssr/routes/all-routes";

const app = express();
app.use(bodyParser());


allRoutes(app);

// start the server
app.listen(process.env.PORT || 3000, () => {
  console.log("server started on port" + process.env.PORT);
});