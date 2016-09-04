import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from 'morgan';

import routesBinder from './libs/Route';


const app = express();

// Middlewares

// app.disable('etag'); force to disable HTTP status 304

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cors
app.use(cors({ origin: '*' }));
app.use((req, res, next) => ((req.method === 'OPTIONS') ? res.status(204).end() : next()));
// Bind Routes
routesBinder(app);

module.exports = app;
