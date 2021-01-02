'use strict';

import routes from '../routes';
import Video from '../models/Video';

// for globalRouter
// home
export const home = async (req, res) => {
    try {
        const videos = await Video.find({});
        res.render("home", { pageTitle: 'Home', videos });
    } catch(err) {
        console.log(err);
        res.render("home", { pageTitle: 'Home', videos: [] });
    }
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

export const postUpload = async (req, res) => {
    const {
        body: { title, description },
        file: { path }
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    console.log(newVideo);
    res.redirect(`${routes.videos}${routes.videoDetail(newVideo.id)}`);
};

// videoDetail
export const videoDetail = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        if (video === null) {
            throw `No video which id is ${id}`;
        }
        res.render("videoDetail", { pageTitle: 'Video Detail', video });
    } catch(err) {
        console.log(err);
        res.redirect(routes.home);
    }
};

// editVideo
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: 'Edit Video' });

// deleteVideo
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: 'Delete Video' });