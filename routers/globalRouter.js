'use strict';

import express from 'express';
import routes from '../routes';
import { home, search } from '../controllers/videoController';
import { getJoin, login, logout, postJoin } from '../controllers/userController';

const globalRouter = express.Router();

// home
globalRouter.get(routes.home, home);

// search
globalRouter.get(routes.search, search);

// join
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

// login
globalRouter.get(routes.login, login);

// logout
globalRouter.get(routes.logout, logout);

export default globalRouter;