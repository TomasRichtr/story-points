import express from 'express';
import corsMiddleware from './server/middleware/cors.middleware';
import routerController from './server/controllers/router.controller';
import { DEFAULT_BE_PORT } from "./server/constants";
import { runDbMigrations } from "./server/db/knex.db";

const app = express();

runDbMigrations().then(() => {
  console.log("migration passed");
}).catch(() => {
  console.log("migration failed");
});


app.use(corsMiddleware);
app.use(express.json());
app.use('/', routerController);

app.listen(DEFAULT_BE_PORT, () => {
  console.log(`Listening on http://localhost:${DEFAULT_BE_PORT}`);
});
