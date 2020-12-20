'use strict';

import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();

const handleHome = (req, res) => {
    res.send("This is a home page");
}

const handleProfile = (req, res) => {
    res.send("This is a profile page");
}

// global middlewares(before routes)
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet()); // for security
app.use(morgan('dev')); // for logging

// routes
app.get("/", handleHome);

app.get("/profile", handleProfile);

export default app;