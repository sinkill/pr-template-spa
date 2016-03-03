'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var gulpif = require('gulp-if');
var jade = require('gulp-jade');
var inheritance = require('gulp-jade-inheritance');
var cached = require('gulp-cached');
var filter = require('gulp-filter');
var prettify = require('gulp-prettify');
var rename = require('gulp-rename');
var errorHandler = require('gulp-plumber-error-handler');
var config = require('../config.js').paths;


gulp.task('views', function () {
    gulp.src('app/**/*.jade')
        .pipe(plumber({errorHandler: errorHandler('Error in \'views\' task')}))
        .pipe(cached('jade'))
        .pipe(gulpif(global.watch, inheritance({basedir: 'app'})))
        .pipe(filter(function (file) {
            return /app[\\\/]views/.test(file.path);
        }))
        .pipe(jade())
        //.pipe(prettify({
        //    brace_style: 'expand',
        //    indent_size: 1,
        //    indent_char: '\t',
        //    indent_inner_html: true,
        //    preserve_newlines: true
        //}))
        .pipe(rename({dirname: '.'}))
        .pipe(gulp.dest(config.views));
});