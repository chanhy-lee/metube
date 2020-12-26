'use strict';

import routes from "../routes";

// for globalRouter
// join
export const getJoin = (req, res) => {
    res.render("join", { pageTitle: 'Join' });
};

export const postJoin = (req, res) => {
    const {
        body: { name, email, password, verifyPassword }
    } = req;
    if (password !== verifyPassword) {
        res.status(400); // Bad Request
        res.render("join", { pageTitle: 'Join' });
    } else {
        // To do: Register user
        // To do: Log user in
        res.redirect(routes.home);
    }
};

// login
export const getLogin = (req, res) => {
    res.render("login", { pageTitle: 'Log In' });
};

export const postLogin = (req, res) => {
    const {
        body: { email, password }
    } = req;
    res.redirect(routes.home);
};

// logout
export const logout = (req, res) => {
    // To do: Process log out
    res.redirect(routes.home);
};

// for userRouter
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: 'User Detail' });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: 'Edit Profile' });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: 'Change Password' });