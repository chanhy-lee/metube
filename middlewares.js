'use strict';

import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'MeTube';
    res.locals.routes = routes;
    next();
};

export const setHeaderMiddleware = (req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org https://kit.fontawesome.com");
    next();
};