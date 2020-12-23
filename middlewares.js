'use strict';

import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'MeTube';
    res.locals.routes = routes;
    next(); // for route functions
};