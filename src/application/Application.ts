import express, {Router} from "express";
import type { Application as ExpressApplication } from "express";
import bodyParser from "body-parser";

export class Application {
    private readonly express : ExpressApplication;
    private readonly port : string;

    constructor(port : string) {
        this.express = express();
        this.express.use(bodyParser.json());
        this.port = port;
    }

    attachRouter(router : Router) {
        this.express.use(router);
    }
    
    async start() {
        this.express.listen(this.port,() => {console.log(`[server]: Server is running at https://localhost:${this.port}`);})
    }
}