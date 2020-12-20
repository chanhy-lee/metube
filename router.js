'use strict';

import express from 'express';

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send('user index'));
userRouter.get("/edit", (req, res) => res.send('user edit'));
userRouter.get("/profile", (req, res) => res.send('user profile'));