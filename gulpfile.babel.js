'use strict';

import del from 'del';
import gulp from 'gulp';
import sass from 'gulp-sass';

sass.compiler = require('node-sass');

const gRoutes = {
    scss: {
        watch: "src/scss/**/*.scss",
        src: "src/scss/style.scss",
        dest: "build/css"
    }
};

const styles = () =>
    gulp
        .src(gRoutes.scss.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(gRoutes.scss.dest));

const clean = () => del(['build/']);

const watch = () => {
    gulp.watch(gRoutes.scss.watch, styles);
};

const prepare = gulp.series([clean]);

const assets = gulp.series([styles]);

const postDev = gulp.series([watch]);

export const dev = gulp.series([prepare, assets, postDev]);