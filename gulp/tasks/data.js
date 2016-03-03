'use strict';

var gulp = require('gulp');
var changed = require('gulp-changed');
var config = require('../config').paths;


gulp.task('data', function () {
    gulp.src('app/data/**/*')
        .pipe(changed(config.data))
        .pipe(gulp.dest(config.data));
});