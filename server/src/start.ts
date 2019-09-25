import app from '@server';
import { logger } from '@shared';
import {createConnection} from "typeorm";
import dbConfig from "./config/orm.config";

const port = Number(process.env.PORT || 3000);

createConnection(dbConfig)
    .then(connection => connection.runMigrations())
    .then(() => {
        app.listen(port, () => {
            logger.info('Express server started on port: ' + port);
        });
    })
    .catch(e => console.log(e.message));
// Start the server


