'use strict';

import routes from '../routes';
import { videos } from '../testdb';

// for globalRouter
// home
export const home = (req, res) => {
    res.render("home", { pageTitle: 'Home', videos });
};

// search
export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    res.render("search", { pageTitle: 'Search', searchingBy, videos });
};

// for videoRouter
// upload
export const getUpload = (req, res) => {
    res.render("upload", { pageTitle: 'Upload' });
};

export const postUpload = (req, res) => {
    const {
        body: { file, title, description }
    } = req;
    // To do: Upload and save video
    res.redirect(`${routes.videos}${routes.videoDetail()}`);
};

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: 'Video Detail' });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: 'Edit Video' });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: 'Delete Video' });