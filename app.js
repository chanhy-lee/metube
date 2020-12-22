'use strict';

import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';
import routes from './routes';

const app = express();

// app settings
app.set('view engine', 'pug');

// global middlewares(before routes)
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet()); // for security
app.use(morgan('dev')); // for logging

// routes
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;