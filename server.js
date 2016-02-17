import express from 'express';
import bodyParser from 'body-parser';
import Debug from 'debug';
import morgan from 'morgan';
import fs from 'fs';
import _ from 'lodash';
import cors from 'cors';
import Route from './libs/Route';
const debug = Debug('Test:Server');
const PORT = process.env.PORT || 8080;
const app = express();

// Middlewares
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

// CORS
app.use(cors({
  origin: '*',
}));

// Bind Routes
Route(app);

app.listen(PORT, () => {
  debug(`API Server listen on ${PORT}`);
});
