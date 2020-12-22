'use strict';

import express from 'express';
import routes from '../routes';
import { deleteVideo, editVideo, upload, videoDetail } from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;