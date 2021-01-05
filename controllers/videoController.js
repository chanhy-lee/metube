'use strict';

import fs from 'fs';
import routes from '../routes';
import Video from '../models/Video';

// for globalRouter
// home
export const home = async (req, res) => {
    let videos = [];
    try {
        videos = await Video.find({}).sort({ _id: -1 });
    } catch(err) {}
    res.render("home", { pageTitle: 'Home', videos });
};

// search
export const search = async (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    let videos = [];
    try {
        videos = await Video.find({
            title: { $regex: searchingBy, $options: "i" }
        }).sort({ _id: -1 });
    } catch(err) {}
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
        res.render("videoDetail", { pageTitle: video.title, video });
    } catch(err) {
        res.redirect(routes.home);
    }
};

// editVideo
export const getEditVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        if (video === null) {
            throw `No video which id is ${id}`;
        }
        res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
    } catch(err) {
        res.redirect(routes.home);
    }
};

export const postEditVideo = async (req, res) => {
    const {
        params: { id },
        body: { title, description }
    } = req;
    try {
        await Video.findOneAndUpdate({ _id: id }, { title, description });
        res.redirect(`${routes.videos}${routes.videoDetail(id)}`);
    } catch(err) {
        res.redirect(routes.home);
    }
};

// deleteVideo
export const deleteVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findOneAndRemove({ _id: id });
        fs.unlinkSync(video.fileUrl);
    } catch(err) {}
    res.redirect(routes.home);
};