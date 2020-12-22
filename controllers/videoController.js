'use strict';

// for globalRouter
export const home = (req, res) => res.render("home");
export const search = (req, res) => res.render("Search");

// for videoRouter
export const upload = (req, res) => res.render("upload");
export const videoDetail = (req, res) => res.render("videoDetail");
export const editVideo = (req, res) => res.render("editVideo");
export const deleteVideo = (req, res) => res.render("deleteVideo");