'use strict';

import express from 'express';
import routes from '../routes';
import { changePassword, editProfile, userDetail, users } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get(routes.home, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;