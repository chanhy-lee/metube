'use strict';

import autoPrefixer from 'gulp-autoprefixer';
import babelify from 'babelify';
import bro from 'gulp-bro';
import csso from 'gulp-csso';
import del from 'del';
import gulp from 'gulp';
import sass from 'gulp-sass';

sass.compiler = require('node-sass');

const gRoutes = {
    scss: {
        watch: "assets/scss/**/*.scss",
        src: "assets/scss/style.scss",
        dest: "static/css"
    },
    js: {
        watch: "assets/js/**/*.js",
        src: "assets/js/main.js",
        dest: "static/js"
    }
};

const styles = () =>
    gulp
        .src(gRoutes.scss.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoPrefixer())
        .pipe(csso())
        .pipe(gulp.dest(gRoutes.scss.dest));

const js = () =>
    gulp
        .src(gRoutes.js.src)
        .pipe(bro({
            transform: [
                babelify.configure({ presets: ["@babel/preset-env"] }),
                ["uglifyify", { global: true }]
            ]
        }))
        .pipe(gulp.dest(gRoutes.js.dest));

const clean = () => del(['static/']);

const watch = () => {
    gulp.watch(gRoutes.scss.watch, styles);
    gulp.watch(gRoutes.js.watch, js);
};

const prepare = gulp.series([clean]);

const assets = gulp.series([styles, js]);

const postDev = gulp.series([watch]);

export const dev = gulp.series([prepare, assets, postDev]);