'use strict';

import multer from 'multer';
import routes from "./routes";

const multerVideo = multer({ dest: "videos/"});

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'MeTube';
    res.locals.routes = routes;
    res.locals.user = {
        // data for testing
        isAuthenticated: true,
        id: 1
    };
    next();
};

export const setHeaderMiddleware = (req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org https://kit.fontawesome.com");
    next();
};

export const uploadVideo = multerVideo.single("videoFile");