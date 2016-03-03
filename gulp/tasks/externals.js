'use strict';

var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var config = require('../config').paths;

gulp.task('externals', function () {
    var vendors = mainBowerFiles('**/*.js', {
        "overrides": {
            "es5-shim": {
                "ignore": true
            },
            "event-shim.js": {
                "ignore": true
            },
            "html5shiv": {
                "ignore": true
            },
            "css3-mediaqueries-js": {
                "ignore": true
            }
        }
    });

    gulp.src(vendors)
        .pipe(uglify())
        .pipe(concat('_externals.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.build));

    gulp.src(mainBowerFiles('**/*.js'))
        .pipe(gulp.dest(config.vendors));
});