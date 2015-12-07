var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    gulpif = require('gulp-if'),
    jade = require('gulp-jade'),
    inheritance = require('gulp-jade-inheritance'),
    cached = require('gulp-cached'),
    filter = require('gulp-filter'),
    prettify = require('gulp-html-prettify'),
    rename = require('gulp-rename'),
    errorHandler = require('../helpers/errorHandler'),
    config = require('../config.js').paths;


gulp.task('views', function () {
    gulp.src('app/views/**/*.jade')
        .pipe(plumber({errorHandler}))
        .pipe(cached('jade'))
        .pipe(gulpif(global.watch, inheritance({basedir: 'app'})))
        .pipe(filter(file => /app[\\\/]views/.test(file.path)))
        .pipe(jade())
        .pipe(prettify({
            brace_style: 'expand',
            indent_size: 1,
            indent_char: '\t',
            indent_inner_html: true,
            preserve_newlines: true
        }))
        .pipe(rename({dirname: '.'}))
        .pipe(gulp.dest(config.views))
});
