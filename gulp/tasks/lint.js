'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var eslint = require('gulp-eslint');
var errorHandler = require('gulp-plumber-error-handler');


gulp.task('lint', function () {
    gulp.src('**/*.js', {cwd: 'app'})
        .pipe(plumber({errorHandler: errorHandler('Error in \'lint\' task')}))
        .pipe(eslint())
        .pipe(eslint.format());
});