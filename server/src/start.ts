import injectApi from '@server';
import { logger } from '@shared';
import express from 'express';
import {createConnection} from "typeorm";
import dbConfig from "./config/orm.config";
import * as path from "path";
import * as fs from "fs";
import socketInjector from "./socket/inject";
const http = require("http");

const port = Number(process.env.PORT || 3000);

createConnection(dbConfig)
    .then(connection => connection.runMigrations())
    .then(() => {
        const app = express();
        const io = require("socket.io")(
            http.createServer(app).listen(port, () => {
                logger.info('Express server started on port: ' + port);
            })
        );

        app.use(socketInjector(io));
        injectApi(app);

        const staticPath = path.resolve(path.resolve(`${__dirname}/../../client/build`));
        app.use(express.static(staticPath));
        if (process.env.NODE_ENV === "production") {
            app.get("*", (req, res) => {
                res.write(fs.readFileSync(path.resolve(`${__dirname}/../../client/build/index.html`)));
                res.end();
            });
        }
    })
    .catch(e => console.log(e.message));
// Start the server


