'use strict';

var gulp = require('gulp');
var changed = require('gulp-changed');
var filter = require('gulp-filter');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');
var config = require('../config').paths;


gulp.task('copy', function () {
    gulp.src('app/resources/**/*')
        .pipe(changed(config.distPath))
        .pipe(imagemin({optimizationLevel: 3}))
        .pipe(gulp.dest(config.distPath));
});

gulp.task('copy-local', function () {
    gulp.src(['app/resources/**/*', 'app/resources/.htaccess'])
        .pipe(changed(config.distPath))
        .pipe(gulpif(!gutil.env.robots, filter(function (file) {
            return !/resources[\\\/]robots\.txt/.test(file.path);
        })))
        .pipe(imagemin({optimizationLevel: 3}))
        .pipe(gulp.dest(config.distPath));
});