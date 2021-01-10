'use strict';

import autoPrefixer from 'gulp-autoprefixer';
import del from 'del';
import gulp from 'gulp';
import sass from 'gulp-sass';

sass.compiler = require('node-sass');

const gRoutes = {
    scss: {
        watch: "src/scss/**/*.scss",
        src: "src/scss/style.scss",
        dest: "assets/css"
    }
};

const styles = () =>
    gulp
        .src(gRoutes.scss.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoPrefixer())
        .pipe(gulp.dest(gRoutes.scss.dest));

const clean = () => del(['assets/']);

const watch = () => {
    gulp.watch(gRoutes.scss.watch, styles);
};

const prepare = gulp.series([clean]);

const assets = gulp.series([styles]);

const postDev = gulp.series([watch]);

export const dev = gulp.series([prepare, assets, postDev]);