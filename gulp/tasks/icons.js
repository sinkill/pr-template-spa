'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var svgSymbols = require('gulp-svg-symbols');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var path = require('path');
var errorHandler = require('gulp-plumber-error-handler');
var config = require('../config').paths;


gulp.task('icons', function () {
    gulp.src('app/icons/**/*.svg')
        .pipe(plumber({errorHandler: errorHandler('Error in "icons" task')}))
        .pipe(svgSymbols({
            title: false,
            id: 'icon_%f',
            className: '%f',
            templates: [
                path.join(__dirname, '../node_modules/stylus-svg-size-template/svg-size.styl'),
                'default-svg'
            ]
        }))
        .pipe(gulpif(/\.styl$/, gulp.dest(config.appStylesHelpers)))
        .pipe(gulpif(/\.svg$/, rename('icon.svg')))
        .pipe(gulpif(/\.svg$/, gulp.dest(config.icons)));
});