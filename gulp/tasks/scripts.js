'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var config = require('../config.js').paths;


gulp.task('scripts', function () {
    gulp.src([
        'app/scripts/**/*.js',
        'app/scripts/libs/**/*.js'
    ])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(concat('_scripts.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.build));
});