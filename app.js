'use strict';

import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { localsMiddleware, setHeaderMiddleware } from './middlewares';
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import routes from './routes';

const app = express();

// global middlewares (before routes)
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'", "http://*.fontawesome.com"],
        scriptSrc: ["'self'", "http://*.fontawesome.com"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        upgradeInsecureRequests: []
    }
})); // for security
app.set('view engine', 'pug');
app.use("/uploads", express.static("uploads")); // route user to 'uploads' directory
app.use("/static", express.static("static")); // route to 'static' to load css and js
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev')); // for logging
app.use(localsMiddleware); // give local variables to pug templates
app.use(setHeaderMiddleware); // set header

// routes
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;